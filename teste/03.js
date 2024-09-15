const faturamentoMensal = [
  { dia: 1, valor: 2200 },
  { dia: 2, valor: 1500 },
  { dia: 3, valor: 0 },
  // ... outros dias
];

function analisarFaturamento(faturamento) {
  const valores = faturamento.map(dia => dia.valor);
  const diasComVendas = valores.filter(valor => valor > 0);

  const menorValor = Math.min(...diasComVendas);
  const maiorValor = Math.max(...diasComVendas);
  const mediaMensal = diasComVendas.reduce((acc, valor) => acc + valor, 0) / diasComVendas.length;

  const diasAcimaDaMedia = valores.filter(valor => valor > mediaMensal).length;

  return {
    menorValor,
    maiorValor,
    mediaMensal,
    diasAcimaDaMedia
  };
}

const resultado = analisarFaturamento(faturamentoMensal);
console.log(resultado);