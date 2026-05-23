const express = require('express');
const app = express();



const connectDB = require('./config/DBConnection');
const productRoutes = require('./routes/productRoutes');

app.use(express.json());



connectDB();

app.use(productRoutes);

app.listen(5000,()=>{
   console.log("server started");
});