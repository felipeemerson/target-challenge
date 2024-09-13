var faturamento = [20, 0, 40, 10, 50, 100, 5, 50, 55]; // Considerando que o faturamento em dias de finais de semana e feriado foi zero.

faturamento = faturamento.filter(valor => valor > 0); // Filtrando finais de semana e feriados

var max_faturamento = 0;
var min_faturamento = Number.MAX_VALUE;
const sum_faturamento = faturamento.reduce((valorAnterior, valorAtual) => {
    if (valorAtual > max_faturamento) {
        max_faturamento = valorAtual;
    } else if (valorAtual < min_faturamento) {
        min_faturamento = valorAtual;
    }

    return valorAnterior + valorAtual;
}, 0);

const medial_anual_faturamento = sum_faturamento/faturamento.length;

const dias_faturamento_alto = faturamento.filter(valor => valor > medial_anual_faturamento).length;

console.log(`
    O menor valor de faturamento ocorrido em um dia do ano foi: R$ ${min_faturamento}.
    O maior valor de faturamento ocorrido em um dia do ano foi: R$ ${max_faturamento}.
    Média anual de faturamento foi: R$ ${medial_anual_faturamento}.
    Número de dias no ano em que o valor de faturamento diário foi superior à média anual: ${dias_faturamento_alto} dias.
`);