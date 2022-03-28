const grid = document.getElementById("grid");
const disallowedKeys = ["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"];
let sudoku

let difficulty = "easy";

for (let i = 0; i < 81; i++) {
    let tile = document.createElement("div");
    tile.classList.add("tile");
    tile.id = i;   
    tile.tabIndex = 0
    tile.onclick = function() {
        if (parseInt(activeButton)) {
            tile.textContent = activeButton;
        }else if (activeButton === "delete") {
            tile.textContent = "";
        }
    }
    tile.addEventListener("keydown", (e) => {
        handleKeyboard(e, tile, grid)
        if(!disallowedKeys.includes(e.key)){
            checkError(tile.id)
        }
        if(checkIfSolved()){
            handleWinScreen();
        }
    })
    tile.onmouseover = function() {
        advancedHover(tile.id)
    }
    tile.onfocus = function() {
        advancedHover(tile.id)
    }
    tile.onblur = function() {
        removeHoverEffect()
    }
    tile.onmouseleave = function() {
        removeHoverEffect()
    }

    grid.append(tile) 
}

function handleKeyboard(e,tile,grid){
    if (e.key === "Backspace" || e.key === "Delete") {
        tile.textContent = "";
    }else if (parseInt(e.key) && e.key != "0") {
        tile.textContent = e.key;
    }
    switch (e.key) {
        case "ArrowUp":
            if(grid.children[tile.id - 9]){
                grid.children[tile.id - 9].focus();
            }
            break;
        case "ArrowDown":
            if (grid.children[parseInt(tile.id) + 9]) {
                grid.children[parseInt(tile.id) + 9].focus();
            }
            break;
        case "ArrowLeft":
            if (grid.children[tile.id - 1]) {
                grid.children[tile.id - 1].focus();
            }
            break;       
        case "ArrowRight":
            if (grid.children[parseInt(tile.id) + 1]) {
                grid.children[parseInt(tile.id) + 1].focus();
            }
            break; 
        default:
            break;
    }
}

function handleWinScreen(){
    const page = document.getElementById("page");
    const winScreen = document.getElementById("win-screen");
    const solvedTime = document.getElementById("solved-time");
    const solvedDifficulty = document.getElementById("solved-difficulty");

    page.style.display = "none"
    winScreen.style.display = "flex"
    solvedTime.textContent = timer.textContent;
    solvedDifficulty.textContent = difficulty.toUpperCase();

    const backButton = document.getElementById("back-button");
    backButton.onclick = function() {
        loadSudoku();
        resetTimer();
        page.style.display = "block"
        winScreen.style.display = "none"
    }
}