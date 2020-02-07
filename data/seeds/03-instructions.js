
exports.seed = function(knex) {
      return knex('instructions').insert([
        {step_number: 1, instruction: 'Pour lemonade into pitcher.', recipe_id: 1},
        {step_number: 2, instruction: 'Pour iced tea into pitcher.', recipe_id: 1},
        {step_number: 3, instruction: 'Stir drink together.', recipe_id: 1},
        {step_number: 4, instruction: 'Enjoy!', recipe_id: 1},
        {step_number: 1, instruction: 'Shred cheddar cheese into bowl.', recipe_id: 2},
        {step_number: 2, instruction: 'Shred pepper jack cheese into bowl.', recipe_id: 2},
        {step_number: 3, instruction: 'Mix cheeses together.', recipe_id: 2},
        {step_number: 4, instruction: 'Pour beer into medium saucepan and bring to simmer.', recipe_id: 2},
        {step_number: 5, instruction: 'Add mixed shredded cheese and cream cheese to simmering beer.', recipe_id: 2},
        {step_number: 6, instruction: 'Stir constantly to make sure nothing burns to the bottom of the saucepan.', recipe_id: 2},
        {step_number: 7, instruction: 'Continue to stir until cheese mixture in smooth and velvety.', recipe_id: 2},
        {step_number: 8, instruction: 'Pour cheese mixture into decorative bowl.', recipe_id: 2},
        {step_number: 9, instruction: 'Serve with tortilla chips, pretzels, or any of your favorite salty snacks.', recipe_id: 2},
        {step_number: 1, instruction: 'Place dynamite into toilet paper roll.', recipe_id: 3},
        {step_number: 2, instruction: 'Light fuse.', recipe_id: 3},
        {step_number: 3, instruction: 'RUN!', recipe_id: 3}
      ]);
};
