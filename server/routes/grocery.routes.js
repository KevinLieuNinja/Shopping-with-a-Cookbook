const GroceryListController = require('../controllers/grocery.controller');

module.exports = function(app){

    app.get('/', GroceryListController.index);
    app.get('/api/grocery', GroceryListController.getAllGroceryList);
    app.post('/api/grocery', GroceryListController.createGroceryList);
}
