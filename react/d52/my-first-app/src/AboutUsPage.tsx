import * as History from "history";

import * as React from 'react';

interface IAboutUsProps {
    history: History.History;
}

interface IAboutUsStates{
    pageClicked: number;
}

export default class AboutUsPage extends React.Component<IAboutUsProps, IAboutUsStates>{
    constructor(props: IAboutUsProps){
        super(props);

        this.state = {
            pageClicked: 0
        }
    }

    public render(){
        return (
            <div>
                <h1>I am actually a cool <span onClick={this.onPageClicked}>page</span>..................</h1>
            </div>
        )
    }

    private onPageClicked =() => {
        if(this.state.pageClicked ===4){
            this.props.history.push('/secretPage')
        } else {
            this.setState({
                pageClicked: this.state.pageClicked +1
            })
        }
    }

}