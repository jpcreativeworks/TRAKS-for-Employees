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
        switch (res.questionStart) {
            case "Add Employee": addingEmployee();
                break;
            case "Remove Employee": removingEmployee();
                break;
            case "Update Employee": updateEmployee(); //needs async function
                break;
            case "Add Department": addingDepartment();
                break;
            case "View All Employees by Manager": viewallEbyMgmt(); //needs async func
                break;
            case "View All Employees by Department": viewallEbyDept(); //needs asyn func
                break;
            case "Add Role": addingRole();
                break;
            case "Remove Role": removingRole();
                break;
            case "View All Roles": showAllRoles(); //needs async func
                break;
            case "Update an Employee's Role": updateEmployeeRole(); // needs async func
                break;
            case "Update an Employees Manager": updateEmployeeMngr(); // meeds async func
                break;
            case "View All Departments": viewAllDepts(); //needs async func
                break;
            default:
                db.end();
            process.exit(0)
        }
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