var database = [
	{
		username: "skt",
		password: "tiwari1"
	},
	{
		username: "roli",
		password: "tiwari2"
	},
	{
		username: "priti",
		password: "tiwari3"
	}
];

var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

var userNamePrompt = prompt("What's your username ?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password){
	for(var i=0; i< database.length; i++){
		if(username === database[i].username && password === database[i].password){
			return true;
		}
	}
	return false;
}

function signIn(user, pass) {
	if(isUserValid(user, pass)){
		console.log(newsfeed);
	}else{
		alert("wrong");
	}
		
}

signIn(userNamePrompt, passwordPrompt);