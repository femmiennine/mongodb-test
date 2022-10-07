const { products } = require("../models/products.model");

const getAllProducts = (res, req, next) => {
    res.status(200).send(products)
};

const getProduct = (res, req, next) => {
    const id = req.params.id;
    const product = products.find((product) => product.id === Number(id))
    if(!product) {
        res.status(404).send({
            message: "no product is available with this id."
        })
    } else {
        res.status(200).send(product)
    }
};

const deleteProduct = (res, req, next) => {
    const id = req.params.id;
    const product = products.find((product) => product.id === Number(id))
    if(!product) {
        res.status(404).send({
            message: "no product is available with this id."
        })
    } else {
        products.filter((product) => product.id !== Number(id))
        res.status(200).send(products)
    }
};

const createProduct = (res, req, next) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        ingredients: req.body.ingredients,
        usage: req.body.usage,
        goodToKnow: req.body.goodToKnow,
    }
    products.push(newProduct)
    res.status(201).send(newProduct)
};

const updateProduct = (res, req, next) => {
    const id = req.params.id
    const index = products.findIndex((product) => product.id === Number(id))
    const updatedProduct = {
        id: products[index].id,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        ingredients: req.body.ingredients,
        usage: req.body.usage,
        goodToKnow: req.body.goodToKnow,
    }
    products[index] = updatedProduct
    res.status(200).send(updatedProduct)
}

module.exports = { getAllProducts, getProduct, deleteProduct, createProduct, updateProduct }