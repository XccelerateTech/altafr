import * as React from 'react';

import Questioner from './Questioner';

export default class QuestionerPage extends React.Component {
    public render(){
        return(
            <div>
                <Questioner question="What is your name?" />
            </div>
        )
    }
}