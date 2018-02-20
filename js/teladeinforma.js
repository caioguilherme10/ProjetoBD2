const dbRefObjec = firebase.database().ref();
const dbRefList = dbRefObjec.child('localidades');

var array = localStorage.getObject("ponto");

const lat = array[0];
const lng = array[1];

dbRefList.on('child_added', snap => {

    if((snap.val().lat == lat)&&(snap.val().lng == lng)){

        document.getElementById("Escola_Localidade").innerHTML = snap.val().nome;
        document.getElementById("Rua_Localidade").innerHTML = snap.val().rua;
        document.getElementById("Bairro_Localidade").innerHTML = snap.val().bairro;
        document.getElementById("Cidade_Localidade").innerHTML = snap.val().cidade;

        /*const db2 = firebase.database().ref('localidade/'+ snap.key + '/');
		const db3 = db2.child('media');

        var quantidade = 0;
        var soma = 0;

        db3.on('child_added', snap2 => {
            
            quantidade += 1;
            soma += snap2.val().valor;
            document.getElementById("Media_Localidade").innerHTML = soma/quantidade;

        });*/

        var localidade = {
            nome : snap.val().nome,
            rua : snap.val().rua,
            bairro : snap.val().bairro,
            cidade : snap.val().cidade,
            lat : snap.val().lat,
            lng : snap.val().lng,
            key : snap.key
        };

        salvarlocalidade(localidade);
    }

});

dbRefList.on('child_changed', snap => {

    if((snap.val().lat == lat)&&(snap.val().lng == lng)){

        document.getElementById("Escola_Localidade").innerHTML = snap.val().nome;
        document.getElementById("Rua_Localidade").innerHTML = snap.val().rua;
        document.getElementById("Bairro_Localidade").innerHTML = snap.val().bairro;
        document.getElementById("Cidade_Localidade").innerHTML = snap.val().cidade;
        
        /*const dbRefList2 = dbRefList.child('media');
        var quantidade = 0;
        var soma = 0;

        dbRefList2.on('child_added', snap2 => {
            
            quantidade += 1;
            soma += snap2.val().valor;
            console.log(quantidade/soma);
            //document.getElementById("Media_Localidade").innerHTML = soma/quantidade;

        });*/

        var localidade = {
            nome : snap.val().nome,
            rua : snap.val().rua,
            bairro : snap.val().bairro,
            cidade : snap.val().cidade,
            lat : snap.val().lat,
            lng : snap.val().lng,
            key : snap.key
        };

        salvarlocalidade(localidade);
    }
});

function salvarlocalidade(novo4){
	
	var array3 = localStorage.getObject("localidades");
	array3.push(novo4);
    localStorage.setObject("localidades", array3);
	
}

firebase.auth().onAuthStateChanged(firebaseUser =>{
    if(firebaseUser){
        console.log("ta on");

        /*const dbRefObjec1 = firebase.database().ref();
        const dbRefList1 = dbRefObjec1.child('usuarios');
        var array1 = localStorage.getObject("usuarios");
        console.log(array1);

        dbRefList1.on('child_added', snap => {

            if(firebaseUser.email == snap.val().email){

                avaliaçao.innerHTML = "<a class='black-text'>Avalie de 0 a 10 a Escola: </a>" +
                                        "<input id='Avaliaçao_Localidade' type='text' class='validate' value='"+snap.val().avaliacao +"'>" +
                                        //"<label for='Avaliaçao_Localidade'>Avalie de 0 a 10 a Escola</label>" +
                                        "<a class='btn-floating btn-large red' onclick=mudar()>" +
                                        "<i class='large material-icons'>done</i>" +
                                        "</a>";
                
                var user = {
                    name: snap.val().nome,
                    email: array1[0].email,
                    senha : array1[0].senha,
                    key : snap.key,
                    avaliacao : snap.val().avaliacao
                };
                array1 = [];
                console.log(user);
                array1.push(user);
                console.log(array1);
                localStorage.setObject("usuario", array1);
            }

        });

        dbRefList1.on('child_changed', snap => {

            if(firebaseUser.email == snap.val().email){

                avaliaçao.innerHTML = "<a class='black-text'>Avalie de 0 a 10 a Escola: </a>" +
                                        "<input id='Avaliaçao_Localidade' type='text' class='validate' value='"+snap.val().avaliacao +"'>" +
                                        //"<label for='Avaliaçao_Localidade'>Avalie de 0 a 10 a Escola</label>" +
                                        "<a class='btn-floating btn-large red' onclick=mudar()>" +
                                        "<i class='large material-icons'>done</i>" +
                                        "</a>";
                
                var user = {
                    name: snap.val().nome,
                    email: array1[0].email,
                    senha : array1[0].senha,
                    key : snap.key,
                    avaliacao : snap.val().avaliacao
                };
                                                        
                array1 = [];
                array1.push(user);
                localStorage.setObject("usuario", array1);
            }

        });*/

    }else{
        console.log("ta off");
        alert("Tem que estar logado para avaliar e comentar da localidade");
    }
});

/*function mudar(){
            
    const atribuir = document.getElementById('Avaliaçao_Localidade');
    var array2 = localStorage.getObject("usuario");

    const novo = {
        nome : array2[0].nome,
        email : array2[0].email,
        senha : array2[0].senha,
        avaliacao : parseInt(atribuir.value)
    } 
    var updates = {};
    
    updates['users/' + array2[0].key] = novo;
    
    //metodo para atualizar os dados.
    firebase.database().ref().update(updates);

    var array4 = localStorage.getObject("localidade2");

    console.log(array4);
    var email = {
        email : array2[0].email,
        valor : parseInt(atribuir.value)
    };
    const media5 = [];

    email.push(array4[0].media);

    media5.push(email);

    const novo3 = {
        nome : array4[0].nome,
        rua : array4[0].rua,
        bairro : array4[0].bairro,
        cidade : array4[0].cidade,
        media : media5,
        lat : array4[0].lat,
        lng : array4[0].lng
    }

    var temp = media.email;
    media.email = [];
    media.email.push(temp);
    
    var updates1 = {};
    
    updates1['localidade/' + array4[0].key] = novo3;
    
    //metodo para atualizar os dados.
    firebase.database().ref().update(updates1);
    localStorage.setObject("localidade2", []);
    window.location.replace("telaprincipal.html");
}*/