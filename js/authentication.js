const btnLogin = document.getElementById('btn_login');

firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
});

function logar() {
    console.log('logado com sucesso');
}

btnLogin.addEventListener('click', logar, true);

