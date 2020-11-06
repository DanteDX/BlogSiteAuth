const express = require('express');
const connectDB = require('./config/db.js');
const app = express();
connectDB();
const cors = require('cors');
app.use(express.json({extended:false}));
app.use(cors());


app.use('/api/signUp',require('./routes/signUp'));
app.use('/api/logIn',require('./routes/login'));
app.use('/api/submitBlog',require('./routes/submitBlog'));
app.use('/api/getAllBlogs',require('./routes/getAllBlogs'));

app.listen(4000,function(){console.log('Listening to port 4000')});