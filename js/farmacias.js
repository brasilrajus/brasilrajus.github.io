const farmacias = document.getElementById('composicao_medicamento');
const buttonfarmacia = document.getElementById('btn_farmacia');
// Excluir depois //
const farmacias2 = document.getElementById('composicao_medicamento2');
const buttonfarmacia2 = document.getElementById('btn_farmacia2');

window.onload = composicaoMedicamento;

function composicaoMedicamento() {
    farmacias.style.display = "none";
    farmacias2.style.display = "none";
}
function showFarmacia1() {
    farmacias2.style.display = "none";
    farmacias.style.display = "block";
}
function showFarmacia2() {
    farmacias.style.display = "none";
    farmacias2.style.display = "block";
}

buttonfarmacia.addEventListener("click", showFarmacia1, false);
buttonfarmacia2.addEventListener("click", showFarmacia2, false);
