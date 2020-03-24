const { GroceryList } = require('../models/grocery.model')


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

// module.exports.createGroceryList = (request, response) => {
//     const {ingredient, bought} = request.body;
//     GroceryList.create(request.body)
//         .then(GroceryList => response.json(GroceryList))
//         .catch(err => response.status(400).json(err))
// }