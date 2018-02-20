// Initialize Firebase
var config = {
    apiKey: "AIzaSyD6KajXkA3X6XZcJq6j3Vc4Fdx8Tx8_AQY",
    authDomain: "projetobd-6b214.firebaseapp.com",
    databaseURL: "https://projetobd-6b214.firebaseio.com",
    projectId: "projetobd-6b214",
    storageBucket: "projetobd-6b214.appspot.com",
    messagingSenderId: "658505320703"
  };
  firebase.initializeApp(config);

localStorage.setObject("usuarios", []);
var array = localStorage.getObject("usuarios");

var database = firebase.database();
firebase.database().ref('usuarios/').push({
    nome : "caio1",
    email : "caio1@gmail.com",
    senha : "caio123"
}).key;

const dbRefObjec = firebase.database().ref();

const two = dbRefObjec.child('usuarios').orderByChild('email').equalTo('caio1@gmail.com');

two.on('child_added', snap => {
    console.log(snap.val().nome);
    console.log(snap.val().email);
    console.log(snap.val().senha);
    console.log(snap.key);

    var user = {
        nome: snap.val().nome,
        email: snap.val().email,
        senha: snap.val().senha,
        key : snap.key
    };

    array.push(user);
    localStorage.setObject("usuarios", array);

});

localStorage.setObject("localidades", []);
var array2 = localStorage.getObject("localidades");

firebase.database().ref('localidades/').push({
    nome : "fdsafjkdsalhf",
    rua : "dsfsdahfkljh",
    bairro : "gjdfsj",
    cidade : "klgadhjdgh",
    lat : "90534535",
    lng : "867878"
}).key;

const two2 = dbRefObjec.child('localidades').orderByChild('nome').equalTo('fdsafjkdsalhf');

two2.on('child_added', snap => {
    console.log(snap.val().nome);
    console.log(snap.val().rua);
    console.log(snap.val().bairro);
    console.log(snap.val().cidade);
    console.log(snap.val().lat);
    console.log(snap.val().lng);
    console.log(snap.key);

    var localidade = {
        nome : snap.val().nome,
        rua : snap.val().rua,
        bairro : snap.val().bairro,
        cidade : snap.val().cidade,
        lat : snap.val().lat,
        lng : snap.val().lng,
        key : snap.key
    };

    array2.push(localidade);
    localStorage.setObject("localidades", array2);
});

var array3 = localStorage.getObject("usuarios");
var array4 = localStorage.getObject("localidades");

firebase.database().ref('media/' + array4[0].key + '/'+ array3[0].key).push({
    valor : "12"
});

const dbRefObjec1 = firebase.database().ref();
const dbRefList1 = dbRefObjec1.child('media/'+ array4[0].key + '/'+ array3[0].key);

dbRefList1.on('child_added', snap => {
    console.log(snap.val().valor);
});

firebase.database().ref('comentarios/' + array4[0].key + '/'+ array3[0].key).set({
    valor : "yutyut"
});

const dbRefObjec2 = firebase.database().ref();
const dbRefList2 = dbRefObjec2.child('comentarios/'+ array4[0].key);

dbRefList2.on('child_added', snap => {
    console.log(snap.val().valor);
});

localStorage.setObject("usuarios", []);
localStorage.setObject("localidades", []);