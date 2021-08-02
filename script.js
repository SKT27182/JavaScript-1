var array = ["tiger", "lion", "monkey", "ram", "Shayam"];
console.log(array);

array[0];             //Access the element at 0 index
array.push("Hi");    //Add Hi to the last
console.log(array);
array.splice(0,1);   //Removes the element at 0 ndex and removes only 1 element
console.log(array);
array.sort();       //sorts the list in acessending
console.log(array);
var new1 = array.concat(["Girl","boy"]);   //cncat two or more lists
console.log(new1);

var obj = {
	name: "Jonshon",
	hobby: "Cricket",
	age: 34,
	isMarried: false,
};