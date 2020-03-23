const mongoose = require("mongoose")

// const ItemSchema = mongoose.Schema({
//     ingredient: {
//         type: String,
//     },
//     bought: {
//         type: Boolean,
//         default: false 
//     },
// })

// const ListSchema = mongoose.Schema({
//     list:[ItemSchema]
// })

const GroceryListSchema = mongoose.Schema({
    list: [
        {
            ingredient:String,
            bought:{
                type:Boolean,
                default:false
            }
        }
    ]
})



module.exports.GroceryList = mongoose.model("GroceryList", GroceryListSchema)