const { GroceryList } = require('../models/grocery.model')

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

module.exports.index=(req, res) => {
    response.json({
        message:'This is your list '
    })
}

module.exports.getAllGroceryList= (request, response) => {
    GroceryList.find({})
        .then(GroceryList => response.json(GroceryList))
        .catch(err => response(err))
}

