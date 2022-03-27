let tiles = grid.getElementsByClassName("tile");
const newGame = document.getElementById("new-game");

newGame.onclick = function() {
    loadSudoku();
}

function loadSudoku(){
    let sudoku = generateNewSudoku("medium");
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].textContent = sudoku[i];
    }
}

loadSudoku()

