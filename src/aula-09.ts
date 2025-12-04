//Aprendendo sobre ENUM em Typescript

enum cpus{
    intel = 1,
    amd = 2,
    snapdragon = 3,
    mediatek = 4
}

console.log(cpus.intel); //retorna 1

//podemos chamar o enum pelo valor também
console.log(cpus['amd']); //retorna 2
console.log(cpus[2]); //retorna amd

//usando um enum com dias da semana

enum diasSemana{
    domingo = 0,
    segunda = 1,
    terca = 2,
    quarta = 3,
    quinta = 4,
    sexta = 5,
    sabado = 6
}

//usando a funcao getDay() do objeto Date para pegar o dia atual da semana no enum

const d= new Date(); //criamos uma variavel d do tipo Date

console.log(d); //a data atual completa sem formatacao
console.log(diasSemana[2]); //retorna terca
console.log(d.getDate()); //retorna o dia atual da semana como número (0-6)
console.log(diasSemana[d.getDay()]); //retorna o dia atual da semana conforme o enum

//usando um enum textual

enum eletronicos{
    smartphone = "Xiaomi",
    notebook = "Dell",
    tablet = "iPad"
}

console.log(eletronicos.smartphone); //retorna Xiaomi

//nao podemos usar o enum textual para buscar pelo valor, apenas pela chave
//console.log(eletronicos["Dell"]); //isso gera um erro

//o enum numerico nao é necessário atribuir valor sequencial, pois o Typescript faz isso automaticamente

enum carros{
    GM,
    Ford,
    Fiat,
    Toyota
}

console.log(carros.Fiat); //retorna 2

//usando uma variavel const puxada do enum

const meuCarro: carros = carros.Toyota;
console.log(meuCarro); //retorna 3

//[const meuCarroErrado: carros = 5;] isso gera um erro, pois 5 nao é um valor valido do enum carros