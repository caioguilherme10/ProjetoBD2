//(function(){
    
    firebase.auth().onAuthStateChanged(firebaseUser =>{
		if(firebaseUser){
            console.log("ta on");
        }else{
            console.log("ta off");
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

const dbRefObjec = firebase.database().ref();
const dbRefList = dbRefObjec.child('users');
var array = localStorage.getObject("usuario");

dbRefList.on('child_added', snap => {
				
    //para saber qual usuario pegar.
    if(array[0].email == snap.val().email){

        document.getElementById("name").innerHTML = snap.val().name;
        document.getElementById("email").innerHTML = array[0].email;

        var user = {
            name: snap.val().name,
            email: array[0].email,
            pass: array[0].pass
        };

        array = [];
        array.push(user);
        localStorage.setObject("usuario", array);       
    }

});

//}());