function traductor(){
	var title = document.getElementById("form-signin-heading");
	var email = document.getElementById("inputEmail");
	var password = document.getElementById("inputPassword");

	var remember = document.getElementsByTagName("span")[0];
	var button = document.getElementsByClassName("btn")[0];

	title.innerHTML ="Por favor inicia sesión";
	email.placeholder = "Correo Electrónico";
	password.placeholder = "Contraseña";
	remember.innerHTML = "Recordar datos";
	button.innerHTML = "Iniciar Sesión";

}

traductor();

/*
function mostrar(){
	var correo = document.form_control.inputEmail.value;
	var contraseña = document.form_control.inputPassword.value;

	//document.write('El correo ingresado es :' + correo);
	//document.write('La contraseña ingresada es : ' + contraseña);

	document.getElementById("inputEmail").value
}



mostrar();	
*/