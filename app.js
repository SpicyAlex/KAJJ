const express = require('express');
const path = require('path');
const app = express();
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config({ path: './.env'});

const db = mysql.createConnection({
    //or IP address
    host: process.env.DATABASE_HOST, 
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE

});
//html, css link
const publicDirectory = path.join(__dirname, '/public');
app.use(express.static(publicDirectory));
//parse url encoded bodies
app.use(express.urlencoded({ extended:false }));
//parse JSON bodies
app.use(express.json());

app.set('view engine', 'hbs');

db.connect( (error) => {
    if(error){
        console.log(error)
    }else{
        console.log('mysql connected...')
    }
})
//link routes
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));


app.listen(5002, () => { 
    console.log('Server started on port 5001');
})
