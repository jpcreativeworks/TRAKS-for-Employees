let inquirer = require('inquirer');

const mysql = require('mysql2');
const { firstQ } = require('./utils/questions')
//required ports and method to call expredss

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
db.connect(function(err){
    if(err) throw err;
    console.log("Welcome to Jenn's Employee tracker")
    begin();    
})
function begin() {
    inquirer.prompt(firstQ).then(function(res) {
        console.log('started!')
    })
}
// inquirer 
//     .prompt([
//     {
//         type: 'input',
//         message: 'What department are you in?',
//         name: 'name',        
//     },
//     {
//         type: 'input',
//         message: 'What role do you have?',
//         name: 'title',        
//     },
//     {
//         type: 'input',
//         message: 'What is your salary?',
//         name: 'salary',        
//     },
//     {
//         type: 'input',
//         message: 'what is your first name?',
//         name: 'first_name'
//     },
//     {
//         type: 'input',
//         message: 'what is your last name?',
//         name: 'last_name',        
//     },
       
//     ]);