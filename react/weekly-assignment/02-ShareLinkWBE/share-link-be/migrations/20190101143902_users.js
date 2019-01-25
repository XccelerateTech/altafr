
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (table)=>{
        table.increments();
        table.string("email");
        table.string("password");
        table.timestamps(false, true);
    })

  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
  
};

// add in user id for links and tags 