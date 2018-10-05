//Declare and define class --> method one
function Gambler(cash, bet){
    this.cash = cash;
    this.bet = bet;
}

Gambler.prototype.lose = function (){
    this.cash -= Math.min(this.cash, this.bet);
}

//use the 'new' keyword to initialize new instances (create the gamblers from the class)
var gambler1 = new Gambler(100,30);
var gambler2 = new Gambler(100,40);

var outOfCashOrder = [];
var round = 0;

//business logic for the problem
function play(name, currentGambler, probability){
    if(currentGambler.cash > 0){
        if(Math.random() < probability){
            currentGambler.lose();
            console.log('Gambler '+name+' lost, $'+currentGambler.cash+' remaining');
            if(currentGambler.cash<=0){
                console.log('Gambler '+name+' ran out of cash');
                outOfCashOrder.push(name);
            }
        }
    }
}

function casino () {
    play('Jim', gambler1, 0.6);
    play('Bob', gambler2, 0.5);
}

//stage
console.log('Casino bets are in!');
while(gambler1.cash > 0 || gambler2.cash > 0){
    round ++;

    console.log('---- Round '+round+ ' ----')
    casino();
}

console.log('The order of players running out of cash:', outOfCashOrder);

//method two

class Gambler {
    constructor(options){
      this.cash = options.cash;
      this.bet = options.bet;
      this.lossProbability = options.lossProbability;
    }
    lose(){
      this.cash -= Math.min(this.cash, this.bet)
    }
  }
  
  var gambler1 = new Gambler({cash:100,bet:15,lossProbability:0.6});
  var gambler2 = new Gambler({cash:120,bet:10,lossProbability:0.4});  
    var round = 0;
    var outOfCashOrder = [];
  
  let play = function (name, currentGambler) {
    if(currentGambler.cash > 0){
          if(Math.random() < currentGambler.lossProbability){
              currentGambler.lose();
              console.log('Gambler '+name+' lost, $'+currentGambler.cash+' remaining');
              if(currentGambler.cash<=0){
                  console.log('Gambler '+name+' ran out of cash');
                  outOfCashOrder.push(name);
              }
          }
      }
  }
  
  let casino =function () {
    play('Jim', gambler1);
    play('Bill', gambler2)
  }
  
  console.log('Casino bets are in!');
  while(gambler1.cash > 0 || gambler2.cash > 0){
      round ++;
  
      console.log('---- Round '+round+ ' ----')
      casino();
  }
  
  console.log('The order of players running out of cash:', outOfCashOrder);
  