function floatToCurrency(number = 1) {
  return number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export default floatToCurrency;
