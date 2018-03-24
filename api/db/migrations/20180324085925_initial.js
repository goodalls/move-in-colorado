exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('costs', function(table) {
      table.increments('id').primary();
      table.string('');
      table.string('');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('schools', function(table) {
      table.increments('id').primary();
      table.string('');
      table.integer('').unsigned();
      table.foreign('').references('');

      table.timestamps(true, true);
    })
  ]);
};


exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable(''),
    knex.schema.dropTable('')
  ]);
};