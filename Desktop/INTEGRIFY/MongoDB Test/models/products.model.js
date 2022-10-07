const mongoose = require ("mongoose")
//Schema
const productsSchema = new mongoose.Schema({
    id: String,
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
})
const Products = mongoose.model("Products", productsSchema)
module.exports = Products;