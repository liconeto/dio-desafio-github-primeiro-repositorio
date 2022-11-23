/*
5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
   Ex de lista = [2, 7, 3, 8, 10, 4]
*/

function imprimeRecuperacao(lista) {
  for (let index = 0; index < lista.length; index++) {
    const element = lista[index];

    if (element < 5) {
      recuperacao.push(element);
    }
  }
}

const lista = [2, 7, 3, 8, 10, 4];
let recuperacao = [];

imprimeRecuperacao(lista);

console.log(recuperacao);
