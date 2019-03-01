
class Jedi{
    constructor(name,power,health){
        this.name = name;
        this.power = power;
        this.health = health;
    }
    attack(sith){
        var damage = Math.random() *this.power ;
        sith.injure(damage);
    }

    injure(damage){
        this.health -= damage
    }

    dead(){
        return this.health < 0;
    }
}

class Sith{
    constructor(name,power,health){
        this.name = name;
        this.power = power;
        this.health = health;
    }
    attack(jedi){
        var damage = Math.random() *this.power;
        jedi.injure(damage);
    }
    injure(damage){
        this.health -= damage
    }
    dead(){
        return this.health < 0;
    }
}



function duel(obiwan , anakin){



    for(let i = 0;i<4;i++){
        obiwan.attack(anakin);
        anakin.attack(obiwan);    
    }


    for(let i = 0;i<2;i++){
        obiwan.attack(anakin);
        anakin.attack(obiwan);    
    }


    anakin.injure(anakin.health-10);

    if(anakin.dead()){
    }

    setTimeout(function(){
        anakin.health = 800;
        anakin.power = 90;
    },5000);
}

const obiwan = new Jedi("Obiwan Kenobi",70,700);
const anakin = new Sith("Anakin Skywalker",100,1000);

duel(obiwan,anakin);

module.exports = {
    duel,
    Sith,
    Jedi
}
