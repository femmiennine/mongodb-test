const express = require("express");
const connectDatabase = require("./config/db")
const productRouter = require("./routes/products.route");
const PORT = 8000
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//ROUTE
app.use("/products", productRouter);

app.listen(PORT, async () => {
    console.log(`Server is running http://localhost:${PORT}`)
    await connectDatabase()
})