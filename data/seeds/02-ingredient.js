
exports.seed = function(knex) {
      return knex('ingredient').insert([
        {ingredient_name: 'Lemonade', measurement_num: 1, measurement_name: 'Glass'},
        {ingredient_name: 'Iced Tea', measurement_num: 1, measurement_name: 'Glass'},
        {ingredient_name: 'Pepper Jack Cheese', measurement_num: 1, measurement_name: 'Cup'},
        {ingredient_name: 'Sharp Cheddar Cheese', measurement_num: 1, measurement_name: 'Cup'},
        {ingredient_name: 'Beer', measurement_num: 12, measurement_name: 'oz'},
        {ingredient_name: 'Cream Cheese', measurement_num: 8, measurement_name: 'oz'},
        {ingredient_name: 'Roll of Toilet Paper', measurement_num: 1, measurement_name: 'Roll'},
        {ingredient_name: 'Dynamite', measurement_num: 1, measurement_name: 'Stick'}
      ]);
};
