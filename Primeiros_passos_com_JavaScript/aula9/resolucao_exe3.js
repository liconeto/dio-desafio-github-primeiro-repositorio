/*
3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".
*/

function nomeComV(listaNomes) {
  const listaComV = [];

  for (let index = 0; index < listaNomes.length; index++) {
    const element = listaNomes[index];
    if (element[0] === "V" || element[0] === "v") {
      console.log(element);
    }
  }
}

const nomes = ["Joao", "Renan", "Vitor"];

nomeComV(nomes);
