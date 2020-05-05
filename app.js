const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config')

const app = express();

//Middlewares
app.use(express.json()); //parse data and give back data when post smth

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts' , postsRoute)

//Routes

app.get('/', (req,res) => {
    res.send('We are on home')
})


//Connect to DB

mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => { console.log('Connected to DB') }
);

//listen to the server

app.listen(3000);