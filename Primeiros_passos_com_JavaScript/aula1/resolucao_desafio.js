/*

    Faça um programa para calcular o valor de de uma viagem.

    Você terá 3 variáveis. Sendo elas:
     1 - Preço do combustivel;
     2 - Gasto médio de combustivel do carro por KM;
     3 - Distância em Km da viagem;

    Imprima no console o valor que será gasto de combustivel para realizar esta viagem.
*/

const precoCombustivel = 5.79;
const kmPorLitro = 12;
const distanciaEmKm = 1580;

const litrosConsumidos = distanciaEmKm / kmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel 

console.log(`Você consumiu ${litrosConsumidos} de combustivel e o valor de R$${valorGasto.toFixed(2)}`);
