import {limparParagrafosVazios, removerCaracteresIndesejados, removerPalavrasUnicas} from './helpers.js';

const gerarArrayParagrafos = (conteudoArquivo) => { //Pega o textoBruto e cria um array onde cada elemento é um parágrafo do texto.
    conteudoArquivo = conteudoArquivo.split("\r\n");
    conteudoArquivo = limparParagrafosVazios(conteudoArquivo);
    const arrayParagrafos = conteudoArquivo;

    return arrayParagrafos;
}


const gerarArrayObjetoPalavras = (arrayParagrafos) => { //Função que transforma a lista de parágrafos em objetos com palavras.
    const objetoPalavras = {};

    arrayParagrafos.forEach((paragrafo) => {
        const arrayPalavrasAtual = paragrafo.split(" ");

        for(const palavra of arrayPalavrasAtual){
            if(objetoPalavras.hasOwnProperty(palavra)){
                objetoPalavras[palavra] += 1;
            }else{
                objetoPalavras[palavra] = 1;
            }
        }
        
    });

    objetoPalavras = removerPalavrasUnicas(objetoPalavras);

    return objetoPalavras;

}

const converterConteudoEmTextoLegível = (listaObjetoPalavras) => { //Função que converte a lista de objetos de palavras em texto legível a usuários.
    let textoLegivel = '';
    
    listaObjetoPalavras.forEach((objetoPalavras, indice) => {
        const arrayPropriedades = [];
    
        for(const propriedade in objetoPalavras){
            if(objetoPalavras[propriedade] !== 1){
                arrayPropriedades.push(`${propriedade}`);
            }
        }

        if(arrayPropriedades.length !== 0){
            textoLegivel += `Parágrafo ${indice + 1}: ${arrayPropriedades.join(', ')} \n`; 
        }
    })

    return textoLegivel;
}

export {gerarArrayParagrafos, arrayObjetoPalavras};



