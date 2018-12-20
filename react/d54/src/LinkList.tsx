import * as React from 'react';
import {ILink} from './models'

interface ILinkListProps {
    links: ILink[]
}


export default class LinkList extends React.Component <ILinkListProps> {
    public render() {
        return (
            <div>
            {this.props.links.map((link, i)=>(
                <div key={i}><a href={link.url}> {link.name} </a></div>
            ))}
            </div>
        )
    }
}