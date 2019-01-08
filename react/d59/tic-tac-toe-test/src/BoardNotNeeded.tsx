import * as React from 'react';

interface ISquareProps{
    value: string | null;
    isWinSquare: boolean;
    onClick: ()=> void;
}

function Square(props: ISquareProps){
    return (
        <button className={'square' + (props.isWinSquare ? ' win' : '')} onClick={props.onClick}>{props.value}</button>
    );
}

interface IBoardProps {
    winner: {winner: string, line: [number,number,number]} | null,
    squares: Array<string | null>,
    onClick: (i:number) => void
}

export default class Board extends React.Component <IBoardProps, {}> {
    public render() {
        return (
            <div>
                <div className="status">{}</div>
                {[0,1,2].map(i=>(
                    <div key={i} className="board-row">
                    {[0,1,2].map(j=>{
                        const current = i * 3 + j;
                        const isWinSquare = (this.props.winner != null && this.props.winner.line.indexOf(current) > -1);
                        return this.renderSquare(current, isWinSquare);
                    })}
                    </div>
                ))}
            </div>
        )
    };

    private renderSquare(i: number, isWinSquare: boolean){
        return(
            <Square
            isWinSquare={isWinSquare}
            value={this.props.squares[i]}
            onClick={this.onSquareClick.bind(this, i)} />
        );
    }

    private onSquareClick = (i: number) =>this.props.onClick(i);

}