const mongoose = require ("mongoose")
//Schema
const productsSchema = new mongoose.Schema({
    id: String,
    title: String,
    price:  Number,
})
const Products = mongoose.model("Products", productsSchema)
module.exports = Products;