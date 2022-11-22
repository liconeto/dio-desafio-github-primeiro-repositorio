/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu
 IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de
 peso e 1,75 de altura e peça ao José para dizer o  valor do seu IMC;
*/

class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  imc() {
    return this.peso / Math.pow(this.altura, 2);
  }

  classificarImc() {
    const imc = this.imc();

    if (imc < 18.5) {
      return `Seu IMC é :${imc.toFixed(2)} e você está abaixo do peso.`;
    } else if (imc > 18.5 && imc < 25) {
      return `Seu IMC é :${imc.toFixed(2)} e você está com o peso normal.`;
    } else if (imc >= 25 && imc < 30) {
      return `Seu IMC é :${imc.toFixed(2)} e você está acima do peso.`;
    } else if (imc >= 30 && imc < 40) {
      return `Seu IMC é :${imc.toFixed(2)} e você está obeso.`;
    } else {
      return `Seu IMC é :${imc.toFixed(2)} e sua obesidade é grave.`;
    }
  }
}

const jose = new Pessoa("José", 70, 1.75);

console.log(jose.imc());

const benicio = new Pessoa("Benicio", 120, 1.73);

console.log(benicio.imc());
console.log(benicio.classificarImc());
