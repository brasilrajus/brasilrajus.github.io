const itemPassword = document.getElementById('item_password');
const btnRecoveryPassword = document.getElementById('btn_recovery_password');
const recuperarSenha = document.getElementById('recuperar_senha');
const btnAcessar = document.getElementById('btn_acessar');
const seiMinhaSenha = document.getElementById('sei_minha_senha');

function animationRecoveryPassword() {
    itemPassword.classList.remove('anm_max_height');
    itemPassword.classList.add('anm_min_height');
    recuperarSenha.classList.add('anm_min_height');
    recuperarSenha.classList.remove('anm_max_height');
    btnAcessar.innerHTML = "recuperar Senha";
    seiMinhaSenha.classList.remove('n_height');
    seiMinhaSenha.classList.add('anm_max_height');
}

function iKnowMyPassword() {
    itemPassword.classList.add('anm_max_height');
    recuperarSenha.classList.remove('anm_min_height');
    recuperarSenha.classList.add('anm_max_height');
    btnAcessar.innerHTML = "Acessar";
    seiMinhaSenha.classList.remove('anm_max_height');
    seiMinhaSenha.classList.add('anm_min_height');
}
