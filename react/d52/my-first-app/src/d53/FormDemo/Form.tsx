import * as React from 'react';

// add vaildations 

interface IFormProps{
    onAddUser: (firstName: string, lastName: string, occupation: string, ) => void;
}

interface IFormStates {
    firstName: string;
    lastName: string;
    occupation: string;
}

export default class Form extends React.Component <IFormProps, IFormStates>{
    constructor(props: IFormProps){
        super(props)

        this.state={
    firstName: 'Input First Name',
    lastName: 'Input Second Name',
    occupation: 'Input Job',
        }
    }
    public render(){
        
        return(
            <div className="formContainer">
            <label>First Name:</label>
            <input type="text" name="firstName" value={this.state.firstName} onChange={this.onFirstNameChange} onBlur={this.validateInput}/>
            <br />
            <label>Last Name:</label>
            <input type="text" name="lastName" value={this.state.lastName} onChange={this.onLastNameChange} onBlur={this.validateInput}/>
            <br />
            <label>Occupation:</label>
            <input type="text" name="occupation" value={this.state.occupation} onChange={this.onOccupationChange} onBlur={this.validateInput}/>
            <br />
            <button onClick={this.addUser}>Submit</button>      
            </div>
        )
    }

    private addUser = () => {
        this.props.onAddUser(this.state.firstName, this.state.lastName,this.state.occupation  )
        this.setState({
            firstName: '',
            lastName: '',
            occupation: ''
        })
    }
    private onFirstNameChange =(e: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            firstName: e.currentTarget.value
        })
    }
    private onLastNameChange =(e: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            lastName: e.currentTarget.value
        })
    }
    private onOccupationChange =(e: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            occupation: e.currentTarget.value
        })
    }

    private validateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value === ''){
            alert('Please Input the details!')
            
        }
    }


}

// const badValidation = {
//     border: 4,
//     borderColor: 'red'
// }