function hasDuplicates(arr) {
	return new Set(arr).size !== arr.length;
}

function removeEmptyStr(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != "") {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function checkIfSolved() {
	const gridContainer = tiles;
    masterList = createRuleGrids();
    for (let i = 0; i < tiles.length; i++) {
        if (tiles[i].textContent == "") {
            return false
        }        
    }

    for (let i = 0; i < 81; i++) {
		if (tiles[i].textContent != sudoku[i] && sudoku[i] != "") {
			return illegalSubmit("Cheating detected");
		}
	}

	for (let i = 0; i < 9; i++) {
		if (
			hasDuplicates(masterList.horizontalGrid[i]) ||
			hasDuplicates(masterList.verticalGrid[i]) ||
			hasDuplicates(masterList.x3Grid[i])
		) {
			return false;
		}
	}
	return true;
}


function checkX3(n){
    for (let i = 0; i < x3squares.length; i++) {
        if (x3squares[i].includes(parseInt(tiles[n].id))) {
            if(hasDuplicates(removeEmptyStr(masterList.x3Grid[i]))){
                return true;
            }
        }
    }  
}

function createRuleGrids() {
	const gridContainer = tiles;

	let grid = [];
	let horizontalGrid = [];
	let verticalGrid = [];
	let x3Grid = [[], [], [], [], [], [], [], [], []];

	for (let i = 0; i < 81; i++) {
		let el = gridContainer;
		grid.push(el[i].textContent);
	}

	for (let i = 0; i < 9; i++) {
		horizontalGrid.push([]);
		for (let j = 0; j < 9; j++) {
			horizontalGrid[i].push(grid[i * 9 + j]);
		}
	}

	for (let i = 0; i < 9; i++) {
		verticalGrid.push([]);
		for (let j = 0; j < 9; j++) {
			verticalGrid[i].push(horizontalGrid[j][i]);
		}
	}

	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			for (let x = 0; x < x3squares.length; x++) {
				if (x3squares[x].includes(i * 9 + j)) {
					x3Grid[x].push(grid[i * 9 + j]);
				}
			}
		}
	}
	return { horizontalGrid, verticalGrid, x3Grid };
}
