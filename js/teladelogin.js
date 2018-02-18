(function(){
	// Initialize Firebase
	var config = {
        apiKey: "AIzaSyD6KajXkA3X6XZcJq6j3Vc4Fdx8Tx8_AQY",
        authDomain: "projetobd-6b214.firebaseapp.com",
        databaseURL: "https://projetobd-6b214.firebaseio.com",
        projectId: "projetobd-6b214",
        storageBucket: "",
        messagingSenderId: "658505320703"
    };
	firebase.initializeApp(config);
	
	// Pego os elementos do html email, senha e do butao logar.
	const Email = document.getElementById('email');
	const Password = document.getElementById('password');
	const btnSignIn = document.getElementById('buttonSignIn');
	
	// Funçao de login. quando ele de um click no butao login vai ativar essa funçao, que serve para logar ele no firebase.
	btnSignIn.addEventListener('click', e => {
		
        var confirma = logar(Email.value,Password.value);

	});
	
	function logar(email,pass){
		
		const auth = firebase.auth();
		
		//o metodo signInWithEmailAndPassword serve para fazer o login no firebase.
        auth.signInWithEmailAndPassword(email, pass).then(function(){

            var user = {
                email: Email.value,
                pass: Password.value
            };
    
            var array = localStorage.getObject("usuario");
            array.push(user);
            localStorage.setObject("usuario", array);    
    
            window.location.replace("telaprincipal.html");

        }, function(error) {
			// Handle Errors here.
			if (email == ""||pass == "") {
                alert("Preencha os dados vazios!")
                return false;
			}else{
                alert("Dados incorretos!")
                return false;
			}
			// ...
		});
	}
	
}());