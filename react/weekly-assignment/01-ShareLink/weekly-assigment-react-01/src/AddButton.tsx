/*
Base code
import * as React from 'react';

export default class AddButton extends React.Component {
    public render(){
        return(
            <div />
        )
    }
}
================================================================

Adding the button. Now we have added a button we can add some actions to the button.
Perhaps we add an onclick which is handled by a private and local method. 
If we click add link, most likely we want to ask the app to update its state, but in this hierarchy the add button cannot modify anything in the app component, as the app component is the parent of the button component. 

Can we use App.setState? No This is illegal

import * as React from 'react';

export default class AddButton extends React.Component {
    public render() {
        return (
            <div>
                <button onClick = {this.addLink}>Add Link</button>
            </div>
        )
    }

    private addLink =() =>{

    }
}
==============================================================================

What we can do is add an interface so that our AddButton can accept properties, this property is not a string, boolean or number, this property is a function. 
() => void; = this is the type signature for functions in typescript.
like an arrow function we define what we need as the parameters, and what these functions should return. 
Right now the function addlink accepts no parameters and returns nothing for me....

We set up the AddButton component so that it expects the App.tsx to pass a function into the AddButton component. then when add button is clicked, it will call the method that was passed to it. 

Right now in App.tsx there will be a red line. 


import * as React from 'react';

interface IAddButtonProps {
    onAddLink: () => void;
}

export default class AddButton extends React.Component <IAddButtonProps> {
    public render() {
        return (
            <div>
                <button onClick = {this.addLink}>Add Link</button>
            </div>
        )
    }

    private addLink =() =>{
        this.props.onAddLink();
    }
}
=========================================================================
Adding inputs so that we can change the name and url that are being added into our array of links. Therefore we must define the interface and set up the constructor as we will be changing the state of addButton

So below we initialised the two input states, name and url, we put it into type generic and added a new constructor. 

Then we add the onChange into our inputs. 

finally we add our functions, onNameChange and onUrlChange



import * as React from 'react';

interface IAddButtonProps {
    onAddLink: () => void;
}

interface IAddButtonStates {
    name: string;
    url: string;

}

export default class AddButton extends React.Component <IAddButtonProps, IAddButtonStates> {
    constructor(props: IAddButtonProps){
        super(props);

        this.state={
            name:'',
            url:''
        }
    }
    public render() {
        return (
            <div>
                <button onClick = {this.addLink}>Add Link</button>

                <input type='text' onChange={ this.onUrlChange} value={this.state.url}/>
                <input type='text' onChange={ this.onNameChange} value={this.state.name}/>

            </div>
        )
    }

    private addLink =() =>{
        this.props.onAddLink();
    }

    private onNameChange =(e: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            name: e.currentTarget.value
        })

    }

    private onUrlChange =(e: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            url: e.currentTarget.value
    })

}
}


// Remember that we need to pass an event into these functions as they are only triggered on certain events now we need to grab these two values when we grab the link. When the addLink button is clicked, we want to grab the current values of our inputs and pass them up a level to our App.tsx component

// in App.tsx we have no information about the state of the AddButton, so how can we add new links dynamically, can I add more links? Soo currently the addLink method is the only way that our AddButton and App.tsx components can communicate. 

So we can pass our values through here back to App.tsx? But there will be a red line, because in out interface for the properties of AddButton, we asked the parent component to pass a function that accepeted no inputs and returned nothing. We will need to change this.

this should make the redline go away. 
The method addlink should accept two parameters. 


import * as React from 'react';

interface IAddButtonProps {
    onAddLink: (name:string, url: string) => void;
}

interface IAddButtonStates {
    name: string;
    url: string;

}

export default class AddButton extends React.Component <IAddButtonProps, IAddButtonStates> {
    constructor(props: IAddButtonProps){
        super(props);

        this.state={
            name:'',
            url:''
        }
    }
    public render() {
        return (
            <div>
                <button onClick = {this.addLink}>Add Link</button>
                <input type='text' onChange={ this.onNameChange} value={this.state.name}/>
                <input type='text' onChange={ this.onUrlChange} value={this.state.url}/>
               

            </div>
        )
    }

    private addLink =() =>{
        this.props.onAddLink(this.state.name, this.state.url);
    }

    private onNameChange =(e: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            name: e.currentTarget.value
        })

    }

    private onUrlChange =(e: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            url: e.currentTarget.value
    })

}
}

// go back to app.tsx
=========================================================================

Adding tags (so that we can add tags into our linklist.)
Changing the state to accept tags, adding a button and method to handle the adding of tags to a particular link.


import * as React from 'react';
import { ITag } from './models';

interface IAddButtonProps {
    onAddLink: (name:string, url: string) => void;
}

interface IAddButtonStates {
    name: string;
    url: string;
    tags: ITag[];

}

export default class AddButton extends React.Component <IAddButtonProps, IAddButtonStates> {
    constructor(props: IAddButtonProps){
        super(props);

        this.state={
            name:'',
            url:'',
            tags: []
        }
    }
    public render() {
        return (
            <div>
                <button onClick = {this.addLink}>Add Link</button>
                <input type='text' onChange={ this.onNameChange} value={this.state.name}/>
                <input type='text' onChange={ this.onUrlChange} value={this.state.url}/>

                { this.state.tags.map((tag, i) =>{
                    return <input key={i} type='text' onChange= {this.onTagChange} value ={tag.name} />
                })}
                <button onClick = {this.addTag}>Add Tag</button>

            </div>
        )
    }

    private addLink =() =>{
        this.props.onAddLink(this.state.name, this.state.url);
    }

    private addTag =() =>{
        this.setState({
            tags: this.state.tags.concat([{
                name:''
            }])
        })
    }

    private onTagChange =(e: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            name: e.currentTarget.value
        })

    }


    private onNameChange =(e: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            name: e.currentTarget.value
        })

    }

    private onUrlChange =(e: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            url: e.currentTarget.value
    })

}
}

// this will be cause an error, as anything typed will only change the name input, moreover, when we add more tags, we can generate many inputs, however we are unable to really affect change.  
============================================================================
so we need to use the method.bind() to convert the function: we can change the this context, the second parameter, we can define more parameters, i is the index of the current tag so we pass i. So now, the method onTagChange doesnt have an event first it will be the i, the index of the tag input, then we pass the event. 



import * as React from 'react';
import { ITag } from './models';

interface IAddButtonProps {
    onAddLink: (name:string, url: string) => void;
}

interface IAddButtonStates {
    name: string;
    url: string;
    tags: ITag[];

}

export default class AddButton extends React.Component <IAddButtonProps, IAddButtonStates> {
    constructor(props: IAddButtonProps){
        super(props);

        this.state={
            name:'',
            tags: [],
            url:'',
        
        }
    }
    public render() {
        return (
            <div>
                <button onClick = {this.addLink}>Add Link</button>
                <input type='text' onChange={ this.onNameChange} value={this.state.name}/>
                <input type='text' onChange={ this.onUrlChange} value={this.state.url}/>

                { this.state.tags.map((tag, i) =>{
                    return <input key={i} type='text' onChange= {this.onTagChange.bind(this, i)} value ={tag.name} />
                })}
                <button onClick = {this.addTag}>Add Tag</button>

            </div>
        )
    }

    private addLink =() =>{
        this.props.onAddLink(this.state.name, this.state.url);
    }

    private addTag =() =>{
        this.setState({
            tags: this.state.tags.concat([{
                name:''
            }])
        })
    }

    private onTagChange =(i: number, e:React.ChangeEvent<HTMLInputElement>) =>{
        const tags = this.state.tags.slice(); // we clone the array so we are not mutating the origonal. 
        tags[i] = {
            name: e.currentTarget.value
        }

        this.setState({
        tags
        })

    }


    private onNameChange =(e: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            name: e.currentTarget.value
        })

    }

    private onUrlChange =(e: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            url: e.currentTarget.value
    })

}
}

// now the tags should work. show them in browser and also look at the debugger. We should also add these tags to our addLink method so that we can pass the tags up to our app.tsx. 
===========================================================================



import * as React from 'react';
import { ITag } from './models';

interface IAddButtonProps {
    onAddLink: (name:string, url: string, tags: ITag[]) => void;
}

interface IAddButtonStates {
    name: string;
    url: string;
    tags: ITag[];

}

export default class AddButton extends React.Component <IAddButtonProps, IAddButtonStates> {
    constructor(props: IAddButtonProps){
        super(props);

        this.state={
            name:'',
            tags: [],
            url:'',
        
        }
    }
    public render() {
        return (
            <div>
                <button onClick = {this.addLink}>Add Link</button>
                <input type='text' onChange={ this.onNameChange} value={this.state.name}/>
                <input type='text' onChange={ this.onUrlChange} value={this.state.url}/>

                { this.state.tags.map((tag, i) =>{
                    return <input key={i} type='text' onChange= {this.onTagChange.bind(this, i)} value ={tag.name} />
                })}
                <button onClick = {this.addTag}>Add Tag</button>

            </div>
        )
    }

    private addLink =() =>{
        this.props.onAddLink(this.state.name, this.state.url, this.state.tags);
    }

    private addTag =() =>{
        this.setState({
            tags: this.state.tags.concat([{
                name:''
            }])
        })
    }

    private onTagChange =(i: number, e:React.ChangeEvent<HTMLInputElement>) =>{
        const tags = this.state.tags.slice(); 
        tags[i] = {
            name: e.currentTarget.value
        }

        this.setState({
        tags
        })

    }


    private onNameChange =(e: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            name: e.currentTarget.value
        })

    }

    private onUrlChange =(e: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            url: e.currentTarget.value
    })

}
}

// then in the app.tsx

// add the modal form into the code.


import * as React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { ITag } from './models';


interface IAddButtonProps {
    onAddLink: (name:string, url: string, tags: ITag[]) => void;
}

interface IAddButtonStates {
    name: string;
    url: string;
    tags: ITag[];
    modal: boolean
}

export default class AddButton extends React.Component <IAddButtonProps, IAddButtonStates> {
    constructor(props: IAddButtonProps){
        super(props);

        this.state={
           modal: false,
           name:'',
           tags: [],
            url:'',
        
        }
    }
    public render() {
        return (
            <div>
                <button onClick = {this.toggle}>Add Link</button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} >
          <ModalHeader toggle={this.toggle}>Add Link Form</ModalHeader>
          <ModalBody>

          <input type='text' onChange={ this.onNameChange} value={this.state.name}/>
                <input type='text' onChange={ this.onUrlChange} value={this.state.url}/>

                { this.state.tags.map((tag, i) =>{
                    return <input key={i} type='text' onChange= {this.onTagChange.bind(this, i)} value ={tag.name} />
                })}

                <button onClick = {this.addTag}>Add Tag</button>

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addLink}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
            </div>
        )
    }

    public toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      }
    

    private addLink =() =>{
        this.props.onAddLink(this.state.name, this.state.url, this.state.tags);
    }

    private addTag =() =>{
        this.setState({
            tags: this.state.tags.concat([{
                name:''
            }])
        })
    }

    private onTagChange =(i: number, e:React.ChangeEvent<HTMLInputElement>) =>{
        const tags = this.state.tags.slice(); 
        tags[i] = {
            name: e.currentTarget.value
        }

        this.setState({
        tags
        })

    }


    private onNameChange =(e: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            name: e.currentTarget.value
        })

    }

    private onUrlChange =(e: React.ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            url: e.currentTarget.value
    })

}
}

// All we have done is added the modal logic from bootstrap into the code, we have then reassigned the addLink button to toggle and the toggle to add link, moreover we have moved the logic for adding links into the modal body. Everything is on the same page. The submit in the modal is the exit point. 

// This will add the link to our page, but the modal doesnt leave, this is due to the fact that we havent handled this logic anywhere. maybe on addLink we setState to close the modal form.

*/


