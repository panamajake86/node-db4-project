
exports.seed = function(knex) {
      return knex('recipe').insert([
        {recipe_name: 'Arnold Palmer'},
        {recipe_name: 'Beer Cheese'},
        {recipe_name: 'Bomb'}
      ]);
};
