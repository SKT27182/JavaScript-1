var button = document.getElementsByClassName("enter")[0];
var input = document.getElementById("user-input");
var ul = document.querySelector("ul");

function getLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick(){
	if (getLength() > 0) {
		createListElement();
	}
}

function addListAfterEnter(event){
	if(getLength() > 0 && event.key=== "Enter"){
		createListElement();
	}
}


button.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterEnter);