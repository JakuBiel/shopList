const input = document.querySelector("#username");

input.addEventListener("keydown", function () {
	console.log("keydown");
});

input.addEventListener("keyup", function () {
	console.log("keyup");
});

input.addEventListener("keypress", function () {
	console.log("keypress");
});

//shoping list

const addItemInput = document.querySelector("#addItem"); //grab input
const itemsUL = document.querySelector("#items"); //grab ul to populate

//listen to input and grab even object - for every data after which enter is pressed
addItemInput.addEventListener("keypress", function (e) {
	//if event object key pressed = Enter
	if (e.key === "Enter") {
		//if this.value is not, empty, than return = end function if input empty
		if (!this.value) return;
		//grab value of this=addItemInput
		const newItemText = this.value;
		//create new element of list
		const newItem = document.createElement("li");
		//set newItem inner text
		newItem.innerText = newItemText;
		//add new element to list
		itemsUL.appendChild(newItem);
		//clear value of input after enter
		this.value = "";
	}
});
