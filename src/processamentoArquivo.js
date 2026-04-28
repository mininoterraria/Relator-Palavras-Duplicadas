const separarEmParagrafos = (conteudoArquivo) => { //Pega o textoBruto e cria um array onde cada elemento é um parágrafo do texto.
    return conteudoArquivo.split("\n");
}

const limparParagrafosVazios = (arrayParagrafos) => { //Função helper que limpa parágrafos vazios no texto.
    return arrayParagrafos.filter((paragrafo) => paragrafo !== '\r' && paragrafo !== '');
}

const removerCaracterIndesejadoParagrafo = (arrayParagrafos) => {
    return arrayParagrafos.map((paragrafo) => {
        return paragrafo.substring(0, paragrafo.length - 1);
    });
};

const removerCaracteresIndesejados = (palavra) => { //Função helper que remove caracteres indesejados da palavra repetida.
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

const arrayObjetoPalavras = (arrayParagrafos) => { //Função que transforma a lista de parágrafos em objetos com palavras.
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

    return objetoPalavras;

}

const removerPalavrasUnicas = (objetoPalavras) => {
    for(const [palavra, qtd] of Object.entries(objetoPalavras)){
        if(qtd == 1){
            delete objetoPalavras[palavra];
        }
    }

    return objetoPalavras;
};

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

export {separarEmParagrafos, limparParagrafosVazios, removerCaracteresIndesejados, removerCaracterIndesejadoParagrafo, arrayObjetoPalavras, removerPalavrasUnicas};



