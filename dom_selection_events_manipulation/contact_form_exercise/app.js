//Change name card on key up of input

var fullName = document.getElementById("full-name");

fullName.addEventListener("keyup", function() {
	if (this.value.length === 0){
		document.getElementById("name-card").innerHTML = "Jonny Doe";
	} else {
		document.getElementById("name-card").innerHTML = this.value;
	}
});

//Make sure that about yourself is no longer than 140 characters

var aboutYou = document.getElementById("about-yourself");

aboutYou.addEventListener("keyup", function() {
	if (this.value.length > 10){
		alert("too long");
	}
});

//check if username is more than 4 characters

var username = document.getElementById("username");

username.addEventListener("blur", function() {
	if (this.value.length < 5) {
		alert("Username is too short.");
	}
});








