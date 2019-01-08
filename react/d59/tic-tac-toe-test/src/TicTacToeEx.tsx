import * as React from "react";

interface ISquareProps {
  value: string | null,
  onClick: () => void
}

class Square extends React.Component<ISquareProps, {}> {
  public render() {
    return (
      // tslint:disable-next-line:jsx-no-lambda
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}



interface IBoardStates {
  squares: Array<(string | null)>
}

// tslint:disable-next-line:max-classes-per-file
class Board extends React.Component<{}, IBoardStates> {
  constructor(props: {}) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }



 public render() {
    const status: string = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }

   public handleClick(i: number) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({ squares });
  }

 public renderSquare(i: number) {
    return (
      <Square
        value={this.state.squares[i]}
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => this.handleClick(i)}
      />
    );
  }
}

export { Board, Square };

// C updated tictactoe code 