const btnLogar = document.getElementById('btn_acessar');
var inputCPF = document.getElementById('input_cpf');
var inputPassword = document.getElementById('input_password');
const slides = document.getElementById('slides');

btnLogar.addEventListener('click', function () {

    firebase.auth().signInWithEmailAndPassword(inputCPF.value, inputPassword.value).then(function (result) {
        console.log('teste');

    }).catch(function (error) {

        switch(error.code) {
            case 'auth/invalid-email': alert('Email não encontrado');
            break;
            case 'auth/wrong-password': alert('Senha inválida');
            break;
            case 'auth/user-not-found': alert('Email não encontrado');
        };

        console.log(error.code);

    });
});