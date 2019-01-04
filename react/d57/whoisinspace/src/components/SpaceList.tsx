import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addSpaceman, SpaceActions, whoIsInSpace } from "../actions/link"
import { IRootState } from "../reducers"

interface INameProps {
    names: Array<{
        name: string,
    }>,
    addSpaceman: ()=> void,
    whoIsInSpace: ()=> void
}

const PureNameList = (props: INameProps) => {
    return (
        <div>
            <button onClick={props.whoIsInSpace}>Who is in Space?
            </button>
            <button onClick={props.addSpaceman}>
            Add Spaceman
            </button>
            {props.names.map((n, i) => (
                <div key={i}>{n.name} </div>
            ))}
        </div>
    );
}

const mapStateToProps = (state: IRootState) => {
    return {
        names: state.names
    }
}

const mapDispatchToProps = (dispatch: Dispatch<SpaceActions>) => {
    return{
        addSpaceman: ()=> dispatch(addSpaceman('Spaceman')),
        whoIsInSpace: () => dispatch(whoIsInSpace())
    }
}

const NameList = connect(mapStateToProps, mapDispatchToProps)(PureNameList)

export default NameList;
