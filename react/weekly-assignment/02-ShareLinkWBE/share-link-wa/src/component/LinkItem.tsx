import * as React from 'react';

import { ILink as ILinkProp } from '../models';

export default class LinkItem extends React.Component <ILinkProp> {
    public render(){
        return (
            <div className="listItem">
            <a href={this.props.url} target="blank">
            {this.props.title}</a>
            </div>
        )
    }
}