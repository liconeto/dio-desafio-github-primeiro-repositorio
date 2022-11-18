/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/

function aplicarDesconto(valor, formaDePagamento) {
  if (formaDePagamento === 1) {
    return valor - valor * 0.1;
  } else if (formaDePagamento === 2) {
    return valor - valor * 0.15;
  }
}

function divideValor(valor, formaDePagamento) {
  if (formaDePagamento === 3) {
    return valor / 2;
  } else if (formaDePagamento === 4) {
    return valor + valor * 0.1;
  }
}

const etiqueta = 100;
const formaDePagamento = 4;
let total = 0;

switch (formaDePagamento) {
  case 1:
    total = aplicarDesconto(etiqueta, formaDePagamento);
    console.log(
      `Opção selecionada:${formaDePagamento} = débito, e recebeu um desconto de 10%, no valor R$${etiqueta.toFixed(
        2
      )}`
    );
    console.log(`E vai pagar apenas R$${total.toFixed(2)}`);
    break;
  case 2:
    total = aplicarDesconto(etiqueta, formaDePagamento);
    console.log(
      `Opção selecionada:${formaDePagamento} = PIX, e recebeu um desconto de 15%, no valor R$${etiqueta.toFixed(
        2
      )}`
    );
    console.log(`E vai pagar apenas R$${total.toFixed(2)}`);
    break;
  case 3:
    console.log(
      `Opção selecionada:${formaDePagamento} = parcelado em 2 vezes sem juros.`
    );
    total = divideValor(etiqueta, formaDePagamento);
    console.log(
      `E vai pagar apenas R$${etiqueta} em duas parcelas de R$${total}`
    );
    break;
  case 4:
    total = divideValor(etiqueta, formaDePagamento);
    console.log(
      `Opção selecionada:${formaDePagamento} = parcelado em mais de 2 vezes, será acrescido 10% de juros no valor do produto. No valor R$${etiqueta}`
    );
    console.log(`E vai pagar apenas R$${total.toFixed(2)}`);
    break;
  default:
    console.log(`Opção selecionada:${formaDePagamento} é inválida!`);
}
