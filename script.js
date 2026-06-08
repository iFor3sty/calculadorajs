const visor = document.getElementById('visor');
const botoesNumerosEOperadores = document.querySelectorAll('.btn-num, .btn-operador');
const btnLimpar = document.getElementById('btn-limpar');
const btnIgual = document.getElementById('btn-igual');

// Captura o clique de qualquer número ou operador e joga no visor
botoesNumerosEOperadores.forEach(botao => {
    botao.addEventListener('click', () => {
        const valor = botao.getAttribute('data-valor');
        visor.value += valor;
    });
});

// Ação do botão limpar (C)
btnLimpar.addEventListener('click', () => {
    visor.value = '';
});

// Ação do botão calcular (=)
btnIgual.addEventListener('click', () => {
    try {
        // Interpreta e resolve a string matemática do visor
        let resultado = eval(visor.value);
        
        // Regra para não permitir divisão por zero
        if (resultado === Infinity || isNaN(resultado)) {
            visor.value = "Erro";
        } else {
            visor.value = resultado;
        }
    } catch (error) {
        visor.value = 'Erro';
    }
});