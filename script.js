var button = document.getElementsByClassName("enter")[0];
var input = document.getElementById("user-input");
var ul = document.querySelector("ul");


function getLength() {
	return input.value.length;
}




function createListElement() {
	var li = document.createElement("li");
	var delbtn = document.createElement("button");
	ul.appendChild(li);
	li.appendChild(document.createTextNode(input.value + " "));
	li.appendChild(delbtn);
	delbtn.appendChild(document.createTextNode("Delete"))
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (getLength() > 0) {
		createListElement();
	}
}

function addListAfterEnter(event) {
	if (getLength() > 0 && event.key === "Enter") {
		createListElement();
	}
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterEnter);


var delbtns = document.getElementsByTagName("button");

function removeParentElement(evt) {
	console.log(evt.path[0]);
	var bt =  evt.path[0];
	

for (var i = 0; i < delbtns.length; i++) {
	delbtns[i].addEventListener("click", removeParentElement);
}