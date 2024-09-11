class Funcionario{
    #nome 
    #telefone
    #idade
    #salario
    constructor(nome, telefone, idade, salario1){
        this.#nome = nome
        this.#telefone = telefone
        this.#idade = idade
        this.#salario = salario1
    }
    get getNome(){
        return this.#nome
    }
    get getTelefone(){
        return this.#telefone
    }
    get getIdade(){
        return this.#idade
    }
    get getSalario(){
        return this.#salario
    }
    set setTelefone(telefone){
        this.#telefone = telefone
    }
    set setIdade(idade){
        this.#idade = idade
    }
    set setNome(nome){
        this.#nome = nome
    }
    set setSalario(salario){
        this.#salario = salario
    }

    trabalhar(){
        console.log(this.#nome + ' está trabalhando') 
    }

}

let funcionario1 = new Funcionario ('jurema', 654, 24, 567)
funcionario1.trabalhar()


class Designer extends Funcionario{
    #atividade
    constructor(nome, telefone, idade, salario1, atividade) {
        super(nome, telefone, idade, salario1)
        this.#atividade = atividade
    }
    get getAtividade() {
        return this.#atividade
    }
    set setAtividade(atividade){
        this.#atividade = atividade
    }
    trabalho(){
        console.log(this.getNome + " usa o canva para " + this.getAtividade)
    }

}
 
let designer1 = new Designer ('jonas', 456, 32, 567, 'fazer arte')
designer1.trabalho()
designer1.setSalario = 4000
console.log(designer1.getSalario)

class Engenheiro extends Funcionario {
    #especialidade;

    constructor(nome, telefone, idade, salario1, especialidade) {
        super(nome, telefone, idade, salario1);
        this.#especialidade = especialidade;
    }

    get getEspecialidade() {
        return this.#especialidade;
    }

    set setEspecialidade(especialidade) {
        this.#especialidade = especialidade;
    }

    trabalho() {
        console.log(this.getNome + " trabalha como engenheiro de " + this.getEspecialidade);
    }
}

let engenheiro1 = new Engenheiro ('jonas', 456, 32, 567, 'fazer arte')
engenheiro1.trabalho()
engenheiro1.setSalario = 4000
console.log(engenheiro1.getSalario)