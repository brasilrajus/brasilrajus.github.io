inputCPF = document.getElementById('input_cpf');
btnAcessarLoginValidators = document.getElementById('btn_acessar');

/* Verificador de CPF */

/* Confere se é um CPF válido */
/* O valor do CPF precisa ser uma string */
function validarCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
    var strCPF;

    if (strCPF == "00000000000") return false;

    for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
}

/* Formata o CPf para o padrão */
/* Exemplo: 08682249448  se torna 086.822.494-48 */
/* O valor do CPF precisa ser uma string */
function formataCPF(v) {
    v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
    v = v.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
    v = v.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
    //de novo (para o segundo bloco de números)
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); //Coloca um hífen entre o terceiro e o quarto dígitos
    return v;
}

/* Remove caracteres que não sejam números do CPF permitindo assim a validação da função validar CPF */
function deixarSomenteNumerosCPF(value) {
    return value.replace(/[^\d]+/g, '')
}

/* Função onde foram incluidas todas as funções acimas para retornar o valor no html */
function verificaCPF() {
    /* Passa o valor do input com o CPF para a variável strCPF */
    strCPF = inputCPF.value;
    CPFFormatado = formataCPF(strCPF);
    inputCPF.value = CPFFormatado;
    numeroCPF = deixarSomenteNumerosCPF(strCPF);

    if (validarCPF(numeroCPF) === true) {
        inputCPF.style.color = "#0459A9";
    } else {
        inputCPF.style.color = "#f00";
    }

}

inputCPF.addEventListener("keyup", verificaCPF);
