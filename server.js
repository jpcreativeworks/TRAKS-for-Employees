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
    console.log(`Connected to the business_db database.`)
  );

let inquirer = require('inquirer');
inquirer 
    .prompt([
    {
        type: 'input',
        message: 'What department are you in?',
        name: 'name',        
    },
    {
        type: 'input',
        message: 'What role do you have?',
        name: 'title',        
    },
    {
        type: 'input',
        message: 'What is your salary?',
        name: 'salary',        
    },
    {
        type: 'input',
        message: 'what is your first name?',
        name: 'first_name'
    },
    {
        type: 'input',
        message: 'what is your last name?',
        name: 'last_name',        
    },
       
    ]);