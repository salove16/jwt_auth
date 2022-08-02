const express = require("express");

const connect = require("./config/db");
const userController=require("./controllers/user.Controller")
const productController=require("./controllers/product.controller")
const {
    register,
    login,
    generateToken,
  } = require("./controllers/auth.controller");

const cors = require("cors");

const app = express();

app.use(express.json());



app.use(cors());

app.use("/users", userController);

app.post("/register", register);

app.post("/login", login);

app.use("/product", productController);



app.listen(4000, async () => {
  try {
    await connect();
    console.log("port is listening to 8000");
  } catch (err) {
    console.log(err);
  }
});
