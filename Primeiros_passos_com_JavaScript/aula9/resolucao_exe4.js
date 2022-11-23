/*
4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;

*/
let par = [];

function separaPar() {
  for (let index = 10; index < 51; index++) {
    const element = index;
    if (element % 2 === 0) {
      par.push(element);
    }
  }
}

console.log(separaPar());
console.log(par);
