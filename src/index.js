import {separarEmParagrafos, limparParagrafosVazios, removerCaracteresIndesejados, removerCaracterIndesejadoParagrafo, arrayObjetoPalavras, removerPalavrasUnicas} from "./processamentoArquivo.js";

import lerArquivo from './lerArquivo.js';


const nomeArquivo = process.argv[2];
const caminhoArquivo = `C:/Users/dayan/OneDrive/Área de Trabalho/Relator-Palavras-Duplicadas/arquivos/${nomeArquivo}`;

const exibirPalavrasDuplicadas = () => {
    const conteudoArquivo = lerArquivo(caminhoArquivo);
    const arrayParagrafos = separarEmParagrafos(conteudoArquivo);
    const arraySemParagrafosVazios = limparParagrafosVazios(arrayParagrafos);
    const arrayTratado = removerCaracterIndesejadoParagrafo(arraySemParagrafosVazios);
    const objetoPalavras = arrayObjetoPalavras(arrayTratado);
    const objetoSemPalavrasUnicas = removerPalavrasUnicas(objetoPalavras);
    console.log(objetoSemPalavrasUnicas);
}

export default exibirPalavrasDuplicadas;
