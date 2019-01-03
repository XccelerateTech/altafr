import * as React from 'react';

interface ILinkListProps {
    links: Array<{
      id: number,
      title: string,
      url: string
    }>,
    addLink: () => void,
    clearLink: () => void,
    deleteLink: (key: number) => void,
  }
  
  const PureLinkList = (props: ILinkListProps) => {
    return (
      <div>
        <button onClick={props.addLink}>New Link</button>
        <button onClick={props.clearLink}>Clear </button>
        {props.links.map((l, i) => (
          // tslint:disable-next-line:jsx-no-lambda
          <div key={i}>{l.id} - {l.title} - {l.url} <button onClick={()=>props.deleteLink(l.id)}>Delete Me</button></div>
        ))}
      </div>
    );
  }

  export default PureLinkList;
  
