import * as React from 'react';

interface IUserListProps {
    users: Array<{
      name: string
    }>
  }
  
  const PureUserList = (props: IUserListProps) => {
    return (
      <div>
        {props.users.map(l => (
          <div>{l.name}</div>
        ))}
      </div>
    );
  }

  export default PureUserList;