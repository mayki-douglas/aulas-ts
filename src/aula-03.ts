//Criando arquivo de configuracoes do Typescript e facilitando a compilacao

class Curso{
    canal = null;
    curso = null;
    constructor(canal:any, curso:any){
    this.canal = canal;
    this.curso = curso;
    }
}

let c1 = new Curso("CFB", "Typescript");

console.log(c1.canal);
console.log(c1.curso);

//criado classe Curso para declarar as variaveis, foi usado uma variavel nula

//usando o comando padrao tsc aula-03.ts, o compilador irá buildar um arquivo .js nas versoes antigas do ecmascript

//o arquivo "aula-03old.js" foi gerado na versão ES5 do ecmascript (versao antiga)

//o TS possui o comando --target para que possamos inserir a versao que gostariamos que o terminal rode o arquivo ts. Exemplo: tsc aula-02.ts --target "ES2020"

//se querer que o compilador rode a ultima versao do ecma na hora de rodar o arquivo, usar o comando "ESNEXT"

//para rodar o arquivo .ts diretamente sem precisar compilar para .js, usar o comando "ts-node aula-03.ts"

//esse projeto foi usado o comando "tsc", o Typescript entende que, como o projeto nao possui um arquivo de configuração "tsconfig.json", o Typescript irá mostrar uma espeécie de "Help" com os comandos principais do TS.

//para criar um arquivo de configuração "tsconfig.json", usar o comando "tsc --init", esse arquivo serve para configurar o projeto, como por exemplo, a versao do ecma que o projeto irá rodar, entre outras configurações.

//usando o tsc --init, foi criado o arquivo "tsconfig.json" na raiz do projeto. Nisso, o comando "tsc" irá compilar todo o projeto e os arquivos no formato .ts, sem precisar especificar o nome do arquivo toda vez que for compilar.

//usamos o tsconfig.json para inserir dados como, versao do ecma, pasta de saida do arquivo compilado, entre outras configurações.

//para uma saída mais limpa na pasta build, deixar os outputs "sourceMap", "declaration" e "declarationMap" como false no tsconfig.json