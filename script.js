function sayHello() {
    console.log("hello How are you", "I am good");
}

sayHello();


var Byebye = function() {
    console.log("bye bye guys");
}

Byebye();

function sing(song){
    console.log(song);
}

sing("Laa De Daaa");
sing("haaaa maaaa");

function multiply(a,b){
    return a*b;
}

multiply(5,6);

function checkDriverAge(){
    var age = prompt("What is your age?");

    if (Number(age) < 18) {
	    alert("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
	    alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
	    alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}