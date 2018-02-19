firebase.auth().onAuthStateChanged(firebaseUser =>{
    if(firebaseUser){
        console.log("ta on");
    }else{
        console.log("ta off");
        alert("Tem que estar logado para fazer cadastro da localidade");
        window.location.replace("teladecadastro.html");
    }
});

const nome = document.getElementById('Nome_Localidade');
const rua = document.getElementById('Rua_Localidade');
const bairro = document.getElementById('Bairro_Localidade');
const cidade = document.getElementById('Cidade_Localidade');

var array = localStorage.getObject("ponto");

const lat = array[0];
const lng = array[1];

var database = firebase.database();

btnNovo.addEventListener('click' , e => {
    
    var confirma = cadastra(nome.value, rua.value, bairro.value, cidade.value, lat, lng);
    
});

function cadastra(nome1, rua1, bairro1, cidade1, lat1, lng1){

    if((nome1!="")&&(rua1!="")&&(bairro1!="")&&(cidade1!="")){

        firebase.database().ref('localidade/').push({
            nome : nome1,
            rua : rua1,
            bairro : bairro1,
            cidade : cidade1,
            lat : lat1,
            lng : lng1
        }).key;

        alert("Cadastro feito com sucesso!")
        window.location.replace("telaprincipal.html");
		return true;

    }else{
        alert("ERRO! Nao preencheu os campos!");
        return false;
    }

}