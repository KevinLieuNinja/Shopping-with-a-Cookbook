const { GroceryList } = require('..models/grocery.model')

module.exports.createGroceryList = (request, response) => {
    const { list, ingredient, bought} = request.body;
    request.body = {
        list:[
            {ingredient:"pasta"},
            {ingredient:"onion"}
        ]
    }
    GroceryList.create(request.body)
}