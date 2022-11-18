function escrevaMeuNome(nome) {
  return `Meu nome é: ${nome}`;
}

function verificarIdade(idade) {
  if (idade >= 18) {
    return console.log(escrevaMeuNome("Carlos") + " maior");
  } else {
    return console.log("menor");
  }
}

verificarIdade(32);
