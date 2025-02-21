const express = require('express');
const app = express();
const cors = require('cors');

// Express & Cors 
app.use(express.json());
app.use(cors());

//user_routes
const Auth_Routes = require('./Routes/authRoutes');
app.use('/api/auth',Auth_Routes)

//product_Routes
// const product_Routes = require('./Routes/productRoutes')
// app.use('/api/course',product_Routes)

//product_review
const review_Routes = require('./Routes/Review_Routes')
app.use('/api/review',review_Routes)

module.exports = app;