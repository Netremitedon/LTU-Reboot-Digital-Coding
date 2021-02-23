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
    ],
    letsCook: function(){
        console.log("I'm hungry lets cook " + this.recipeTitle);
    },
};

objRecipe.letsCook();