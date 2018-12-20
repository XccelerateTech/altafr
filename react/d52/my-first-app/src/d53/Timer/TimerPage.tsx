import * as React from 'react';

import Timer from './Timer';

interface ITimerStates {
    numberOfTimers: number;
}

export default class TimerPage extends React.Component <{}, ITimerStates> {
    constructor(props: {}){
        super(props);

        this.state = {
            numberOfTimers: 0
        };
    }

    public render(){
        const timers: JSX.Element[] = [];
        for(let i = 0; i< this.state.numberOfTimers; i ++){
            timers.push(<Timer key={i} />);
        }
        return (
            <div>
                <button onClick={this.onAddTimer}>Add Timer</button>
                <button onClick={this.onClearTimer}>Reset</button>
                { timers }
            </div>
        );
    }
    private onAddTimer = () => {
        this.setState({
            numberOfTimers: this.state.numberOfTimers +1
        })
    }
    private onClearTimer = () => {
        this.setState({
            numberOfTimers: 0
        })
    }
}