let tiles = grid.getElementsByClassName("tile");
const newGame = document.getElementById("new-game");

newGame.onclick = function() {
    loadSudoku();
}

function loadSudoku(){
    let sudoku = generateNewSudoku("medium");
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].style.fontSize = "0vh";
        setTimeout(() => {
            tiles[i].style.fontSize = "2.8vh";
            tiles[i].textContent = sudoku[i];
        }, 150);
    }
}

loadSudoku()

