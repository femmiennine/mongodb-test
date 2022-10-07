const Express = require ("express");
const mongoose = require ("mongoose");
const productRouter = require ("./routes/products.route");

const PORT = 8005

const uri = "mongodb+srv://thoa-nguyen:thoanguyen@nodejstraining.4cyhs.mongodb.net/demo-isa?retryWrites=true&w=majority";
  mongoose.connect(
    uri,
    (e) => {
      try {
        if (e) {
          throw e;
        }
        console.log("database connected");
        app.listen(
            PORT, () => {
            console.log(
              "running on port "
            )
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
  );
 
const app = Express();
app.use(Express.json())
app.use(Express.urlencoded({extended: true}))

// routes here
app.use("/products", productRouter);
// app.use("/products", productRouter);












