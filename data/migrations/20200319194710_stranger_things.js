
exports.up = function(knex) {
    return knex.schema.createTable('characters', tbl => {
        tbl.increments();

        tbl.varchar('name', 100).notNullable()

        tbl.integer('age')
        
        tbl.varchar('city', 100)
    })
    .createTable('episodes', tbl => {
        tbl.increments()

        tbl.varchar('name', 100).notNullable().unique()

        tbl.integer('season', 100)
    })
    .createTable('character_episodes', tbl => {
        tbl.increments();

        tbl.integer('character_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('characters')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

        tbl.integer('episodes_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('episodes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('character_episodes')
        .dropTableIfExists('episodes')
        .dropTableIfExists('characters')
};
