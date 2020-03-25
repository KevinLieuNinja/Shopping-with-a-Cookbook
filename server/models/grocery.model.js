const mongoose = require("mongoose")

const ItemSchema = mongoose.Schema({
    ingredient: {
        type: String,
    },
    bought: {
        type: Boolean,
        default: false 
    },
})

const ListSchema = mongoose.Schema({
    name: {
        type:String,
        required:[true, "Name must be there"]
    },
    list:[ItemSchema]
    
})

// const GroceryListSchema = mongoose.Schema({
//     list: [
//         {
//             ingredient: String,
//             bought:{
//                 type:Boolean,
//                 default:false
//             },
//             // require:[true, 'not enough letters'],
//             // minlength: [2, 'more letters']
//         }
//     ]
// })

// module.exports.GroceryList = mongoose.model("GroceryList", GroceryListSchema)
module.exports.Item = mongoose.model("Item", ItemSchema)
module.exports.GroceryList = mongoose.model("GroceryList", ListSchema)