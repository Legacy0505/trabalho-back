/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('autores', (table)=> {
    table.increments();
    table.string("nome",80).notNullable();
    table.string("sobrenome",80).notNullable();
    table.integer("idade",3).notNullable();
    table.date("data_nascimento").notNullable();
    table.string("sexo",1).notNullable();
    table.string("telefone",10).notNullable();
  });
};
exports.down = function(knex) {
  return knex.schema.dropTable("autores");
};
