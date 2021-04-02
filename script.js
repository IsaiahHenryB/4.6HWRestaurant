let menuItem = {
    name: 'Kale Caesar Salad',
    nickName: 'All Hail Kale',
    referenceID: 'SLD001',
    description: 'Kale is king in this hearty, flavorful salad that pays homage to the traditional - but with a healthy twist',
    highInCalories: false,
    ingredients: ['Kale', 'Caesar dressing', 'Anchovy paste', 'Grilled corn', 'Parmesan cheese', 'Croutons'],
    numIngredients: function() {
    return this.ingredients.length;
    }
}
    // 1
    menuItem.yearAdded = "2017";
    // 2
    menuItem.forBreakfast=false;
    menuItem.forLunch=true;
    menuItem.forDinner=true;
    // 3
    delete menuItem.highInCalories;
    menuItem.calories = `560 calories`;
    // 4
    delete menuItem.nickName
    // The Nickname seemed okay to me ¯\_(ツ)_/¯
    // 5
    menuItem.ingredients.push("Lemon Juice")


    console.log("\n\n******menuItem Object******");
    Object.entries(menuItem).forEach(([key, value]) => {
    if (key != 'numIngredients')
    console.log(`${key}: ${value}`)
    });
    console.log(`Number of ingredients = ${menuItem.numIngredients()}`);