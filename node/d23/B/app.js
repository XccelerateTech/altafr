let express = require('express');
let app = express();

app.use(express.static('flowershop'))

app.listen(8080);