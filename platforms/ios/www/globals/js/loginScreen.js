//front login logic
//create user login

//var users = new Array (10);

function user (name, pwd){
	this.name = name; 
	this.pwd = pwd;
	this.orders = [];
	this.giftCard = {id: "1234567", value : 50};
}

function access (){
	logName = document.getElementById("username").value;
	pass = document.getElementById("password").value;
	//logName = prompt ("LogIn: ", "");
	//pass = prompt ("PassWord: ", "");
	start = new Date();
	user1 = new user (logName, pass)
	users.push(user1);

	
	window.location.href="#maincategories";
	//alert (users [0].name);
	//obj = JSON.stringify(user1);
	
}

