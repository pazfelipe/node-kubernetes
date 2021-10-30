
exports.up = function (knex) {
  return knex.schema
    .createTable('products', table => {
      table.increments('id');
      table.string('name').notNullable();
      table.string('ead');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTable('products');
};
