const grid = document.getElementById("grid");

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
    })
    tile.onmouseover = function() {
        advancedHover(tile.id)
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