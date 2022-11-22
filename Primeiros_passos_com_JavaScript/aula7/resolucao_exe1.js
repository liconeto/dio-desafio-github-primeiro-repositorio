/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carro {
  marca;
  cor;
  consumoMedio;

  constructor(marca, cor, consumoMedio) {
    this.marca = marca;
    this.cor = cor;
    this.consumoMedio = consumoMedio;
  }

  gastoRs(distanciaKm, valor) {
    let valorGasto = distanciaKm * this.consumoMedio * valor;
    return console.log(`${valorGasto.toFixed(2)}`);
  }
}

const uno = new Carro("Fiat", "Preto", 1 / 12);

const palio = new Carro("Fiat", "Vermelho", 1 / 10);

console.log(uno);
uno.gastoRs(100, 5.09);

console.log(palio);
palio.gastoRs(100, 5.01);
