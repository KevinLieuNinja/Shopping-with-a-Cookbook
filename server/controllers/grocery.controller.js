const { GroceryList } = require('../models/grocery.model')

module.exports.createGroceryList = (request, response) => {
    // const { list, ingredient, bought} = request.body;
    GroceryList.create(request.body)
        .then(newList => response.json(newList))
        .catch(err => response.json(err))
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

module.exports.deleteGroceryList = (request, response) => {
    GroceryList.delete({})
        .then()
        .catch()
}

