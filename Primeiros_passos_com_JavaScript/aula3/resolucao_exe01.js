/*
1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima
 a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;

*/

const nota1 = 2.9;
const nota2 = 6.7;
const nota3 = 5.3;

const media = (nota1 + nota2 + nota3) / 3;
let classificação = "está reprovado";

if (media > 7) {
  classificação = "passou de semestre ";
} else if (media > 5 && media < 7) {
  classificação = "está de recuperação";
}

console.log("*  Calcula nota    *");
console.log(`As notas informadas foram: ${nota1}, ${nota2}, ${nota3} `);
console.log(`A sua média: ${media.toFixed(2)}, e você ${classificação}`);
