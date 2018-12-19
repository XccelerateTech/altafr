import * as React from 'react';

interface ICounterProps {
    name: string;
}

interface ICounterStates {
    count: number;
}

export default class Counter extends React.Component <ICounterProps, ICounterStates> {
    public constructor(props: ICounterProps){
        super(props);
            this.state ={
                count: 0
            }
    };


public render (){
    return (
        <div>
            Counter{(
                this.props.name === '')? '': ' '+this.props.name}:{ this.state.count}
            <button onClick ={ this.increaseCount }>
            +</button>
            <button onClick = {this.decreaseCount}>-</button>
        </div>
    );
}

private increaseCount = () => {
    this.setState({
        count: this.state.count + 1
    });
}
private decreaseCount = () => {
    this.setState({
        count: this.state.count -1
    });
}
}