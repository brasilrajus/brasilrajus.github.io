const loginInputSenha = document.getElementById('login_input_senha');
const btnLembrarSenha = document.getElementById('btn_lembrar_senha');
const btnSeiMinhaSenha = document.getElementById('btn_sei_minha_senha');
const animationsBtnAcessar = document.getElementById('btn_acessar');

function lembrarSenha() {
    loginInputSenha.classList.remove('height50');
    loginInputSenha.classList.add('height0');
    btnLembrarSenha.classList.remove('opacity1');
    btnLembrarSenha.classList.add('opacity0');
    setTimeout(function () {
        btnSeiMinhaSenha.classList.remove('opacity0');
        btnSeiMinhaSenha.classList.add('opacity1');
        btnSeiMinhaSenha.classList.remove('none');
        btnLembrarSenha.classList.add('none');
        animationsBtnAcessar.innerHTML = "Recuperar Senha";
    }, 200);
}
function seiMinhaSenha() {
    loginInputSenha.classList.remove('height0');
    loginInputSenha.classList.add('height50');
    btnSeiMinhaSenha.classList.remove('opacity1');
    btnSeiMinhaSenha.classList.add('opacity0');
    setTimeout(function () {
        btnLembrarSenha.classList.remove('opacity0');
        btnLembrarSenha.classList.add('opacity1');
        btnLembrarSenha.classList.remove('none');
        btnSeiMinhaSenha.classList.add('none');
        animationsBtnAcessar.innerHTML = "Acessar";
    }, 200);
}

btnLembrarSenha.addEventListener('click', lembrarSenha);
btnSeiMinhaSenha.addEventListener('click', seiMinhaSenha);