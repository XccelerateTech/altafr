import * as React from 'react';
import Counter from './Counter';

interface ICounterPageStates {
    counters: string[];
    nameBoxValue: string;
}

export default class CounterPage extends React.Component<{}, ICounterPageStates> {
    public constructor(props: {}) {
        super(props);

        this.state = {
            counters: [],
            nameBoxValue: ''
        }
    }

    public render() {
        return (
            <div>
                <input onChange={this.onNameBoxChange} value={this.state.nameBoxValue} type="text" />
                <button onClick={this.addCounter}>Add Counter</button>
                {this.state.counters.map(counterName => (
                    <Counter name={counterName} />
                ))}
            </div>
        );
    }

    private addCounter = () => {
        this.setState({
            counters: this.state.counters.concat(
                [this.state.nameBoxValue]
            ),
            nameBoxValue: ''
        })
    }

    private onNameBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            nameBoxValue: e.currentTarget.value
        })
    }
}