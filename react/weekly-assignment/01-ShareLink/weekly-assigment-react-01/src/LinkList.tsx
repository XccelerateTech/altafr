/*
Base Code

import * as React from 'react';

export default class LinkList extends React.Component {
    public render(){
        return(
            <div />
        )
    }
}


Add interface is next step. we need to add the props that are passed to the link list component the links that should be generated. We will need to pass an object with name and url.
==============================================================
import * as React from 'react';

interface ILinkListProps {
    links: Array<{
        name: string;
        url: string;
    }>;
}



export default class LinkList extends React.Component <ILinkListProps>{
    public render(){
        return(
            <div>
            {this.props.links.map((link, i )=> (
                <div key={i}> {link.name} </div>
            ))}
            </div>
        )
    
}

Now the component can accept an array, each item in te array will contain the name and url which are both strings. 
{ this.props.links } this is the array which is storing all of our links. we use .map, which is what we learnt yesterday!
We use map to iterate over each item in our links array. 
for each line of link, we should generate a div with the name and the url.
because it is an array we should provide a key. we change the input, from link, to (link, i) for the link information and the index of the link/url in the array.
=========================================================================
Now we should be able to simulate, passing manual links in our app.tsx.


import * as React from 'react';

interface ILinkListProps {
    links: Array<{
        name: string;
        url: string;
    }>;
}



export default class LinkList extends React.Component <ILinkListProps>{
    public render(){
        return(
            <div>
            {this.props.links.map((link, i )=> (
                <div key={i}> {link.name} </div>
            ))}
            </div>
        )
    
}

====================================================================
now we use the ILink to define the linklist.
remember to import ILink from models. 



import * as React from 'react';
import {ILink} from './models';

interface ILinkListProps {
    links: ILink[];
}



export default class LinkList extends React.Component <ILinkListProps>{
    public render(){
        return(
            <div>
            {this.props.links.map((link, i )=> (
                <div key={i}> {link.name} </div>
            ))}
            </div>
        )
    
}
}
===========================================================================

Add in the link from into the link list.



import * as React from 'react';
import {ILink} from './models';

interface ILinkListProps {
    links: ILink[];
}



export default class LinkList extends React.Component <ILinkListProps>{
    public render(){
        return(
            <div>
            {this.props.links.map((link, i )=> (
                <div key={i}><a href={link.url}>{link.name} </a></div>
            ))}
            </div>
        )
    
}
}

// now it should work properly with links. 
============================================================================
Show the tags.
*/

import * as React from 'react';
import {ILink} from './models';

interface ILinkListProps {
    links: ILink[];
}

export default class LinkList extends React.Component <ILinkListProps>{
    public render(){
        return(
            <div>
            {this.props.links.map((link, i )=> (
                <div key={i}>
                <a href={link.url}>{link.name}</a> 
                
                {link.tags.map((tag,j)=>(
                    <span key = {j} >{tag.name}</span>
                ))}
                </div>
            ))}
            </div>
        )
    
}
}

// this should work now. Now to make the Search bar work properly