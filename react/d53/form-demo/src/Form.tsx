import * as React from 'react';
import FormErrors from './FormErrors'

// add vaildations 

interface IFormProps{
    onAddUser: (firstName: string, lastName: string, occupation: string, ) => void;
}

interface IFormStates {
    firstName: string;
    firstNameValid: boolean;
    formErrors: object;
    lastName: string;
    lastNameValid: boolean;
    occupation: string;
    occupationValid: boolean
}

export default class Form extends React.Component <IFormProps, IFormStates>{
    constructor(props: IFormProps){
        super(props)

        this.state={
    firstName: 'Input First Name',
    firstNameValid: false,
    formErrors: {firstName: '', lastName: '', occupation:''},
    lastName: 'Input Second Name',
    lastNameValid: false,
    occupation: 'Input Job',
    occupationValid: false
        }
    }
    public render(){
        
        return(
            <div className="formContainer">
            <label>First Name:</label>
            <input type="text" name="firstName" value={this.state.firstName} onChange={this.onFirstNameChange}/>
            <br />
            <label>Last Name:</label>
            <input type="text" name="lastName" value={this.state.lastName} onChange={this.onLastNameChange}/>
            <br />
            <label>Occupation:</label>
            <input type="text" name="occupation" value={this.state.occupation} onChange={this.onOccupationChange}/>
            <br />
            <button onClick={this.addUser}>Submit</button>

            <div>
            <FormErrors formErrors={this.state.formErrors} />    
            </div>         
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


}
