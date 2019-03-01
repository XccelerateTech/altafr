import React from "react";

class CommentCard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let style = {
            maxWidth: "18rem"
        };
        let center = {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap"
        };
        return (
            <div className="card text-white bg-secondary mb-3" style={style}>
                <div className="card-header">
                    <div style={center}>
                        <img src={this.props.image} alt="this pict ure" />
                    </div>
                    <h3 style={center} className="card-title">
                        {this.props.author}{" "}
                    </h3>
                </div>
                <div className="card-body" style={center}>
                    <p className="card-text"> Today at {this.props.date}</p>
                    <p className="card-text">{this.props.comment}</p>
                </div>
            </div>
        );
    }

};

export default CommentCard;