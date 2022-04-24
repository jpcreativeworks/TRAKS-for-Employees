const express = require('express');
const mysql = require('mysql2');
//required ports and method to call expredss
const PORT = process.env.PORT || 3001;
const app = express();
// highway for information
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      //have to instert password
      password: 'Webgirl527!',
      database: 'business_db'
    },
    console.log(`Connected to the books_db database.`)
  );