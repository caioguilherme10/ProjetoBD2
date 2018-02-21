//(function(){
    
    firebase.auth().onAuthStateChanged(firebaseUser =>{
		if(firebaseUser){
            console.log("ta on");
        }else{
            console.log("ta off");
            localStorage.setObject("localidades", []);
            localStorage.setObject("usuarios", []);
            window.location.replace("index.html");
        }
    });

// Pegando o elemento do butao sair.
const btnLogout = document.getElementById('buttonLogout');
	
// A funçao para deslogar o usuario do firebase. com o evento de click e a funcao signOut.
btnLogout.addEventListener('click', e => {
    
    firebase.auth().signOut();
    //O usuario e mandado para a pagina inicial.
    window.location.replace("index.html");

});

/*const dbRefObjec = firebase.database().ref();
const dbRefList = dbRefObjec.child('users');
var array = localStorage.getObject("usuario");

const two = dbRefObjec.child('users').orderByChild('email').equalTo(array[0].email);

console.log(two);

dbRefList.on('child_added', snap => {
				
    //para saber qual usuario pegar.
    if(array[0].email == snap.val().email){

        document.getElementById("name").innerHTML = snap.val().name;
        document.getElementById("email").innerHTML = array[0].email;

        var user = {
            name: snap.val().name,
            email: array[0].email,
            pass: array[0].pass,
            avaliacao : array[0].avaliacao
        };

        console.log(user);
        array = [];
        array.push(user);
        console.log(array);
        localStorage.setObject("usuario", array);       
    }

});*/
var array = localStorage.getObject("usuarios");

const dbRefObjec = firebase.database().ref();

const two = dbRefObjec.child('usuarios').orderByChild('email').equalTo(array[0].email);

two.on('child_added', snap => {

    document.getElementById("name").innerHTML = snap.val().nome;
    document.getElementById("email").innerHTML = snap.val().email;

    var user = {
        nome: snap.val().nome,
        email: snap.val().email,
        senha: snap.val().senha,
        key : snap.key
    };

    array = [];
    array.push(user);
    console.log(user);
    localStorage.setObject("usuarios", array);

});

//}());