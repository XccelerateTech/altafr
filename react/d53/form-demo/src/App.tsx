import * as React from 'react';
import Form from './Form'
import UserCard from './UserCard';

import {IUser} from './models'

// add vaildations 

interface IAppStates {
   users: IUser[];  
}

export default class App extends React.Component <{}, IAppStates> {
constructor(props: {}){
    super(props)

    this.state={
        users: []
        
    }
}
    public render(){
        return (
<div>
<Form onAddUser={this.onButtonAddUser}/>
<UserCard users={this.state.users}/>


</div>
        )
    }

    private onButtonAddUser = (firstName: string, lastName: string, occupation: string, ) => {
       
        const newUser = {
            firstName,
            lastName,
            occupation
        }
       
        this.setState({
           users: [...this.state.users, newUser]
            // phoneNumber,
        })

        // tslint:disable-next-line:no-console
        console.log('I love apples')
        
        // tslint:disable-next-line:no-console
        console.log(this.state.users)
    }
}

// form takes users inputs then will send information back to the app, the app will pass these user inputs into the UserCard component and then rerender the DOM so that a new user is appended on each submission. 
