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

const etiqueta = 100;
const formaDePagamento = 1;
let total = 0;

switch (formaDePagamento) {
  case 1:
    total = etiqueta * 0.1;
    console.log(
      `Opção selecionada:${formaDePagamento} = débito, e recebeu um desconto de 10%, no valor R$${total.toFixed(
        2
      )}`
    );
    console.log(`E vai pagar apenas R$${(etiqueta - total).toFixed(2)}`);
    break;
  case 2:
    total = etiqueta * 0.15;
    console.log(
      `Opção selecionada:${formaDePagamento} = PIX, e recebeu um desconto de 15%, no valor R$${total.toFixed(
        2
      )}`
    );
    console.log(`E vai pagar apenas R$${(etiqueta - total).toFixed(2)}`);
    break;
  case 3:
    console.log(
      `Opção selecionada:${formaDePagamento} = parcelado em 2 vezes sem juros.`
    );
    total = etiqueta / 2;
    console.log(
      `E vai pagar apenas R$${etiqueta} em duas parcelas de R$${total}`
    );
    break;
  case 4:
    total = etiqueta * 0.1;
    console.log(
      `Opção selecionada:${formaDePagamento} = parcelado em mais de 2 vezes, será acrescido 10% de juros no valor do produto. No valor R$${total}`
    );
    console.log(`E vai pagar apenas R${(etiqueta + total).toFixed(2)}`);
    break;
  default:
    console.log(`Opção selecionada:${formaDePagamento} é inválida!`);
}
