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


const novoEmail = document.getElementById('email');
const novoPass = document.getElementById('password');
const novoName = document.getElementById('first_name');

btnNovo.addEventListener('click' , e => {
    
    var confirma = cadastra(novoName.value, novoEmail.value, novoPass.value);

    if(confirma){
        var user = {
            name: novoName.value,
            email: novoEmail.value,
            pass: novoPass.value
        };
    
        var array = localStorage.getObject("usuario");
        array.push(user);
        localStorage.setObject("estoque", array);        
    
        window.location.replace("telaprincipal.html");
    }
    
});

function cadastra(novoName, novoEmail, novoPass){
    
    //Para testar si o usuario preencheu os campos.
    if((novoName!="")&&(novoEmail!="")&&(novoPass!="")){
        //Cria o usuario no firebase no autenticar.
        firebase.auth().createUserWithEmailAndPassword(novoEmail, novoPass).then(function(){
            // Update successful.
            //Cria o usuario no firebase no database.
            firebase.database().ref('user/').push({
                name : novoName,
                email : novoEmail,
                pass : novoPass
            }).key;
            
            alert("Cadastro feito com sucesso!")
            return true;
        }, function(error) {
            // An error happened. Erro de criaçao no autenticar.
            if(document.getElementById("email").value == "" || document.getElementById("password").value == "" ){
                alert("Preencha as campos vazios!")
                return false;
            }else{
                alert("Dados incorretos")
                return false;
            }
        });
        
    }else{
        alert("ERRO! Nao clicou na cor ou Nao adicionou o arquivo ou Nao preencheu o campo nome!");
        return false;
    }
}
}());