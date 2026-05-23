const express = require('express');
const app = express();
const cors = require("cors")


const connectDB = require('./config/DBConnection');
const productRoutes = require('./routes/productRoutes');

const allowedorigins = [
   "https://frontend-shopcart.vercel.app/",
   "localhost:5173",
  
]

app.use(cors({origins: allowedorigins
   
}
))

app.use(express.json());



connectDB();

app.use(productRoutes);

app.listen(5000,()=>{
   console.log("server started");
});