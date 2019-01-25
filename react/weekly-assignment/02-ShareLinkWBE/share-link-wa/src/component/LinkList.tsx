import * as React from 'react';
import { ILink } from '../models';
import LinkItem from './LinkItem';

interface ILinkListProps {
    links: ILink[];
}

export default class LinkedList extends React.Component<ILinkListProps>{
    public render(){
        return (
            <div>
                {this.props.links.map((link,i)=>(
                    <LinkItem
                    key={i}
                    title={link.title}
                    url={link.url}
                    tags={link.tags}
                    />
                ))}
            </div>
        );
    }
}