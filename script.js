var count =10;
do {
	console.log(count);
	count--;
}while(count >0);

var todos1 = [
	"clean room",
	"brush teeth",
	"hair wash",
	"walking",
	"singing"
]

var todos2 = [
	"clean room",
	"brush teeth",
	"hair wash",
	"walking",
	"singing"
]

var toods1Lenght = todos1.length;
for(var i =0; i< toods1Lenght; i++){
	console.log(i);
}

function logTodo(todo, i) {
	console.log(todo,i);
}

todos1.forEach(logTodo);
todos2.forEach(logTodo);