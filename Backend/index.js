const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./Config/db');



// Dotenv path 
dotenv.config({path:"../Backend/Config/config.env"});

// Database Connection
connectDatabase();
const PORT = 7667|| process.env.PORT
 

app.listen(PORT, () =>{
    console.log(`Server : Woriking On http://localhost:${PORT}`)
})