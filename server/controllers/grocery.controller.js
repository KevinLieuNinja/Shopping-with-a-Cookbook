const { GroceryList, Item } = require('../models/grocery.model')


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

module.exports.addToGroceryList= (request, response) => {
    GroceryList.findByIdAndUpdate(request.params.id, { $push: {list: request.body}}, {new:true})
        .then(GroceryList => response.json(GroceryList))
        .catch(err => response(err))
}

module.exports.getAllGroceryList= (request, response) => {
    GroceryList.find({})
        .then(GroceryList => response.json(GroceryList))
        .catch(err => response(err))
}

module.exports.getOneGrocery= (request, response) => {
    GroceryList.findOne({_id:request.params.id})
        .then(oneGrocery => response.json(oneGrocery))
        .catch(err => response(err))
}

module.exports.purchaseOneItem= (request, response) => {
    GroceryList.find({"list._id": request.params.item})
        .then(purchaseItem => {
            console.log(purchaseItem)
            response.json(purchaseItem)
        })
        .catch(err => response.json(err))
}

module.exports.deleteGroceryList = (request, response) => {
    GroceryList.deleteOne({_id:request.params.id})
        .then(deleteList => response.json(deleteList))
        .catch(err => response.json(err))
}

