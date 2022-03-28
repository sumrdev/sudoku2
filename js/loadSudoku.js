let tiles = grid.getElementsByClassName("tile");
const newGame = document.getElementById("new-game");
const timer = document.getElementById("time");

newGame.onclick = function() {
    loadSudoku();
    resetTimer();
}

function loadSudoku(){
    let sudo = generateNewSudoku(difficulty);
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].style.fontSize = "0vh";
        setTimeout(() => {
            tiles[i].style.fontSize = "2.8vh";
            tiles[i].textContent = sudo[i];
        }, 150);
    }
    sudoku = sudo
}


loadSudoku()

