const dbRefObjec = firebase.database().ref();
const dbRefList = dbRefObjec.child('localidades');

var array = localStorage.getObject("ponto");

const lat = array[0];
const lng = array[1];

var arr = localStorage.getObject("localidades");

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

        //salvarlocalidade(localidade);
        arr = [];
        arr.push(localidade);
        console.log(arr);
        localStorage.setObject("localidades", arr);
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

        //salvarlocalidade(localidade);
        arr.push(localidade);
        localStorage.setObject("localidades", arr);
    }
    
});

function salvarlocalidade(novo4){
	
	var array3 = localStorage.getObject("localidades");
	array3.push(novo4);
    localStorage.setObject("localidades", array3);
	
}

const dbRefObjec15 = firebase.database().ref();
const dbRefList15 = dbRefObjec15.child('media');
var arr2 = localStorage.getObject("localidades");
var quantidade = 0;
var soma = 0;
    
dbRefList15.on('child_added', snap4 => {

    if((snap4.val().valor != undefined)&&(snap4.val().keyL == arr2[0].key)){

        quantidade += 1;
        soma += snap4.val().valor;
        document.getElementById("Media_Localidade").innerHTML = soma/quantidade;
    }

});

const dbRefObjec50 = firebase.database().ref();
const dbRefList16 = dbRefObjec50.child('comentarios');
    
dbRefList16.on('child_added', snap7 => {

    if((snap7.val().valor != undefined)&&(snap7.val().keyL == arr2[0].key)){

        console.log(snap7.val().valor);

        comentarios.innerHTML += "<form class='col s12'>"+ 
                                "<div class='row'>" +
                                "<div class='input-field col s12'>" +
                                "<a class='black-text'>Comentário:</a>" + "<br>"+
                                "<a class='black-text'>"+ snap7.val().valor + "</a>" +
                                "</div>" +
                                "</div>" +
                                "</form>"
        
    }

});

dbRefList16.on('child_changed', snap7 => {

    if(snap7.val().valor != undefined){

        console.log(snap7.val().valor);

        comentarios.innerHTML += "<form class='col s12'>"+ 
                                "<div class='row'>" +
                                "<div class='input-field col s12'>" +
                                "<a class='black-text'>Comentário:</a>" + "<br>"+
                                "<a class='black-text'>"+ snap7.val().valor + "</a>" +
                                "</div>" +
                                "</div>" +
                                "</form>"
        
    }

});

/*var quantidade = 0;
var soma = 0;

dbRefList15.on('child_changed', snap4 => {

    if(snap4.val().valor != undefined){

        quantidade += 1;
        soma += snap4.val().valor;
        document.getElementById("Media_Localidade").innerHTML = soma/quantidade;
    }

});*/

firebase.auth().onAuthStateChanged(firebaseUser =>{
    if(firebaseUser){
        console.log("ta on");

        avaliaçao.innerHTML = "<a class='black-text'>Avalie de 0 a 10 a Escola: </a>" +
                                "<input id='Avaliaçao_Localidade' type='text' class='validate' value=''>" +
                                "<a class='btn-floating btn-large red' onclick=mudar()>" +
                                "<i class='large material-icons'>done</i>" +
                                "</a>";

        var array7 = localStorage.getObject("usuarios");
        var array8 = localStorage.getObject("localidades");

        console.log(array7[1]);
        console.log(array7[0]);
        console.log(array8[0]);
        console.log(array8[1]);

        const dbRefObjec8 = firebase.database().ref();
        //const dbRefList8 = dbRefObjec8.child('media/'+ array8[0].key + '/'+ array7[1].key);
        //const dbRefList8 = dbRefObjec8.child('media');
        const dbRefList8 = dbRefObjec8.child('media').orderByChild('keyL_keyU').equalTo(array8[0].key + '_'+ array7[0].key);
        console.log(dbRefList8);

        dbRefList8.on('child_added', snap => {
            console.log(snap.val().valor);

            avaliaçao.innerHTML = "<a class='black-text'>Avalie de 0 a 10 a Escola: </a>" +
                                "<input id='Avaliaçao_Localidade' type='text' class='validate' value='"+ snap.val().valor +"'>" +
                                "<a class='btn-floating btn-large red' onclick=mudar()>" +
                                "<i class='large material-icons'>done</i>" +
                                "</a>";
        });

        dbRefList8.on('child_changed', snap => {

            avaliaçao.innerHTML = "<a class='black-text'>Avalie de 0 a 10 a Escola: </a>" +
                                "<input id='Avaliaçao_Localidade' type='text' class='validate' value='"+ snap.val().valor +"'>" +
                                "<a class='btn-floating btn-large red' onclick=mudar()>" +
                                "<i class='large material-icons'>done</i>" +
                                "</a>";
        });

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

function mudar(){
            
    const atribuir = document.getElementById('Avaliaçao_Localidade');

    var array10 = localStorage.getObject("usuarios");
    var array11 = localStorage.getObject("localidades");

    console.log(array10[0].key);
    console.log(array11[0].key);

    const dbRefObjec20 = firebase.database().ref();
    const dbRefList20 = dbRefObjec20.child('media').orderByChild('keyL_keyU').equalTo(array11[0].key +'_'+ array10[0].key);

    dbRefList20.once('value', s =>{
        var a = s.exists();
            
        if(a != true){

            firebase.database().ref('media').push({
                valor : parseInt(atribuir.value),
                keyL : array11[0].key,
                keyL_keyU : array11[0].key +"_"+ array10[0].key
            }).key;

        }else{

            dbRefList20.on('child_added', s => {
        
                const novo20 = {
                    valor : parseInt(atribuir.value),
                    keyL : array11[0].key,
                    keyL_keyU : array11[0].key +"_"+ array10[0].key
                } 
                var updates = {};
                    
                console.log(s.key);
        
                updates['media/' + s.key] = novo20;
                    
                //metodo para atualizar os dados.
                firebase.database().ref().update(updates);              
        
            });

        }
    });


    /*dbRefList20.once('value', s =>{

        var a = s.exists();

        console.log(a);
					
		if(a === true){

            const novo20 = {
                valor : parseInt(atribuir.value),
                keyL_keyU : array11[0].key +"_"+ array10[0].key
            } 
            var updates = {};
            
            console.log(s.key);
            console.log(s.val().key);

            updates['media/' + s.key] = novo20;
            
            //metodo para atualizar os dados.
            firebase.database().ref().update(updates);

        }else{

            console.log(s.key);

            firebase.database().ref('media').push({
                valor : parseInt(atribuir.value),
                keyL_keyU : array11[0].key +"_"+ array10[0].key
            }).key;
        }

    });*/

    /*var array2 = localStorage.getObject("usuario");

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
    localStorage.setObject("localidades", []);*/
    window.location.replace("telaprincipal.html");
}

btavaliaçao.addEventListener('click', e => {

    const atribuir = document.getElementById('textarea1');

    var array30 = localStorage.getObject("usuarios");
    var array31 = localStorage.getObject("localidades");


    firebase.database().ref('comentarios').push({
        valor : atribuir.value,
        keyL : array31[0].key,
        keyL_keyU : array31[0].key +"_"+ array30[0].key
    }).key;

    window.location.replace("telaprincipal.html");
});