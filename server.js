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

if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server  is runnig on ${PORT}`));