function loadBorder(){
    for (let i = 0; i < tiles.length; i++) {
        if(i % 9 == 3){
            tiles[i].classList.add("vertical-left");
        }
        if(i % 9 == 5){
            tiles[i].classList.add("vertical-right");
        }
        if(Math.floor(i / 9) % 3 == 0){
            tiles[i].classList.add("horizontal-top");
        }
    }
}

loadBorder()