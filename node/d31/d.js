const pg = require('pg');

const config = {
    user: 'postgres',
    database: 'fruits',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000,
}

const client = new pg.Client(config);

client.connect();

client.query('SELECT * FROM citrus', function(err, results) {
    if(err) {
        console.log(err);
    }
    console.log(results.rows);
})

//=========d==================
client.query('SELECT * FROM citrus WHERE color = $1',['orange'], function(err, results){
    if(err){
        console.log(err)
    } 
    console.log(results.rows)
})

