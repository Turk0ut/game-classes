class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    let mago = new heroi("Gundalf", 65, "mago")
    let guerreiro = new heroi("Frodo", 24, "guerreiro")
    let monge = new heroi("ShenXutian", 58, "monge")
    let ninja = new heroi("Naruto", 18, "ninja")

    function attack(){
        if(mago){
            console.log(`O ${this.tipo} atacou usando magia`)
        } else if(guerreiro){
            console.log(`O ${this.tipo} atacou usando espada`)
        } else if(monge){
            console.log(`O ${this.tipo} atacou usando artes marciais`)
        } else if(ninja){
            console.log(`O ${this.tipo} atacou usando shuriken`)
        }
    }

mago.attack()
guerreiro.attack()
monge.attack()
ninja.attack()