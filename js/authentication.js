const btnLogar = document.getElementById('btn_acessar');
var inputCPF = document.getElementById('input_cpf');
var inputPassword = document.getElementById('input_password');
const slides = document.getElementById('slides');

btnLogar.addEventListener('click', function () {

    firebase.auth().signInWithEmailAndPassword(inputCPF.value, inputPassword.value).then(function (result) {
        window.location.replace = "https://www.rajus.com.br/pages/home.htm";

    }).catch(function (error) {

        switch(error.code) {
            case 'auth/invalid-email': alert('Email não encontrado');
            break;
            case 'auth/wrong-password': alert('Senha inválida');
        };

    });
});