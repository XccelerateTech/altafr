import * as React from 'react';
import './App.css';

import AddButton from './AddButton'
import LinkList from './LinkList'
import SearchBar from './SearchBar'

import {ILink} from './models'


import logo from './logo.svg';

interface IAppStates {
  links: ILink[];
  linksFiltered: ILink[] | null
}

class App extends React.Component <{}, IAppStates> {
  constructor(props: {}){
    super(props);

    this.state = {
      links: 
      [
        {name: 'Google', url: 'https://www.google.com'},
        {name: 'Yahoo', url: 'https://www.yahoo.com'},
      ],
      linksFiltered: null
    }

  }

  public render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className=" App-intro col-4">
            <img src={logo} className="App-logo" alt="logo" />
            <br />
            King of JS
            <AddButton onAddLink={this.onAddButtonAddLink}/>
          </div>

          <div className="App-intro col-8">
             <SearchBar onSearchChange = {this.onSearchBarChange}/>
            Links for #React
             <LinkList links={ this.state.linksFiltered !=null ? this.state.linksFiltered: this.state.links}/>
          </div>
        </div>
      </div>


    );
  }

  private onAddButtonAddLink = (name:string, url: string) => {
    this.setState({
      links: this.state.links.concat([
        {name, url}
      ])
    })
  }

  private onSearchBarChange = (search: string) => {
    const lowerSearch = search.toLowerCase();
    this.setState({
      linksFiltered: this.state.links.filter(link => link.name.toLowerCase().indexOf(lowerSearch) > -1 || link.url.toLowerCase().indexOf(lowerSearch) > -1)
    })
  }

}

export default App;