import * as React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { ITag } from './models';


interface IAddButtonProps {
    onAddLink: (name: string, url: string, tags: ITag[]) => void;
}

interface IAddButtonStates {
    name: string;
    url: string;
    tags: ITag[];
    modal: boolean
}

export default class AddButton extends React.Component<IAddButtonProps, IAddButtonStates> {
    constructor(props: IAddButtonProps) {
        super(props);

        this.state = {
            modal: false,
            name: '',
            tags: [],
            url: '',

        }
    }
    public render() {
        return (
            <div>
                <button onClick={this.toggle}>Add Link</button>

                <Modal isOpen={this.state.modal} toggle={this.toggle} >
                    <ModalHeader toggle={this.toggle}>Add Link Form</ModalHeader>
                    <ModalBody>

                        Name:<br />
                        <input type='text' onChange={this.onNameChange} value={this.state.name} /><br />
                        URL:<br />
                        <input type='text' onChange={this.onUrlChange} value={this.state.url} /><br />
                        Tags:<br />
                        {this.state.tags.map((tag, i) => {
                            return <input key={i} type='text' onChange={this.onTagChange.bind(this, i)} value={tag.name} />
                        })}
                        <br />
                        <button onClick={this.addTag}>Add Tag</button><br />

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.addLink}>Submit</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>

            </div>
        )
    }

    public toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }


    private addLink = () => {
        this.setState({
            modal: false,
            name: '',
            tags: [],
            url: ''
        })
        this.props.onAddLink(this.state.name, this.state.url, this.state.tags);
    }

    private addTag = () => {
        this.setState({
            tags: this.state.tags.concat([{
                name: ''
            }])
        })
    }

    private onTagChange = (i: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const tags = this.state.tags.slice();
        tags[i] = {
            name: e.currentTarget.value
        }

        this.setState({
            tags
        })

    }


    private onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            name: e.currentTarget.value
        })

    }

    private onUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            url: e.currentTarget.value
        })

    }
}

// All that is left is to add in css and make it look like a proper application. 