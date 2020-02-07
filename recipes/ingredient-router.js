const express = require('express');

const Recipes = require('./recipe-model');

const router = express.Router();

router.get('/:id/recipes', async (req, res) => {
    const ingredient_id = req.params.id;

    try {
        const ingRec = await Recipes.getRecipeByIngredient(ingredient_id);
        res.status(200).json(ingRec);
    } catch (err) {
        res.status(500).json({ message: 'Could not get those recipes.', err});
    };
});

module.exports = router;