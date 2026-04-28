import fs from 'fs';

const nomeArquivo = process.argv[2];
const caminhoArquivo = `C:/Users/dayan/OneDrive/Área de Trabalho/Relator-Palavras-Duplicadas/arquivos/${nomeArquivo}`;

const lerArquivo = (caminhoArquivo) => {
    try{
        return fs.readFileSync(caminhoArquivo, 'utf-8');
    }catch(error){
        return error;
    }
}

export default lerArquivo;