const express = require('express');
const app = express();

const cors = require('cors');

const connectDB = require('./config/DBConnection');
const productRoutes = require('./routes/productRoutes');

app.use(express.json());

app.use(cors());

connectDB();

app.use(productRoutes);

app.listen(5000,()=>{
   console.log("server started");
});