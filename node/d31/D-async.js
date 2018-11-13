const pg = require('pg');

const config = {
    user: 'username',
    database: 'fruits',
    password: 'password',
    host: 'localhost',
    port: 5432,
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
}

const client = new pg.Client(config);

// Async Version 
async function run(){

    try {
        await client.connect();
        let results = await client.query('SELECT * FROM citrus WHERE color = $1',['orange']);
        console.log(results.rows);
        return results;
    }catch(e){
        console.log(e);
    }
}


run();

