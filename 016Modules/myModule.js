class Person {
    constructor(name){
        this.name = name
    }

    sayMyName(){
        return `The name is ${this.name}`
    }
}

//Isso aqui é Orientação Voltada a Objetos

module.exports = {
    Person,
} //Lembrar que class é com inicio Maiusculo

//Mais de uma módulo, colocaria após o 'Person,'
/**
 * module.exports = {
    Person, Age, Exemplos
}
 * 
 */
