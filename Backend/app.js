const express = require('express');
const app = express();
const cors = require('cors');

// Express & Cors 
app.use(express.json());
app.use(cors());

//auth_routes
const authRoutes = require('./Routes/authRoutes');
app.use('/api/auth',authRoutes)

// User Routes
 const userRoute = require('./Routes/userRoutes');
 app.use('/api/users',userRoute);


//courses
const RegisterRouth=require('./Routes/registerRoutes')
app.use('/api/course',RegisterRouth)

//courese_review
const review_Routes = require('./Routes/Review_Routes')
app.use('/api/review',review_Routes)

// courese_rating
const rating_Routes = require('./Routes/Rating_Routes')
app.use('/api/rating',rating_Routes)

module.exports = app;