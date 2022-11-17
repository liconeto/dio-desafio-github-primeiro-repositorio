/*
    Faça um programa para calcular o valor de de uma viagem.

    Você terá 5 variáveis. Sendo elas:
     1 - Preço do etanol;
     2 - Preço da gasolina;
     3 - O tipo fde combustivel que está no seu carro;
     4 - Gasto médio de combustivel do carro por KM;
     3 - Distância em Km da viagem;

    Imprima no console o valor que será gasto de combustivel para realizar esta viagem.
*/

const precoEtanol = 3.89;
const precoGasolina = 4.99;
const tipoCombustivel = true; //true para Etanol e false para Gasolina
const kmComEtanol = 8;
const kmComGasolina = 10;
const distancia = 100;

let litrosConsumidos = 0;
let valorGasto = 0;

if (tipoCombustivel === true) {
  let litrosConsumidos = distancia / kmComEtanol;
  let valorGasto = litrosConsumidos * precoEtanol;
  console.log(
    `A distância percorrida foi de ${distancia}, e foram consumidos ${litrosConsumidos.toFixed(
      2
    )} e gastos R$${valorGasto.toFixed(2)}`
  );
} else {
  let litrosConsumidos = distancia / kmComGasolina;
  let valorGasto = litrosConsumidos * precoGasolina;
  console.log(
    `A distância percorrida foi de ${distancia}, e foram consumidos ${litrosConsumidos.toFixed(
      2
    )} e gastos R$${valorGasto.toFixed(2)}`
  );
}
