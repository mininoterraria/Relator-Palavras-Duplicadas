import fs from 'fs';//Biblioteca nativa do node para trabalhar com arquivos.
import exibirPalavrasDuplicadas from './index.js';
import {Command} from 'commander'; //Biblioteca para criar comandos CLI.
import chalk from 'chalk'; //Biblioteca para colorir saídas CLI.

const processarArquivoEntrada = async (origem, destino) => { //Função que processa arquivo de entrada.
    try{
        const textoArquivoOrigem = await fs.promises.readFile(origem, 'utf-8');
        const listaObjetoPalavras = exibirPalavrasDuplicadas(textoArquivoOrigem);
        criaESalvaArquivo(destino, listaObjetoPalavras);

    } catch (erro){
        console.error(chalk.red("Erro no processar arquivo entrada: " + erro));
    }
}

const criaESalvaArquivo = async (destino, listaObjetoPalavras) => { //Função assíncrona que utiliza o método assíncrono de escrever arquivos do File System, será usado para criar um arquivo txt com as palavras repetidas.

    destino =  `${destino}/arquivo.txt`;

    try {
        await fs.promises.writeFile(destino, listaObjetoPalavras);
        console.error(chalk.green("Arquivo criado com sucesso!"));
    } catch (erro) {
        console.error(chalk.red('Erro na hora de criar e salvar arquivo - ' + erro));
    }
}


const cli = new Command(); //CLI da aplicação.

cli
    .option('-o, --origem <string>', 'caminho do texto a ser processado') //Flag para dar o caminho do arquivo de origem.
    .option('-d --destino <string>', 'caminho da pasta onde salvar o arquivo gerado' ) //Flag para dar o destino do arquivo gerado.
    .action((options) => {
    
        const {origem, destino} = options;

        if(!origem || !destino){
            console.error(chalk.red('erro: inserir caminho de origem e destino'));
            cli.help();
            return;
        }

        processarArquivoEntrada(origem, destino);

        
    })


cli.parse(process.argv);





