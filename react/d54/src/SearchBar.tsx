import * as React from 'react';

interface ISearchBarProps {
    onSearchChange: (search: string) => void;
}

interface ISearchBarStates {
    search: string;
}


export default class SearchBar extends React.Component <ISearchBarProps,ISearchBarStates> {
    constructor(props: ISearchBarProps){
        super(props);

        this.state={
            search: ''
        }
    }
    public render() {

        return (
            <div>
                <input type="text" value={this.state.search} onChange={this.onSearchChange} />
            </div>
        )
    }

    private onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSearch = e.currentTarget.value
        this.setState ({
            search: newSearch
        })

        this.props.onSearchChange(newSearch)
    }
}