/*
1) Faça um programa que receba um número e escreva a sua respectiva tabuada.

*/

function geraTabuada(numero) {
  for (let index = 1; index <= 10; index++) {
    console.log(`${numero}x${index} = ${numero * index}`);
  }
}

module.exports = { geraTabuada };
