const express = require('express');
const app = express();
const cors = require('cors');

// Express & Cors 
app.use(express.json());
app.use(cors());

//user_routes
const Auth_Routes = require('./Routes/authRoutes');
app.use('/api/auth',Auth_Routes)

//courses
const productRoutes=require('./Routes/productRoutes')
app.use('/api/course',productRoutes)

//courese_review
const review_Routes = require('./Routes/Review_Routes')
app.use('/api/review',review_Routes)

// courese_rating
const rating_Routes = require('./Routes/Rating_Routes')
app.use('/api/rating',rating_Routes)

module.exports = app;