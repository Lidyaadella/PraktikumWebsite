var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var emailError = document.getElementById('emailError');
var passError = document.getElementById('passError');

email.addEventListener('textInput',emailVerifikasi);
password.addEventListener('textInput',passVerifikasi);

function validasi(){
	if (email.value.length < 9){
		email.style.border = "1px solid red";
		emailError.style.display="block";
		email.focus();
		return false;
	}
	if (password.value.length < 6){
		password.style.border = "1px solid red";
		passError.style.display = "block";
		password.focus();
		return false;
	}
}
function usernameVerifikasi(){
	if (email.value.length >= 8){
		email.style.border ="1px solid silver";
		emailError.style.display ="none";
		return true;
	}
}

function passVerifikasi(){
	if (password.value.length >=8){
		password.style.border ="1px solid silver";
		passError.style.display ="none";
		return true;
	}
}
function addname(){
	var email = document.getElementById("email").value;
	console.log(email);
	if(!email|| !password){
		alert("Harap isi form ini")
	}
	else{
		alert(" Selamat Datang " +email)
	}
}