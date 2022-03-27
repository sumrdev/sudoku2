const inputButtons = document.getElementById("input-buttons");
let buttonConstruction = ["1", "2", "3", "4", "5", "6", "7", "8", "9" , "delete"];
let activeButton = "";

for (let i = 1; i < 11; i++) {
	let button = document.createElement("button");
	button.classList.add("button");
	button.id = buttonConstruction[i-1];
	button.innerHTML = buttonConstruction[i-1];
	inputButtons.append(button);    
	button.onclick = function() {
		let activeBefore = false 
		
		button.id == activeButton ? activeBefore = true : activeBefore = false;
		
		let activeButtons = document.getElementsByClassName("active")
		for (let i = 0; i < activeButtons.length; i++) {
			activeButtons[i].classList.toggle("active");	
		}
		this.classList.toggle("active");
		
		activeButton = this.id;

		if (activeBefore) {
			activeButton = "";
			button.classList.toggle("active");
		}
	}	
}