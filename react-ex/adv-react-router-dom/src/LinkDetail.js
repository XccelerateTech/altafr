import * as React from "react";

import { links } from "./links";

export class LinkDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div>
        <h2>{links[this.props.match.params.id].title}</h2>
        <p>{links[this.props.match.params.id].url}</p>
        <p>State: {JSON.stringify(this.props.location.state)}</p>
        <button className="btn btn-danger" onClick={this.goBack}>Go Back</button>
      </div>
    );
  }
}