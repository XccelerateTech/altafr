//connect to the database using knex

const knex = require('knex')({
    client: 'postgresql',
    connection: {
        database: 'fruit1',
        user: 'postgres',
        password: 'postgres'
    }
})


//begin knex transaction
//how to set up an async function in a transaction.
knex.transaction(async (trx) => {
   
    await trx('stock').decrement('quantity', 35).where('citrus_id', 3);

});


//this will not work as it is not part of a transaction
//Both .decrement & .increment must be wrapped in a transaction (as they first read the value in the table so that they can decrease or increase the value (respectively) by the number following the table column.) 
knex('stock').increment('quantity', 20).where('citrus_id', 1);

let query1 = knex.select('quantity').from('stock');

    query1.then((rows) => {
        console.log(rows)
    })
        .catch((err) => {
            console.log(err)
        })