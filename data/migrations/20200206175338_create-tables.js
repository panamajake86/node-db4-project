
exports.up = function(knex) {
  return (knex.schema
    .createTable('recipe', tbl => {
        tbl.increments();
        tbl.string('recipe_name', 128).notNullable();
    }))
    .createTable('ingredient', tbl => {
        tbl.increments();
        tbl.string('ingredient_name', 128).notNullable();
        tbl.integer('measurement_num').notNullable();
        tbl.string('measurement_name', 128).notNullable();
    })
    .createTable('instructions', tbl => {
        tbl.increments();
        tbl.integer('step_number').notNullable();
        tbl.string('instruction').notNullable();
        tbl.integer('recipe_id')
            .notNullable()
            .unsigned()
            .references('recipe.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
    .createTable('recipe_ingredient', tbl => {
        tbl.increments();
        tbl.integer('recipe_id')
            .notNullable()
            .unsigned()
            .references('recipe.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.integer('ingredient_id')
            .notNullable()
            .unsigned()
            .references('ingredient.is')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    });
};

exports.down = function(knex) {
  return (knex.schema
        .dropTableIfExists('recipe_ingredient')
        .dropTableIfExists('instructions')
        .dropTableIfExists('ingredient')
        .dropTableIfExists('recipe')
    );
};
