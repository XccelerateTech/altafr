// import * as React from 'react';
// import './App.css';

// import AddButton from './AddButton';
// import LinkList from './LinkList';
// import logo from './logo.svg';
// import SearchBar from './SearchBar';

// import { ILink, ITag } from './models';
/*
base code.

=================================================================
import * as React from 'react';
import './App.css';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
=================================================================

// code to test if bootstrap is working. 
class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="row">

        <div className="App-intro col-6">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </div>
        <div className="App-intro col-6">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </div>
      </div>
      </div>
    );
  }
}

export default App;
=======================================================================


// code along step one:
class App extends React.Component {
  public render() {
    return (
      <div className="container-fluid">
            <div className="row">
          <div className="App-intro col-4">
            <img src={logo} className="App-logo" alt="logo" />
            <br />
            King of JS
            <AddButton/>
        </div>
          <div className="App-intro col-8">
          <SearchBar />
          Links for #React
          <LinkList />

        </div>
        </div>
      </div>
    );
  }
}

export default App;

// You can see that we are removing unwanted code and the defining the placeholders for our components, these components are arbitrary values, we need to define them, make three new files. Add in skeletons and export default each class. Use the light blub

// Now this is done we can begin to do the link list. We have defined it here in the app.tsx as well as our file called LinkList.tsx

// once the linklist is nearly done we can add this code to simulate the passing of links into our linkList component.
// below are hardcoded links, you can see the layout in React debugger. Now we need to change the array into something that is mutable, dynamic. So we can keep adding links into the add button. 

===========================================================================

class App extends React.Component {
  public render() {
    return (
      <div className="container-fluid">
            <div className="row">
          <div className="App-intro col-4">
            <img src={logo} className="App-logo" alt="logo" />
            <br />
            King of JS
            <AddButton/>
        </div>
          <div className="App-intro col-8">
          <SearchBar />
          Links for #React
          <LinkList links={[
  {name: 'Google', url: 'https://www.google.com'},
  {name: 'Yahoo', url: 'https://www.yahoo.com'},
]}/>

        </div>
        </div>
      </div>
    );
  }
}

export default App;


====================================================================
To do this we will define a new interface, for IAppStates 
we actually copy and paste the type defintion from LinkList.tsx. But now we have duplicated code....... As in two files, app.tsx and LinkList.tsx, and when we want o add tags which we will do in a few minutes, then we will need to change the code in multiple places... 

So we create a new file called models.ts


interface IAppStates{
  links: Array<{
    name: string;
    url: string;
  }>;
}

class App extends React.Component {
 
  public render() {
    return (
      <div className="container-fluid">
            <div className="row">
          <div className="App-intro col-4">
            <img src={logo} className="App-logo" alt="logo" />
            <br />
            King of JS
            <AddButton/>
        </div>
          <div className="App-intro col-8">
          <SearchBar />
          Links for #React
          <LinkList links={[
  {name: 'Google', url: 'https://www.google.com'},
  {name: 'Yahoo', url: 'https://www.yahoo.com'},
]}/>

        </div>
        </div>
      </div>
    );
  }
}

export default App;

=========================================================================


remember to import ILink from models. 
Now we also change the links so they can be added in a dynamic manner. 
Remember when defining state, that you need to insert an object that references the props, we dont need anything so we just pass an empty object. 


interface IAppStates{
  links: ILink[];
}

class App extends React.Component <{}, IAppStates>{
  constructor(props: {}){
    super(props)

    this.state = {
      links:
      [
        {name: 'Google', url: 'https://www.google.com'},
        {name: 'Yahoo', url: 'https://www.yahoo.com'},
      ]
    }

  }
 
  public render() {
    return (
      <div className="container-fluid">
            <div className="row">
          <div className="App-intro col-4">
            <img src={logo} className="App-logo" alt="logo" />
            <br />
            King of JS
            <AddButton/>
        </div>
          <div className="App-intro col-8">
          <SearchBar />
          Links for #React
          <LinkList links={this.state.links}/>

        </div>
        </div>
      </div>
    );
  }
}

export default App;

// now we have moved the hard coded links array into the App.states, once we add features to the add button, we may modify the state using setState. Now we wil change our AddButton component. GotoAddButton.tsx
====================================================================
Once the addButton logic accepts a function we need to define the function in app.tsx so we can pass it as props to our AddButton component. So now we are passing the function through the App to the component AddButton and defining the function that we are passing through.

interface IAppStates {
  links: ILink[];
}

class App extends React.Component<{}, IAppStates>{
  constructor(props: {}) {
    super(props)

    this.state = {
      links:
        [
          { name: 'Google', url: 'https://www.google.com' },
          { name: 'Yahoo', url: 'https://www.yahoo.com' },
        ]
    }

  }

  public render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="App-intro col-4">
            <img src={logo} className="App-logo" alt="logo" />
            <br />
            King of JS
            <AddButton onAddLink={this.onAddButtonAddLink} />
          </div>
          <div className="App-intro col-8">
            <SearchBar />
            Links for #React
          <LinkList links={this.state.links} />

          </div>
        </div>
      </div>
    );
  }

    private onAddButtonAddLink = () => {
      this.setState({
        links: this.state.links.concat([
          {name: 'Xccelerate', url: 'https://cms.xccelerateglobal.com/login'}
        ])
      })
    }

}

export default App;

// Now when we look at the page again and we press add link, then we are modifying the add state. The add button is inside the AddButton component but it is mutating the array in App.tsx

// difference between function and statement.

// As of right now we are only sending the Xccelerate url, so we nee do to be able to change this. Back to AddButton.tsx

===================================================================

We should define the name and url on our function, onAddButtonAddLink




interface IAppStates {
  links: ILink[];
}

class App extends React.Component<{}, IAppStates>{
  constructor(props: {}) {
    super(props)

    this.state = {
      links:
        [
          { name: 'Google', url: 'https://www.google.com' },
          { name: 'Yahoo', url: 'https://www.yahoo.com' },
        ]
    }

  }

  public render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="App-intro col-4">
            <img src={logo} className="App-logo" alt="logo" />
            <br />
            King of JS
            <AddButton onAddLink={this.onAddButtonAddLink} />
          </div>
          <div className="App-intro col-8">
            <SearchBar />
            Links for #React
          <LinkList links={this.state.links} />

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

}

export default App;

// We are required to use short hand here, does anyone know this? In ES6, if we have an object like this: 
{
  name: name,
  url: url
}
It looks a little silly, we have the key named name, and the variable is called name, key url and value url, we can use this short hand to define it. 
Now we should be able to add any links.



interface IAppStates {
  links: ILink[];
}

class App extends React.Component<{}, IAppStates>{
  constructor(props: {}) {
    super(props)

    this.state = {
      links:
        [
          { name: 'Google', url: 'https://www.google.com' },
          { name: 'Yahoo', url: 'https://www.yahoo.com' },
        ]
    }

  }

  public render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="App-intro col-4">
            <img src={logo} className="App-logo" alt="logo" />
            <br />
            King of JS
            <AddButton onAddLink={this.onAddButtonAddLink} />
          </div>
          <div className="App-intro col-8">
            <SearchBar />
            Links for #React
          <LinkList links={this.state.links} />

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

}

export default App;

// To add links into our list, as need to go back to LinkList. 


// Say we want to add tags to make out list more searchable and more ordered. So now we need to redefine the interface ILink (so that we can also accept tags.)

// The error that the app is throwing is due to the fact that the links we are getting are not being passed with the third property of tags. 

So we need to define the tags.


interface IAppStates {
  links: ILink[];
}

class App extends React.Component<{}, IAppStates>{
  constructor(props: {}) {
    super(props)

    this.state = {
      links:
        [
          { name: 'Google', url: 'https://www.google.com', tags: []},
          { name: 'Yahoo', url: 'https://www.yahoo.com', tags: [] },
        ]
    }

  }

  public render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="App-intro col-4">
            <img src={logo} className="App-logo" alt="logo" />
            <br />
            King of JS
            <AddButton onAddLink={this.onAddButtonAddLink} />
          </div>
          <div className="App-intro col-8">
            <SearchBar />
            Links for #React
          <LinkList links={this.state.links} />

          </div>
        </div>
      </div>
    );
  }

    private onAddButtonAddLink = (name:string, url: string) => {
      this.setState({
        links: this.state.links.concat([
          {name, tags: [], url }
        ])
      })
    }

}

export default App;

// The error for the onAddButtonAddLink was due to the tags being undefined as well. 

// Now we should go back to the add button.tsx so that we can add tags, however this is more difficult than before as people usually add more than one tag for a link. Back to AddButton.tsx
===========================================================================

Adding tags into our app.tsx so we can add them properly to our LinkList




interface IAppStates {
  links: ILink[];
}

class App extends React.Component<{}, IAppStates>{
  constructor(props: {}) {
    super(props)

    this.state = {
      links:
        [
          { name: 'Google', url: 'https://www.google.com', tags: []},
          { name: 'Yahoo', url: 'https://www.yahoo.com', tags: [] },
        ]
    }

  }

  public render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="App-intro col-4">
            <img src={logo} className="App-logo" alt="logo" />
            <br />
            King of JS
            <AddButton onAddLink={this.onAddButtonAddLink} />
          </div>
          <div className="App-intro col-8">
            <SearchBar />
            Links for #React
          <LinkList links={this.state.links} />

          </div>
        </div>
      </div>
    );
  }

    private onAddButtonAddLink = (name:string, url: string, tags: ITag[]) => {
      this.setState({
        links: this.state.links.concat([
          {name, tags, url }
        ])
      })
    }

}

export default App;

// tags are not shown yet, go back to LinkList

// After making the search bar we want to manipulate what the linkList is showing in our app.tsx, We should relie on the app to communicate to the linklist component. We need to define properties in the SearchBar to pass information between our components. 
=======================================================================

make the search bar work properly

adding the needed function and handler.
method one change the IAppStates


interface IAppStates {
  links: ILink[];
  linksFiltered: ILink[] | null;
}

class App extends React.Component<{}, IAppStates>{
  constructor(props: {}) {
    super(props)

    this.state = {
      links:
        [
          { name: 'Google', url: 'https://www.google.com', tags: []},
          { name: 'Yahoo', url: 'https://www.yahoo.com', tags: [] },
        ],
        linksFiltered: null
    }

  }

  public render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="App-intro col-4">
            <img src={logo} className="App-logo" alt="logo" />
            <br />
            King of JS
            <AddButton onAddLink={this.onAddButtonAddLink} />
          </div>
          <div className="App-intro col-8">
            <SearchBar onSearchChange = {this.onSearchBarChange}/>
            Links for #React
          <LinkList links={ this.state.linksFiltered != null ?this.state.linksFiltered : this.state.links } />
          </div>
        </div>
      </div>
    );
  }

  // If the linksFiltered is not null (if someone has searched something) then we will display the filtered links otherwise show the full array of links. 

  private onAddButtonAddLink = (name:string, url: string, tags: ITag[]) => {
      this.setState({
        links: this.state.links.concat([
          {name, tags, url }
        ])
      })
    }
      // method one:
    private onSearchBarChange =(search: string)=> {
      const lowerSearch = search.toLowerCase();
      this.setState({
        linksFiltered: this.state.links.filter(link=> link.name.toLowerCase().indexOf(lowerSearch) > -1 || link.url.toLowerCase().indexOf(lowerSearch) > -1)
        // if the name has the key word or if the url has that key word.
      })
    }

}

export default App;

// how do we filter the links to only show the appropriate information? You cant just modify the linklist, if you do you will lose the original links. use the normal javascript method. 
// remember to change the LinkList component.

// pass what we are searching for above our links:


interface IAppStates {
  search: string;
  links: ILink[];
  linksFiltered: ILink[] | null;
}

class App extends React.Component<{}, IAppStates>{
  constructor(props: {}) {
    super(props)

    this.state = {
      links:
        [
          { name: 'Google', url: 'https://www.google.com', tags: []},
          { name: 'Yahoo', url: 'https://www.yahoo.com', tags: [] },
        ],
        linksFiltered: null,
        search: ''
    }

  }

  public render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="App-intro col-4">
            <img src={logo} className="App-logo" alt="logo" />
            <br />
            King of JS
            <AddButton onAddLink={this.onAddButtonAddLink} />
          </div>
          <div className="App-intro col-8">
            <SearchBar onSearchChange = {this.onSearchBarChange}/>
            Links for {this.state.search}
          <LinkList links={ this.state.linksFiltered != null ?this.state.linksFiltered : this.state.links } />
          </div>
        </div>
      </div>
    );
  }

  private onAddButtonAddLink = (name:string, url: string, tags: ITag[]) => {
      this.setState({
        links: this.state.links.concat([
          {name, tags, url }
        ])
      })
    }
    private onSearchBarChange =(search: string)=> {
      const lowerSearch = search.toLowerCase();
      this.setState({
        
        linksFiltered: this.state.links.filter(link=> link.name.toLowerCase().indexOf(lowerSearch) > -1 || link.url.toLowerCase().indexOf(lowerSearch) > -1),
        search
      })
    }

}

export default App;

// This current method has a slight error / disadvantage, we already have google, but if I were to add it again, the new link would not show up, this is because we didn't update the links filter in the addLinks function. The Links filters is known as a dirived state, you must be careful not to miss the update. Currently the only way to update is the change the search bar search, which doenst look great. 
========================================================================

The other method is not to have the linksFiltered, but during the rendering we all this function every time. 



interface IAppStates {
  search: string;
  links: ILink[];
}

class App extends React.Component<{}, IAppStates>{
  constructor(props: {}) {
    super(props)

    this.state = {
      links:
        [
          { name: 'Google', url: 'https://www.google.com', tags: []},
          { name: 'Yahoo', url: 'https://www.yahoo.com', tags: [] },
        ],
        search: ''
    }

  }

  public render() {
    const lowerSearch = this.state.search.toLowerCase(); // use the state. so that every time we render we are giving the most updated array of our LinkList. 
    const linksFiltered = this.state.links.filter(link=> link.name.toLowerCase().indexOf(lowerSearch) > -1 || link.url.toLowerCase().indexOf(lowerSearch) > -1)

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="App-intro col-4">
            <img src={logo} className="App-logo" alt="logo" />
            <br />
            King of JS
            <AddButton onAddLink={this.onAddButtonAddLink} />
          </div>
          <div className="App-intro col-8">
            <SearchBar onSearchChange = {this.onSearchBarChange}/>
            Links for {this.state.search}
          <LinkList links={ linksFiltered } />
          </div>
        </div>
      </div>
    );
  }

  private onAddButtonAddLink = (name:string, url: string, tags: ITag[]) => {
      this.setState({
        links: this.state.links.concat([
          {name, tags, url }
        ]),

      })
    }
    private onSearchBarChange =(search: string)=> {
      this.setState({
        search
      })
    }

}

export default App;

// there are pros and cons obviously, if your rendering / filtering is quite heavy for computation, then we are wasting the resources of our machine. and the performance might be bad. - If you have alot of links, method one might be better, but do not forget to update the search state. We need to use local storage to store our link list, this is actually quite simple.

add in localStorage.getItem('links') In localStorage we must store strings we cannot store arrays, objects etc. 



interface IAppStates {
  search: string;
  links: ILink[];
}

class App extends React.Component<{}, IAppStates>{
  constructor(props: {}) {
    super(props)

    const storedLink = localStorage.getItem('links');


    // first defined in links: below but changed to make it safer. 
    const parsedLink =(storedLink === '' || storedLink === null) ? [] : JSON.parse(storedLink)

    // this helps if there is any data corruption! If the links that are passed is not an array, then links.filter in linksFiltered with throw and error. 
    this.state = {
      links: Array.isArray(parsedLink) ? parsedLink: [],
        search: ''
    }

  }

  public render() {
    const lowerSearch = this.state.search.toLowerCase();
    const linksFiltered = this.state.links.filter(link=> link.name.toLowerCase().indexOf(lowerSearch) > -1 || link.url.toLowerCase().indexOf(lowerSearch) > -1)

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="App-intro col-4">
            <img src={logo} className="App-logo" alt="logo" />
            <br />
            King of JS
            <AddButton onAddLink={this.onAddButtonAddLink} />
          </div>
          <div className="App-intro col-8">
            <SearchBar onSearchChange = {this.onSearchBarChange}/>
            Links for {this.state.search}
          <LinkList links={ linksFiltered } />
          </div>
        </div>
      </div>
    );
  }

  private onAddButtonAddLink = (name:string, url: string, tags: ITag[]) => {
    const newLink = this.state.links.concat([
      {
        name,
        tags,
        url
      }
    ]);
      this.setState({

        // use refactor to change this part. 

        links: newLink,

      })

      localStorage.setItem('links', JSON.stringify(newLink));

    }
    private onSearchBarChange =(search: string)=> {
      this.setState({
        search
      })
    }

}

export default App;

// now add google etc and see if it stays on refresh. use the inspector ro show the different links in local storage. 

// title is name, 
// only thing that has not been finished is validation...

Currently the application looks a little ugly, especially around adding links. So to make the appearance nicer lets use modal. 

So we will need to install BootStrap.js, you cannot just include the js in html, React controls the DOM, so we need <react-strap className=""></react-strap>

To do modal in react is different to what we have done previously. 
Goto the CMS and show them the React logic, we use state in react to contorl the modal, if we want to show the modal then we change the boolean from true to false.  

in Add button.tsx
*/


