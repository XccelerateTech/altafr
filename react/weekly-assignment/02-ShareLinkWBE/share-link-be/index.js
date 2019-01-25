const express = require('express');
const app= express();
const bodyParser = require('body-parser');

const LinkService = require('./linkService/LinkService');
const LinkRouter = require('./linkRouter/LinkRouter');
const TagService = require('./linkService/TagService');
const TagRouter = require('./linkRouter/TagRouter');

const knexConfig = require('./knexfile').development;
const knex = require('knex')(knexConfig);

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

let linkService = new LinkService(knex);
let tagService = new TagService(knex);

app.use('/api', (new LinkRouter(linkService)).router());
app.use('/api', (new TagRouter(tagService)).router());

app.listen(8080, ()=> console.log(`ShareLink listening on port 8080!`))