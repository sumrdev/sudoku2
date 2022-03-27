const x3squares = [
    [0, 1, 2, 9, 10, 11, 18, 19, 20],
    [3, 4, 5, 12, 13, 14, 21, 22, 23],
    [6, 7, 8, 15, 16, 17, 24, 25, 26],
    [27, 28, 29, 36, 37, 38, 45, 46, 47],
    [30, 31, 32, 39, 40, 41, 48, 49, 50],
    [33, 34, 35, 42, 43, 44, 51, 52, 53],
    [54, 55, 56, 63, 64, 65, 72, 73, 74],
    [57, 58, 59, 66, 67, 68, 75, 76, 77],
    [60, 61, 62, 69, 70, 71, 78, 79, 80],
];

function x3SquareCheck(index) {
    for (let i = 0; i < x3squares.length; i++) {
        if (x3squares[i].includes(index)) {
            return x3squares[i];
        }
    }
}

function advancedHover(tileId){
    for (let i = 0; i < tiles.length; i++) {
        if( Math.floor(tileId % 9) == Math.floor(i % 9) || 
            Math.floor(tileId / 9) == Math.floor(i / 9) ||
            x3SquareCheck(parseInt(tileId)).includes(i))
        {
            tiles[i].classList.toggle("hover-effect");
        }

        if( tiles[tileId].textContent == tiles[i].textContent && 
            tiles[tileId].textContent != "")
        {
            tiles[i].classList.toggle("hover-effect-same");
        }

    }
}

function removeHoverEffect(){
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].classList.remove("hover-effect");
        tiles[i].classList.remove("hover-effect-same");
    }
}