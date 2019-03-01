//app.js
const express = require('express')
const app = express()
const faker = require('faker')

app.get('/', (req, res) => {
    res.status(200).send('Hello World!')
})

app.get('/people', (req, res)=> {
    let obj = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email()
    };
    res.json({'person': obj})
})

app.listen(8080,()=>{
    console.log('app is running on port 8080')
})
module.exports = app