const express = require('express');
const app = express();
const hb = require('express-handlebars');

app.engine('handlebars', hb({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/people', function (req, res) {
    res.render('person');
});

app.get('/something', (req, res) => {
    res.render('view', { layout: "otherPage" })
});

app.get('/city', (req, res) => {
    res.render('city')
});

app.get('/hk', function (req, res) {
    res.render('city', { city: "Hong Kong" })
});

app.get('/singapore', function (req, res) {
    res.render('city', { city: "Singapore" })
});

const peopleOfHongKong = {
    people: [
        {
            "last": "Adams", "first": "Ansel", "profession": "photographer",
            "born": "SanFrancisco"
        },
        {
            "last": "Muir", "first": "John", "profession": "naturalist",
            "born": "Scotland"
        },
        {
            "last": "Schwarzenegger", "first": "Arnold",
            "profession": "governator", "born": "Germany"
        },
        {
            "last": "Wellens", "first": "Paul", "profession": "author",
            "born": "Belgium"
        }
    ]
};

app.get('/hongkongpeople', (req, res) =>{
    res.render('hongkongpeople', peopleOfHongKong);
});

app.listen(8080, () => {
    console.log(`App is listening to port 8080`);
});

/*

const bodyParser = require('body-parser');

app.use(express.static("public"));
app.use(bodyParser.json());






*/