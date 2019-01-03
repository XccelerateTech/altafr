import * as React from 'react';

interface ILinkListProps {
    links: Array<{
      title: string,
      url: string
    }>
  }
  
  const PureLinkList = (props: ILinkListProps) => {
    return (
      <div>
        {props.links.map(l => (
          <div>{l.title} - {l.url}</div>
        ))}
      </div>
    );
  }

  export default PureLinkList;
  
