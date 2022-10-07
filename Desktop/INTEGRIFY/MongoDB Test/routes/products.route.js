const express = require("express");

const { getAllProducts, getProduct, deleteProduct, createProduct, updateProduct } = require("../controllers/products.controller")
const productRouter = express.Router();

productRouter.get("/", getAllProducts);
productRouter.get("/:id([0-9]{3})", getProduct);
productRouter.post("/", createProduct);
productRouter.delete("/:id", deleteProduct);
productRouter.put("/:id", updateProduct);

module.exports = productRouter; 