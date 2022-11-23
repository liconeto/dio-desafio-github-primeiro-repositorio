/*
6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4]
*/

const notas = [2, 7, 3, 8, 10, 4];
let maior = 0;

function imprimeMaior(lista) {
  for (let index = 0; index < lista.length; index++) {
    const element = lista[index];
    if (element >= maior) {
      maior = element;
    }
  }

  return maior;
}

console.log(imprimeMaior(notas));
