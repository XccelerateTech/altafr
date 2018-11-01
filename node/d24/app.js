const promisedFS = require('./promisedFs');
const pathModule = require('path');

function traverseFolders(path){
    promisedFS.readdir(path)
    .then((files)=>{
        for(let file of files){
            const filePath = pathModule.join(path, file);
            outPutFolderContent(filePath);
        }
    }).catch((error)=>{
        console.log(error);
    });
}

function outPutFolderContent(filePath){
    promisedFS.stat(filePath).then((stats)=>{
        if(stats.isDirectory()){
            console.log(filePath + ' is a directory.')
            traverseFolders(filePath)
        } else {
            console.log(filePath + ' is a file.')
        }
    }).catch((error)=>{
        console.log(error)
    });
}

outPutFolderContent('./files/files/..')