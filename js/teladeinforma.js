firebase.auth().onAuthStateChanged(firebaseUser =>{
    if(firebaseUser){
        console.log("ta on");
    }else{
        console.log("ta off");
        alert("Tem que estar logado para fazer cadastro da localidade");
        window.location.replace("teladecadastro.html");
    }
});