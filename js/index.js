(function(){
    localStorage.setObject("usuario", []);
    firebase.auth().signOut();

    firebase.auth().onAuthStateChanged(firebaseUser =>{
		if(firebaseUser){
            console.log("ta on");
        }else{
            console.log("ta off");
        }
    });
}());