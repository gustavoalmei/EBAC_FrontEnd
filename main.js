const Pessoa = function (nome){
    this.nome = nome;
};

const Carro = function(nome, marca, modelo, anoModelo, anoFabricacao){
    Pessoa.call(this, nome);
    this.marca = marca;
    this.modelo = modelo;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function(){
        console.log("VRUUUUUUM");
    };
    this.estacionado = function(){
        console.log("Carro estacionado.");
    };
    this.explodido = function(){
        console.log("MEU DEUS O CARRO EXPLODIU!!!!!");
    };
    this.mensagem = function(){
        console.log(`${this.nome} possui um(a) ${this.modelo} da ${this.marca} ano ${this.anoModelo}`);
    };
};

const Gasolina = function(nome, marca, modelo, anoModelo, anoFabricacao){
    Carro.call(this, nome, marca, modelo, anoModelo, anoFabricacao);
    console.log(`${this.modelo} é um modelo que usa gasolina.`);
};

const Eletrico = function(nome, marca, modelo, anoModelo, anoFabricacao){
    Carro.call(this, nome, marca, modelo, anoModelo, anoFabricacao);
    console.log(`${this.modelo} é um modelo que usa elétrico.`);
};

let pessoa1 = new Eletrico("Joãozinho", "Tesla", "Model S", 2023, 2022);
pessoa1.mensagem();
pessoa1.acelerar();
pessoa1.explodido();