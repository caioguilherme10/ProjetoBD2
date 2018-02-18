//(function(){

const novoEmail = document.getElementById('email');
const novoPass = document.getElementById('password');
const novoName = document.getElementById('first_name');

var database = firebase.database();

btnNovo.addEventListener('click' , e => {
    
    var confirma = cadastra(novoName.value, novoEmail.value, novoPass.value);
    
});

function cadastra(novoName1, novoEmail1, novoPass1){
    
    //Para testar si o usuario preencheu os campos.
    if((novoName1!="")&&(novoEmail1!="")&&(novoPass1!="")){
        //Cria o usuario no firebase no autenticar.
        firebase.auth().createUserWithEmailAndPassword(novoEmail1, novoPass1).then(function(){
            // Update successful.
            //Cria o usuario no firebase no database.
            //database.ref('users/' + novoName1).set({
            //    name : novoName1,
            //    email : novoEmail1,
            //    pass : novoPass1
            //}).key; 
            firebase.database().ref('users/').push({
                name : novoName1,
                email : novoEmail1,
                pass : novoPass1
            }).key;     

            var user = {
                nome : novoName1,
                email: novoEmail1,
                pass: novoPass1
            };
    
            var array = localStorage.getObject("usuario");
            array.push(user);
            localStorage.setObject("usuario", array);
            
            alert("Cadastro feito com sucesso!")
            window.location.replace("telaprincipal.html");
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

//}());