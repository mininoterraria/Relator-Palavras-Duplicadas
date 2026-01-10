import {limparParagrafosVazios, filtrarPalavrasGrandes, removerCaracteresIndesejados} from './helpers.js'; //Importação de helpers vindos de helpers.js


const separarEmParagrafos = (textoBruto) => { //Pega o textoBruto e cria um array onde cada elemento é um parágrafo do texto.
    let arrayParagrafos = textoBruto.split('\n');
    arrayParagrafos = limparParagrafosVazios(arrayParagrafos); //Função helper que vai limpar os elementos que são strings vazias.
    return arrayParagrafos;
}

const separarPalavrasEmObjetos = (arraySeparadoEmParagrafos) => { //Função que transforma a lista de parágrafos em objetos com palavras.
    const novoArrayPalavras = [];

    arraySeparadoEmParagrafos.forEach((paragrafo) => {
        const objetoPalavras = {};
        const listaPalavras = paragrafo.split(' ');

        listaPalavras.forEach((palavra) => {
            palavra = removerCaracteresIndesejados(palavra)
            const filtragem = filtrarPalavrasGrandes(palavra);

            if(!filtragem){
                objetoPalavras[palavra] ? objetoPalavras[palavra] += 1 : objetoPalavras[palavra] = 1
            }

        });
        novoArrayPalavras.push(objetoPalavras);
    })

    return novoArrayPalavras;
    
}

const converterConteudoEmTextoLegível = (listaobjetoPalavras) => { //Função que converte a lista de objetos de palavras em texto legível a usuários.
    let textoLegivel = '';
    
    listaobjetoPalavras.forEach((objetoPalavras, indice) => {
        const arrayPropriedades = [];
    
        for(const propriedade in objetoPalavras){
            if(objetoPalavras[propriedade] !== 1){
                arrayPropriedades.push(`${propriedade}`);
            }
        }

        if(arrayPropriedades.length !== 0){
            textoLegivel += `Páragrafo ${indice + 1}: ${arrayPropriedades.join(', ')} \n`; 
        }
    })

    return textoLegivel;
}

const exibirPalavrasDuplicadas = (textoBruto) => {
    const arraySeparadoEmParagrafos = separarEmParagrafos(textoBruto); //Manda o texto bruto para ser separado em um array separado por parágrafos.
    const listaobjetoPalavras = separarPalavrasEmObjetos(arraySeparadoEmParagrafos); //Manda o array separado em parágrafos para ser convertido em uma lista de objetos.
    const textoLegivel = converterConteudoEmTextoLegível(listaobjetoPalavras); //Manda o array de objetos para ser convertido em um textoLegível para usuários.
    return textoLegivel;
}

export default exibirPalavrasDuplicadas; //Export da função principal da index.

