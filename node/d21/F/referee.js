const EventEmitter = require('events');
const Player = require('./player');
const Computer = require('./computer');

class Referee extends EventEmitter {
    constructor() {
        super();

        this.on('playerReady', (playerInput) => {
            this.playerInput = playerInput;
            this.emit('otherPlayerTurn');
        });

        this.on('computerReady', (computerInput) => {
            this.computerInput = computerInput;
            this.emit('resultReady', this.judge());
        });
    }

    start() {
        this.emit('firstPlayerTurn');
    }

    judge() {
        const computer = this.computerInput;
        const player = this.playerInput;
        if (computer == player) return 'draw!';

        if (computer == 'scissors') {
            if (player == 'rock') return 'player wins';
            return 'computer wins';
        }

        if (computer == 'paper') {
            if (player == 'scissors') return 'player wins';
            return 'computer wins';
        }

        if (computer == 'rock') {
            if (person == 'paper') return 'player wins';
            return 'computer wins'
        }

        return 'player wins';
    }
}

const referee = new Referee();
const player = new Player(referee);
const computer = new Computer(referee);

referee.on('firstPlayerTurn', function (){
    player.play('rock');
});

referee.on('otherPlayerTurn', function (){
    computer.emit('computerTurn');
});

referee.on('resultReady', function(result){
    console.log(results)
});

referee.start();

