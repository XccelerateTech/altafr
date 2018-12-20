import * as React from 'react';

interface ITimerState {
    elapsed: number;
}

export default class Timer extends React.Component<{}, ITimerState>{
    private timer: number;
    private startTime: number;

    constructor(props: {}){
        super(props);

        this.state={
            elapsed: 0
        };

    }

    public componentDidMount() {
        this.startTime = Date.now();
        this.timer = window.setInterval(this.tick, 15)
    }
    public componentWillUnmount(){
        clearInterval(this.timer);
    }
    public render() {
        return (
            <div>
                Time Elapsed: {(this.state.elapsed/ 1000).toFixed(3)}s
            </div>
        )
    }

    private tick =() =>{
        this.setState({
            elapsed: Date.now() - this.startTime
        });
    }
}