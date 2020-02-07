const express = require('express');

const Recipes = require('./recipe-model');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const recipe = await Recipes.getRecipes();
        res.status(200).json(recipe);
    } catch (err) {
        res.status(500).json({ message: 'Unable to get recipes.', err });
    };
});

router.get('/:id/shoppinglist', async (req, res) => {
    const recipe_id = req.params.id;
    
    try { 
        const list = await Recipes.getShoppingList(recipe_id);
        res.status(200).json(list);
    } catch (err) {
        res.status(500).json({ message: 'Unable to get shopping list.', err });
    };
});

router.get('/:id/instructions', async (req, res) => {
    const recipe_id = req.params.id;

    try {
        const instruct = await Recipes.getInstructions(recipe_id);
        res.status(200).json(instruct);
    } catch (err) {
        res.status(500).json({ message: 'Unable to get instructions.', err });
    };
});

module.exports = router;