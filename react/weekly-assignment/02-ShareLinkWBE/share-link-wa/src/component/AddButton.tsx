import * as React from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import { ILink, ITag } from '../models';
import { AddLinkActionThunk, AddTagActionThunk } from '../redux/links/actions';
import { IRootState } from '../redux/store';

import './AddButton.css';

interface IAddButtonProps {
    addLink: (link: ILink) => void;
    links: ILink[];
    addTag: (tag: ITag) => void;
    tags: ITag[];
}

interface IAddButtonStates {
    title: string;
    url: string;
    tags: ITag[];
    modal: boolean;
};

export class PureAddButton extends React.Component<IAddButtonProps, IAddButtonStates> {
    constructor(props: IAddButtonProps){
        super(props);

        this.state={
            modal: false,
            tags: [],
            title: '',
            url: '',
        };
    }

    public toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    
    public render (){
        return(
            <div>
                <button onClick={this.toggle}>Add Link</button>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>
                Add Link Form</ModalHeader>
                <ModalBody>
                    Name: <br />
                    <input type="text" onChange={this.onNameChange} value={this.state.title} /> <br />
                    URL: <br />
                    <input type="text" onChange={this.onURLChange} value={this.state.url} /> <br />
                    Tags: <br />
                    {this.state.tags.map((tag,i)=> {
                        return <input key={i} type="text" onChange={this.onTagChange.bind(this, i)} value={tag.name} />
                    })}
                    <br />
                    <button onClick={this.addTag}>Add Tag</button>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.addLink}>Submit</Button>
                    <Button color="secondary" onClick={this.toggle}>Cancel </Button>
                </ModalFooter>
                
                </Modal>

            </div>
        );
    }

    private onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            title: e.currentTarget.value
        })
    }

    private onURLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            url: e.currentTarget.value

        })
    }

    private onTagChange = (i: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const tags = this.state.tags.slice();
        tags[i] = {
            name: e.currentTarget.value
        };
        this.setState({
            tags
        })
    }

    private addLink = () => {
        this.props.addLink(
            {
                tags: this.state.tags,
                title: this.state.title,
                url: this.state.url,
            }
        );
        this.setState({
            modal: false,
            tags:[],
            title: '',
            url: '',
        })
    }

    private addTag = () => {
        this.setState({
            tags: this.state.tags.concat([{
                name: ''
            }])
        })
    }

}

const mapStateToProps = (state: IRootState) => {
    return {
        links: state.links.linkList
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        addLink: (link: ILink) => {
            dispatch(AddLinkActionThunk(link))
        },
        addTag: (tag: ITag) => {
            dispatch(AddTagActionThunk(tag))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PureAddButton);