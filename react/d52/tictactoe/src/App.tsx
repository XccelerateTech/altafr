import * as React from 'react';
import './App.css';
import Board from './Board';

interface IGameStates {
  history: Array<{ squares: Array<string|null>}>,
  stepNumber: number,
  xIsNext: boolean
}

class Game extends React.Component <{}, IGameStates>{
  constructor(props: {}){
    super(props);

    this.state={
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true
    };
  }

  public render(){
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves: JSX.Element[] = history.map((step, move) => {
      const desc = move?
        'Go to move #' + move :
        'Go to game start';

        return(
          <li key={move}>
          <button className={this.state.stepNumber === move ? 'current' : ''} onClick={this.onHistoryClick.bind(this, move)}>{desc}</button>
          </li>
        );
    });

    let status: string;
    if (winner){
      status = 'Winner: ' + winner.winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
        <Board 
        winner={winner} 
        squares={current.squares}
        onClick={this.onBoardClick}
        />
        </div>
        <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
        </div>
      </div>
    );
  }

  private handleClick (i: number){
    const history = this.state.history.slice(0, this.state.stepNumber +1);
    const current = history[history.length -1];
    const squares = current.squares.slice();

    if(calculateWinner(squares) || squares[i]){
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });    
  }

  private jumpTo(step: number){
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  private onBoardClick = (i: number) => this.handleClick(i);

  private onHistoryClick = (move:number) => this.jumpTo(move);
}

function calculateWinner(squares: Array<string | null>): {winner: string, line: [number, number, number]} | null {
  const lines: Array <[number, number, number]> =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

// tslint:disable-next-line:prefer-for-of
for (let i=0; i <lines.length;i++){
  const [a,b,c] = lines[i];
  if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
    const winner = squares[a]!;
    return {winner, line: lines[i]}
  }
}
return null;
}

export default Game;