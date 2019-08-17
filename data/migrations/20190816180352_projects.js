exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments('id')
            tbl.text('name')
            .notNullable()
            tbl.text('description')
            tbl.boolean('completed')
            .notNullable()
            .defaultsTo(false)
        })
        .createTable('resource', tbl => {
            tbl.increments()
            tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
            tbl.text('name')
            .notNullable()
            tbl.text('description')
        })
        .createTable('task', tbl => {
            tbl.increments()
            tbl.integer('task_id')
            .unsigned()
            .notNullable()
            tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
            tbl.text('description')
            tbl.text('notes')
            tbl.boolean('completed')
            .notNullable()
            .defaultTo(false)
        })
    }

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('task')
  .dropTableIfExists('resource')
  .dropTableIfExists('projects')
};