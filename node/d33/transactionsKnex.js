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
knex.transaction(async (trx) => {
   
  

    await trx('stock').decrement('quantity', 35).where('citrus_id', 3);

});
 
knex('stock').increment('quantity', 20).where('citrus_id', 1);

let query1 = knex.select('quantity').from('stock');

    query1.then((rows) => {
        console.log(rows)
    })
        .catch((err) => {
            console.log(err)
        })