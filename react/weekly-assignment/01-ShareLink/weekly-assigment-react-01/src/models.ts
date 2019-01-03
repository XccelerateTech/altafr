/* 

export interface ILink {
    name: string;
    url: string;
}

// this is the common interface that each file should be using, each object will contain name and url. This has less todo with React, and more to do with typescript, hence the .ts, not .tsx
// In our app.tsx we redefine links to become ILink


add in the tags array. two methods passing just an array of strings, or in a similar way to how we defined ILink.

//method one:
export interface ILink {
    name: string;
    url: string;
    tags: string[];
}

method two:
*/

export interface ILink {
    name: string;
    url: string;
    tags: ITag[];
}

export interface ITag {
    name: string;
}

// now there is an error in App.tsx....