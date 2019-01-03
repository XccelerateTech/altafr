import * as React from 'react';
import { IUser } from './models'

import * as Faker from 'faker'



interface IUserCardProps {
    users: IUser[]

}

export default class UserCard extends React.Component<IUserCardProps> {
    constructor(props: IUserCardProps) {
        super(props);
    }


    public render() {
        const userArray = this.props.users ? this.props.users.map((user, i) => {
            return (
                <div key={i} style={cardStyle}>
                    <div>
                        <img style={imageStyle} src={Faker.image.avatar()} alt="picture" />

                        <div>
                            First Name:
                        {user.firstName} 
                        <br />
                        
                            Last Name:
                        {user.lastName}
                        <br />

                            <p>Occupation:
                        {user.occupation}
                            </p>
                            <br />
                        </div>
                    </div>
                </div>
            )
        }) : null

        return (
            <div className="cardContainer">
                <h3> User Cards</h3>
                <div>
                    {userArray}
                </div>
            </div>
        )
    }
}

const cardStyle = {
    alignItems: 'center',
    backgroundColor: '#313742',
    borderColor: '#000000',
    borderRadius: 4,
    borderWidth: 2,
    color: '#ba1057',
    display: 'flex',
    height: 175,
    justifyContent: 'center',
    width: 150,
}

const imageStyle = {
    height: 75,
    marginLeft: 40,
    width: 45
}