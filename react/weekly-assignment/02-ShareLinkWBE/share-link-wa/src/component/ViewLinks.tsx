import * as React from 'react';

import { ILink } from '../models';

import LinkList from './LinkList';
import SearchBar from './SearchBar';

import { connect } from 'react-redux';
import { ListLinksFromAPIAction } from '../redux/links/actions';
import { IRootState } from '../redux/store'

import logo from '../logo.svg';

import './ViewLinks.css';

interface IViewLinksProps {
    links: ILink[];
    loadLinks: (search?:string) => void;
}

class ViewLinks extends React.Component<IViewLinksProps> {
    constructor(props: IViewLinksProps){
        super(props);
    }
    
    public componentWillMount(){
        this.props.loadLinks();
    }

    public render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="profileDiv col-4">
                        <img src={logo} className="App-logo" alt="logo" />
                        <div>
                            <div className="profileName">King of JS</div>
                            <div>000 Fav Links</div>
                            <div>1 shared link</div>
                        </div>
                    </div>
                    <div className="col-8">
                        <SearchBar onSearchChange={this.onSearchBarChanged} />
                        <LinkList links={this.props.links} />
                    </div>
                </div>
            </div>
        );
    }

    private onSearchBarChanged = (search: string)=>{
        this.props.loadLinks(search);
    }

}

const mapStateToProps = (state: IRootState) => {
    return {
        links: state.links.linkList
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        loadLinks: (search?: string) => {
            dispatch(ListLinksFromAPIAction(search||''))
        }
    };
}

export default connect (mapStateToProps, mapDispatchToProps)(ViewLinks);