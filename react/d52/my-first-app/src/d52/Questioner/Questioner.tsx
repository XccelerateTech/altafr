import * as React from 'react';

interface IQuestionerProps{
    question: string;
}

interface IQuestionStates{
    answer: string;
}

export default class Questioner extends React.Component<IQuestionerProps, IQuestionStates>{
    constructor(props: IQuestionerProps){
        super(props);
        this.state = {
            answer: ''
        };
 }
        public query = () => {
            const userInput = prompt(this.props.question)
            if(userInput === null){
                return null
            } else {
                this.setState({
                    answer: userInput
                })
            } return 
    }

    public render() {
        return(
            <div>
                <button className="promptBox" onClick={this.query}>Questioner</button>
                <p>{this.state.answer}</p>
            </div>
        )
    }
}