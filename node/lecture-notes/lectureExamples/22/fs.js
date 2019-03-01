const fs = require('fs');

const readable = fs.createReadStream(__dirname + '/read.txt', {encoding: 'utf8', highWaterMark: 32 * 1024});
const writeable = fs.createWriteStream(__dirname + '/writeable/copied.txt');

readable.pipe(writeable);