//funções em Typescript, parâmetros opcionais e padrão

//exemplo de uma função com parametro padrão

//passamos um parametro padrao na função como 0, o algoritmo entende que se não for passado nenhum valor, o valor padrão será 0
function soma(num1: number = 0, num2: number = 0):number{
    return num1 + num2;
}

console.log(soma(5, 10));

//um exemplo de parametro opcional

function login(nome: string, pass: string, endereco?: string):void{
    console.log(`Nome: ${nome}`);
    console.log(`Senha: ${pass}`);
    console.log(`Endereço: ${endereco}`); //observe que o endereço pode ser undefined por ser um parametro opcional
}

login("Admin", "1234"); //nao gera erro no retorno do log

//se criarmos uma funcao com uma variavel, podemos inserir o parametro opcional também

function autenticar(usuario: string, senha: string, chave?:string):void{
    let dadosAutenticar={usuario, senha, chave}; //criamos um objeto com os dados de autenticacao com uma variavel com parametro opcional
    console.log(dadosAutenticar);
}

autenticar("ADMINISTRADOR", "administ"); //note que o parametro chave é opcional e não gera erro no retorno do log (deixando a chave como undefined)