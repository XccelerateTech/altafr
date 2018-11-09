const jsonfile = require('jsonfile');
const path = require('path');

module.exports = class JsonFile {

    constructor(fileName) {
        this.fileName = fileName;
    }

    write(input) {
        return new Promise((resolve, reject) => {
            jsonfile.readFile(path.join(__dirname, this.fileName), (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    let result = input(data);
                    jsonfile.writeFile(path.join(__dirname, this.fileName), result.data,{spaces: 2}, (err) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve([result.id]);
                        }
                    });
                }
            });
        })
    }

    read(input) {
        return new Promise((resolve, reject) => {
            jsonfile.readFile(path.join(__dirname, this.fileName), (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(input(data));
                }
            });
        });
    }
}


