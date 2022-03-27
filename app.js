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
const publicDirectory = path.join(__dirname, './.public');

app.set('view engine', 'hbs');

db.connect( (error) => {
    if(error){
        console.log(error)
    }else{
        console.log('mysql connected...')
    }
})


app.get('/', (req, res) => {
    res.send('<h1>Home page</h1>')
});

app.listen(5001, () => { 
    console.log('Server started on port 5001');
})
