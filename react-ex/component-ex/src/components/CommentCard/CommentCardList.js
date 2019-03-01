import React, { Component } from "react";
import faker from "faker";
import CommentCard from "./CommentCard";
import DisplayList from "./DisplayList";

class CommentCardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Jyoti",
            list: [
                {
                    id: 0,
                    item: (
                        <CommentCard
                            author="Altaf"
                            comment="Altaf's first comment, amazing"
                            image={faker.image.avatar()}
                            date={"11/07/2018"}
                        />
                    )
                },
                {
                    id: 1,
                    item: (
                        <CommentCard
                            author="Jyoti"
                            comment="Jyoti's first comment, this is nice"
                            image={faker.image.avatar()}
                            date={"12/07/2018"}
                        />
                    )
                },
                {
                    id: 2,
                    item: (
                        <CommentCard
                            author="Sam"
                            comment="Sam's second Comment wow."
                            image={faker.image.avatar()}
                            date={"16/07/2018"}
                        />
                    )
                }
            ]
        };
    }
    render() {
        return (
            <div>
                <DisplayList name={this.state.name} list={this.state.list} />
            </div>
        );
    }
}

export default CommentCardList;

// import React, { Component } from "react";
// import faker from "faker";
// import CommentCard from "./CommentCard";

// class CommentCardList extends Component {
//     render() {
//         return (
//             <div>
//                 <CommentCard
//                 author="Sam"
//                 comment="This is a comment."
//                 image={faker.image.avatar()}
//                 date={"15/05/2018"}

//                 />
//             </div>
//         );
//     }
// }

// export default CommentCardList;