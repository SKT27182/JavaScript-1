var button = document.getElementsByClassName("enter")[0];
var input = document.getElementById("user-input");
var ul = document.querySelector("ul");


function getLength() {
	return input.value.length;
}




function createListElement() {
	var li = document.createElement("li");
	var delbtn = document.createElement("button");
	var span = document.createElement("span");
	ul.appendChild(li);
	span.innerText = input.value;
	li.appendChild(span);
	li.appendChild(delbtn);
	delbtn.onclick = function(){
		const parentElement =this.parentNode;
		this.parentNode.remove();
	}
	delbtn.appendChild(document.createTextNode("Delete"));
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

function removeParentElement(btn) {
	btn.parentNode.remove();	
}

for (let i = 0; i < delbtns.length; i++) {
	delbtns[i].addEventListener("click", ()=>{removeParentElement(delbtns[i])});
}