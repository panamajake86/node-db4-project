const db = require('../data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
    getRecipeByIngredient
};

function getRecipes() {
    return db('recipe')
};

function getShoppingList(recipe_id) {
    return db('recipe')
        .join('recipe_ingredient', 'recipe.id', 'recipe_ingredient.recipe_id')
        .join('ingredient', 'ingredient.id', 'recipe_ingredient.ingredient_id')
        .select('recipe.recipe_name', 'ingredient.ingredient_name', 'ingredient.measurement_num', 'ingredient.measurement_name')
        .where({ recipe_id: recipe_id });
};

function getInstructions(recipe_id) {
    return db('recipe')
        .join('instructions', 'recipe.id', 'instructions.recipe_id')
        .select('recipe.recipe_name', 'instructions.step_number', 'instructions.instruction')
        .where({ recipe_id: recipe_id });
};

function getRecipeByIngredient(ingredient_id) {
    return db('recipe')
        .join('recipe_ingredient', 'recipe.id', 'recipe_ingredient.recipe_id')
        .join('ingredient', 'ingredient.id', 'recipe_ingredient.ingredient_id')
        .select('ingredient.ingredient_name', 'recipe.recipe_name')
        .where({ ingredient_id: ingredient_id })
}