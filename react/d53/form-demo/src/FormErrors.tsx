import * as React from 'react';

interface IErrorProps {
    formErrors: any
}

export default class FormErrors extends React.Component <IErrorProps> {
    constructor(props: IErrorProps){
        super(props);
    }
    public render() {
        // tslint:disable-next-line:no-unused-expression
        <div className="formErrors">
        {Object.keys(this.props.formErrors).map((fieldName, i) =>{
            if(this.props.formErrors[fieldName].length > 0){
                return (
                    <p key={i}>{this.props.formErrors.fieldName} {this.props.formErrors[fieldName]}</p>
                )
            } else {
                return '';
            }
        })}
        </div>
        return (
            <div className="formErrors">Error</div>
        )
    }
}