import * as React from 'react';
import './App.css';

import AddButton from './AddButton';
import LinkList from './LinkList';
import logo from './logo.svg';
import SearchBar from './SearchBar';

import { ILink, ITag } from './models';

interface IAppStates {
  search: string;
  links: ILink[];
}

class App extends React.Component<{}, IAppStates>{
  constructor(props: {}) {
    super(props)

    const storedLink = localStorage.getItem('links');

    const parsedLink =(storedLink === '' || storedLink === null) ? [] : JSON.parse(storedLink)

    this.state = {
      links: Array.isArray(parsedLink) ? parsedLink: [],
        search: ''
    }
  }

  public render() {
    const lowerSearch = this.state.search.toLowerCase();
    const linksFiltered = this.state.links.filter(link=> link.name.toLowerCase().indexOf(lowerSearch) > -1 || link.url.toLowerCase().indexOf(lowerSearch) > -1)

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="App-intro col-4">
            <img src={logo} className="App-logo" alt="logo" />
            <br />
            King of JS
            <br />
            Number of links: {this.state.links.length}
            <br />
            <AddButton onAddLink={this.onAddButtonAddLink} />
          </div>
          <div className="App-intro col-8">
          <h4>Search stored links:</h4>
            <SearchBar onSearchChange = {this.onSearchBarChange}/>
            <h3>Links for {this.state.search}</h3>
          <LinkList links={ linksFiltered } />
          </div>
        </div>
      </div>
    );
  }

  private onAddButtonAddLink = (name:string, url: string, tags: ITag[]) => {
    const newLink = this.state.links.concat([
      {
        name,
        tags,
        url
      }
    ]);
      this.setState({
        links: newLink,
      })

      localStorage.setItem('links', JSON.stringify(newLink));

    }
    private onSearchBarChange =(search: string)=> {
      this.setState({
        search
      })
    }

}

export default App;