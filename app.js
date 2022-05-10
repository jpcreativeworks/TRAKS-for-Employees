const fs = require('fs');
const mysql = require('mysql');
const inquirer = require('inquirer');
const ctable = require('console.table');
const connecting = require('./connection/connection');
const questions = require('./utils/questions');
const { createConnection } = require('net');
// const { start } = require('repl');

function logoHere() {
    console.log(
        logo({
            name: 'Welcome to TRAKS: An Employee Managment System',
            lineChars: 17,
            padding: 3,
            margin: 2,
            boarderColor: 'bold-green',
            logoColor: 'yellow',
            textColor: 'white',
        }).render());
}

logoHere()
begin();

async function begin() {
    const userPicks = await inquirer.prompt(questions.firstQ);
    switch (userPicks.questionStart) {
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
        case "Exit": connection.end();
            break;
        default:
            connection.end();
    }
}

async function addingEmployee() {
    let emp = "SELECT id as value, CONCAT(employee_first, ' ', employee_last) as name FROM employees" //employee?
    connection.query(emp, async (err, employees) => {
        emp = "SELECT id as value, title as name FROM roles"
    })
}



                         
          








     