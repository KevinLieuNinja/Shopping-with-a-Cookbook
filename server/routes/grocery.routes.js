const GroceryListController = require('../controllers/grocery.controller');
module.exports = function(app){
    app.post('/api/grocery', GroceryListController.createGroceryList);
}
