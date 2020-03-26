const GroceryListController = require('../controllers/grocery.controller')


module.exports = function(app){

    app.get('/', GroceryListController.index);
    app.get('/api/grocery', GroceryListController.getAllGroceryList);
    app.post('/api/grocery', GroceryListController.createGroceryList);
    app.get('/api/grocery/:id', GroceryListController.getOneGrocery);
    app.put('/api/grocery/:id', GroceryListController.addToGroceryList);
    app.delete('/api/grocery/item/:id', GroceryListController.deleteOneItem);
    app.delete('/api/grocery/:id', GroceryListController.deleteGroceryList)
}
