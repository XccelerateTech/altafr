import * as React from 'react';

interface IAddButtonProps {
    onAddLink: (name: string, url: string)=> void;
}

interface IAddButtonStates {
    name: string;
    url: string;
}
export default class AddButton extends React.Component<IAddButtonProps, IAddButtonStates> {
    constructor(props: IAddButtonProps){
        super(props);

        this.state={
            name: '',
            url: '',
        }
    }
    
    
    public render() {
        return (
            <div>
                <button onClick={this.addLink}>Add Link</button>
                <input type="text" onChange={this.onNameChange} value={this.state.name} />
                <input type="text" onChange={this.onURLChange} value={this.state.url} />

            </div>

            )
    }

    private addLink = () =>{
        this.props.onAddLink(this.state.name, this.state.url);

    }

    private onURLChange =(e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            url: e.currentTarget.value
        })
    }

    private onNameChange =(e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            name: e.currentTarget.value
        })
    }

}