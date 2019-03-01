import * as React from "react";
import { withRouter } from "react-router-dom";

class PureGoBack extends React.Component {
  constructor(props) {
    super(props);
  }

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.goBack}>Go Back</button>
      </div>
    );
  }
}

// By wrapping the component with `withRouter()`, this component will be able to get the history object
export const GoBack = withRouter(PureGoBack);
