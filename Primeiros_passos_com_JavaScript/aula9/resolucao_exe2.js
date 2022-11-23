/*
2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.
*/

const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function imprimePar(listaNumeros) {
  for (let index = 0; index < listaNumeros.length; index++) {
    const element = listaNumeros[index];
    if (element % 2 === 0) {
      console.log(element);
    }
  }
}

imprimePar(listaNumeros);
