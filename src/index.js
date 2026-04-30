import {separarEmParagrafos, limparParagrafosVazios, removerCaracteresIndesejados, arrayObjetoPalavras, removerPalavrasUnicas} from "./processamentoArquivo.js";
import lerArquivo from './lerArquivo.js';

const nomeArquivo = process.argv[2];
const caminhoArquivo = `C:/Users/dayan/OneDrive/Área de Trabalho/Relator-Palavras-Duplicadas/arquivos/${nomeArquivo}`;

const exibirPalavrasDuplicadas = () => {
    const conteudoArquivo = lerArquivo(caminhoArquivo);
    const arrayParagrafos = separarEmParagrafos(conteudoArquivo);
    const arraySemParagrafosVazios = limparParagrafosVazios(arrayParagrafos);
    console.log(arraySemParagrafosVazios);
    const objetoPalavras = arrayObjetoPalavras(arraySemParagrafosVazios);

}


export default exibirPalavrasDuplicadas;
