objRecipe = {
    recipeTitle:'Beans on Toast',
    servings: 1,
    ingredients: [
        'Baked Beans',
        'Bread',
        'Butter',
        'Black Pepper'
    ],
    direction:[
        'Empty tin of beans into a pan',
        'Put Bread in toaster and toast until golden brown',
        'Butter the toast',
        'Place beans on top of buttered bread',
        'Apply black pepper as you see fit'
    ]
};

console.log(objRecipe.recipeTitle);
console.log(objRecipe.servings);
for(counter = 0; counter < objRecipe.ingredients.lenght; counter++){
    let ingredients = objRecipe.ingredients[counter];
    console.log(ingredients);
}
for(counter = 0; counter < objRecipe.direction.lenght; counter++){
    let ingredients = objRecipe.direction[counter];
    console.log(direction);
}