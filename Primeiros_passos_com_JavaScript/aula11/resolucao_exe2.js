let maior = 0;
let menor = 0;

function maiorMenor(lista) {
  for (let index = 0; index < lista.length; index++) {
    const element = lista[index];

    if (index === 0) {
      maior = element;
      menor = element;
    }

    if (element > maior) {
      maior = element;
    }

    if (element < menor) {
    }
  }
  return `O Maior :${maior}, o menor :${menor}`;
}

module.exports = { maiorMenor };
