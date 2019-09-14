const paciente = document.getElementById('paciente');
const profissional = document.getElementById('profissional');

const conselhoRegional = document.getElementById('CR');
const chooseConselhoRegional = document.getElementById('chooseCR');
const cartaoSus = document.getElementById('cartaoSus'); 

window.onload = aSerCadastrado('paciente');

function aSerCadastrado(cadastro){
    if(cadastro === 'paciente') {
        conselhoRegional.classList.add('anm_min_height');
        conselhoRegional.classList.remove('anm_max_height');
        chooseConselhoRegional.classList.add('anm_min_height');
        chooseConselhoRegional.classList.remove('anm_max_height');
        cartaoSus.classList.add('anm_max_height');
        cartaoSus.classList.remove('anm_min_height');
        paciente.style.fontWeight = "1000";
        profissional.style.fontWeight = "normal";
    } else {
        conselhoRegional.classList.remove('anm_min_height');
        conselhoRegional.classList.add('anm_max_height');
        chooseConselhoRegional.classList.remove('anm_min_height');
        chooseConselhoRegional.classList.add('anm_max_height');
        cartaoSus.classList.remove('anm_max_height');
        cartaoSus.classList.add('anm_min_height');
        paciente.style.fontWeight = "normal";
        profissional.style.fontWeight = "1000";
    }
};
