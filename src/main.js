class Aluno {
    constructor(nome, nota){
        this.nome = nome;
        this.nota = nota;
    }
}

const sala10 = [
    new Aluno("Joao", 10),
    new Aluno("Maria", 5.8),
    new Aluno("Carlos", 9),
    new Aluno("Gustavo", 10), 
    new Aluno("Camila", 5.1),
    new Aluno("Yasmim", 10),
    new Aluno("Joana", 1.0),
    new Aluno("Amanda", 8.2)
]

const sala20 = [
    new Aluno("Carlos", 8.2),
    new Aluno("Maria", 8.8),
    new Aluno("Frederico", 2.0),
    new Aluno("Erick", 6), 
    new Aluno("Daniel", 8.1),
    new Aluno("Sergio", 9.0),
    new Aluno("Camila", 6),
    new Aluno("Francisca", 8.2)
]

function aprovados(){
    const primeiroAnoFundamental = sala10.filter(function(alunos){
        return alunos.nota >= "6";
    });

    const segundoAnoFundamental = sala20.filter(function(alunos){
        return alunos.nota >= "6";
    });

    console.log("\nLista de aprovados da turma do primeiro ano do fundamental:")
    primeiroAnoFundamental.forEach(aluno=>{
        console.log(`Nome: ${aluno.nome}, nota:${aluno.nota}.`)
    })

    console.log("\nLista de aprovados da turma do segundo ano do fundamental:")
    segundoAnoFundamental.forEach(aluno=>{
        console.log(`Nome: ${aluno.nome}, nota:${aluno.nota}.`)
    })
}

aprovados()