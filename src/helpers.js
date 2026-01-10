const limparParagrafosVazios = (arrayParagrafos) => { //Função helper que limpa parágrafos vazios no texto.
    const arraySemParagrafosVazios = arrayParagrafos.filter((paragrafo) => paragrafo.length !== 0);
    return arraySemParagrafosVazios;
}

const filtrarPalavrasGrandes = (palavra) => { //Função helper que filtra as palavras para permitir apenas as que tiverem comprimento maior que 3.
    if(palavra.length <= 3){
        return true;
    }
}

const removerCaracteresIndesejados = (palavra) => { //Função helper que remove caracteres indesejados da palavra repetida.
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

export {limparParagrafosVazios, filtrarPalavrasGrandes, removerCaracteresIndesejados}; //Exportação de funções helper para index.js