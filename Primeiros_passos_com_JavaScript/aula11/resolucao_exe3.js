/*
3) Faça um programa que receba a quantidade de números e seus respectivos valores.
Imprima todos os números pares.

*/
let listaPares = [];

function imprimePar(lista) {
  for (let index = 0; index < lista.length; index++) {
    const element = lista[index];

    if (element % 2 === 0) {
      listaPares.push(element);
    }
  }

  return listaPares;
}

module.exports = { imprimePar };
