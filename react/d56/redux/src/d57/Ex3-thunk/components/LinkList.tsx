
import * as React from "react";
import { connect } from "react-redux";
import {Dispatch} from 'redux'
import {addLink, clearLink, LinkActions, reloadLink} from '../actions/link'
import { IRootState } from "../reducers";

interface ILinkListProps {
  links: Array<{
    title: string,
    url: string
  }>,
  addLink: () => void,
  clearLink: () => void,
  reloadLink: () => void
}
const PureLinkList = (props: ILinkListProps) => {
  return (
    <div>
      <button onClick={props.reloadLink}>Reload</button>
      <button onClick={props.addLink}>New Link</button>
      <button onClick={props.clearLink}>Clear</button>
      {props.links.map(l => (
        <div>{l.title} - {l.url}</div>
      ))}
    </div>
  );
}

const mapStateToProps = (state: IRootState) => {
  return {
    links: state.links
  }
}

// Add the `mapDispatchToProp`
const mapDispatchToProp = (dispatch: Dispatch<LinkActions>) => {
  return {
    addLink: () => dispatch(addLink('Accelerate', 'http://www.acceleratedhk.com')),
    clearLink: () => dispatch(clearLink()),
    reloadLink: () => dispatch(reloadLink())
  }
}
const LinkList = connect(mapStateToProps, mapDispatchToProp)(PureLinkList)

export default LinkList;
