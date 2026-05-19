import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro) {
  console.log(erro);
  throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}

// async/await

async function pegaArquivo(caminhoDoArquivo) {
  try {
    const encoding = 'utf-8';
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    console.log(chalk.green(texto));
  } catch (erro) {
    trataErro(erro)
  }
}


// promises com then()

// function pegaArquivo(caminhoDoArquivo) {
//   const encoding = 'utf-8';
//   fs.promises
//     .readFile(caminhoDoArquivo, encoding)
//     .then((texto) => console.log(chalk.green(texto)))
//     .catch(trataErro)
// }

pegaArquivo('./arquivos/texto.md');
pegaArquivo('./arquivos/');

//console.log(chalk.magentaBright('A estrutura de um conto é organizada de forma simples, mas muito eficiente para contar uma história curta com impacto. Por ser um gênero narrativo breve, o conto precisa apresentar os elementos essenciais de uma história de maneira rápida e bem concentrada'));