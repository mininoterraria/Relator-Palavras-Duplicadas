const limparParagrafosVazios = (arrayParagrafos) => { //Função helper que limpa parágrafos vazios no texto.
    return arrayParagrafos.filter((paragrafo) => paragrafo !== '');
}

const removerCaracteresIndesejados = (palavra) => { //Função helper que remove caracteres indesejados da palavra repetida.
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

const removerPalavrasUnicas = (objetoPalavras) => {
    for(const [palavra, qtd] of Object.entries(objetoPalavras)){
        if(qtd == 1){
            delete objetoPalavras[palavra];
        }
    }

    return objetoPalavras;
};

export {limparParagrafosVazios, removerCaracteresIndesejados};