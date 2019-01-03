/*
Base Code
import * as React from 'react';

export default class SearchBar extends React.Component {
    public render(){
        return(
            <div />
        )
    }
}
========================================================================
To make the search bar work is similar to the AddButton.



import * as React from 'react';

interface ISearchBarStates{
    search: string;
}

export default class SearchBar extends React.Component <{}, ISearchBarStates> {
    constructor(props: {}){
        super(props);

        this.state = {
            search: ''
        };
    }
    public render(){
        return(
            <div>
                <input type='text' value ={this.state.search} onChange={this.onSearchChange}/>
            </div>

        );
    }

    private onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState ({
            search: e.currentTarget.value // we must do this again and again. 
        })
    }
}

// now we have an input field which doesnt do much. So we must change our app.tsx

So now we are adding the interface of props to accept properties from our parent component.
We expect that the app wants to see the updated search in our seach bar, so the app will expect this parameter so we can see what the user has typed in the input here.
*/
import * as React from 'react';

interface ISearchBarProps{
    onSearchChange: (search: string) => void;
}

interface ISearchBarStates{
    search: string;
}

export default class SearchBar extends React.Component <ISearchBarProps, ISearchBarStates> {
    constructor(props:ISearchBarProps){
        super(props);

        this.state = {
            search: ''
        };
    }
    public render(){
        return(
            <div>
                <input type='text' value ={this.state.search} onChange={this.onSearchChange}/>
            </div>

        );
    }

    /* Method 1
    private onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState ({
            search: e.currentTarget.value // we must do this again and again. 
        })


        // we cannot pass this.state.search, as currently it is still the previous value from before. this.setState doesnt update the state imediately, in the next cycle. (after the function as finished.)

        this.props.onSearchChange(e.currentTarget.value)
    }
    */

    // method 2, extracting the value and storing it in a variable.
    private onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const newSearch = e.currentTarget.value;

        this.setState ({
            search: newSearch 
        })

        this.props.onSearchChange(newSearch)
    }
}

// We should now change the App.tsx