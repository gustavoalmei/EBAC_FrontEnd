const Carro = function(marca, modelo, anoModelo, anoFabricacao){
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
        console.log(`O ${this.modelo} é da ${this.marca} ano ${this.anoModelo}.`);
    };
};

const Gasolina = function(marca, modelo, anoModelo, anoFabricacao){
    Carro.call(this, marca, modelo, anoModelo, anoFabricacao);
    console.log(`${this.modelo} é um modelo que usa gasolina.`);
};

const Eletrico = function(marca, modelo, anoModelo, anoFabricacao){
    Carro.call(this, marca, modelo, anoModelo, anoFabricacao);
    console.log(`${this.modelo} é um modelo elétrico.`);
};

let eletrico1 = new Eletrico("Tesla", "Model S", 2023, 2022);
eletrico1.mensagem();
eletrico1.acelerar();
let eletrico2 = new Eletrico("JAC", "E-JS1", 2023, 2022);
eletrico2.mensagem();
eletrico2.acelerar();
let eletrico3 = new Eletrico("Renault", "Kwid e-Tech", 2023, 2022);
eletrico3.mensagem();
eletrico3.acelerar();
let gasolina1 = new Gasolina("Chevrolet", "Celta", 2013, 2012);
gasolina1.mensagem();
gasolina1.acelerar();
let gasolina2 = new Gasolina("Chevrolet", "Opala", 1974, 1973);
gasolina2.mensagem();
gasolina2.acelerar();
let gasolina3 = new Gasolina("Volkswagen", "Fusca", 1996, 1995);
gasolina3.mensagem();
gasolina3.acelerar();