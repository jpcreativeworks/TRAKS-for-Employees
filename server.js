let inquirer = require('inquirer');
require("console.table")
const mysql = require('mysql2');
const logo = require('asciiart-logo');
const { firstQ, addsEmployee, addsRole, addsDepartment, updatesEmployee } = require('./utils/questions')
//TRAKS LOGO
function logoHere() {
    console.log(
        logo({
            name: 'Welcome to TRAKS: The Employee Managment System',
            lineChars: 17,
            padding: 3,
            margin: 2,
            boarderColor: 'green',
            logoColor: 'yellow',
            textColor: 'white',
        }).render());
}

logoHere();
//CONNECTION - SEE COMMENT
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      //have to insert password
      password: '<password>',
      database: 'business_db'
    },
    console.log(`Connected to the business_db database.`)
  );
db.connect(function(err){
    if(err) throw err;
    console.log("Please use your arrow keys to enter a request:")
    begin();    
})
function begin() {
    inquirer.prompt(firstQ).then(function(res) {
        switch (res.questionStart) { 
            case "Add Employee": addingEmployee(); 
                break;
            case "Update Employee by Role": updateEmployee(); 
                break;
            case "Add Department": addingDepartment(); 
                break;
            case "View All Employees by Manager": viewAllbyMgmt(); 
                break;
            case "View All Employees by Department": viewAllbyDept(); 
                break;
            case "Add Role": addingRole();  
                break;
            case "View All Roles": viewAllRoles(); 
                break;
            case "View All Departments": viewAllDepts(); 
                break;
            default:
                db.end();
            process.exit(0)
        }
    })
}
//VIEW ALL EMPLOYEES BY MANAGER
function viewAllbyMgmt() {
    console.log('viewAllByMgmt')
    db.query('SELECT CONCAT(e.employee_first,",", e.employee_last ) AS "Employee Name", r.role_title, r.role_salary,d.name,ee.employee_first AS "Manager First name",ee.employee_last AS "Manager Last name" from employee e left join roles r on r.id = e.role_id left join dept d on d.id = r.dept_id left join employee ee on e.mgr_id =ee.id;',
    function(err,data){
        if(err) throw err;
        console.table(data);
        begin()
    })
}
//VIEW ALL EMPLOYEES BY DEPARTMENT
function viewAllbyDept() {
    db.query('SELECT CONCAT(e.employee_first,",", e.employee_last ) AS "Employee Name", d.id, d.name AS "Department" from employee e left join roles r on r.id = e.role_id left join dept d on d.id = r.dept_id left join employee ee on e.mgr_id =ee.id;',
    function(err,data){
        if (err) throw err;
        console.table(data);
        begin()
    })
}
//VIEW ROLES
function viewAllRoles() {
    db.query('SELECT r.role_title AS "Employee Role" from employee e left join roles r on r.id = e.role_id left join dept d on d.id = r.dept_id;',
    function(err,data){
        if (err) throw err;
        console.table(data);
        begin()
    })
}
//VIEW DEPARTMENTS
function viewAllDepts () {
    db.query('SELECT * from dept;',
    function(err,data) {
        if (err) throw err;
        console.table(data);
        begin()
    })
}
//ADDING EMPLOYEE
function addingEmployee (res) { 
    console.log('Lets add a New Employee', res);
    inquirer.prompt(addsEmployee).then(function(res) {
        console.log(res);
        const newEmployee = res;
        let roles = {Manager: null, Associate: 1, Intern: 2};
        db.query(`INSERT INTO employee SET ?`, {
            employee_first: res.employee_first,
            employee_last: res.employee_last,
            role_id: res.role_id,
            mgr_id: res.mrg_id
        },
        function(err,data) {
            if (err) throw err;
            console.table(data);
            begin();
        })
    });
    
}
// ADDING ROLE
function addingRole (res) {
    inquirer.prompt(addsRole).then(function(res) {
        console.log(res);
        const newRole = res
        db.query(`INSERT INTO roles(role_title, role_salary, dept_id) VALUES ('${newRole.role_title}', ${newRole.role_salary}, ${newRole.dept_id})`),
            begin();
    });
}
// ADDING DEPT 
function addingDepartment (res) {
    inquirer.prompt(addsDepartment).then(function(res) {
        console.log(res);
        const newDept = res
        db.query(`INSERT INTO dept(name) VALUE ('${newDept.name}')`);
            begin();
    });
}
//UPDATE EMPLOYEE
function updateEmployee (res) {
    console.log('in updateEmployee');
    inquirer.prompt(updatesEmployee).then(function(res) {
        console.log("res", res);
        db.query(`update employee set role_id=${res.role_id}, mgr_id=NULL where id=${res.id};`,
        function(err,data){
            console.table(res);
            console.log("data", data);        
            begin();
        });
       
    })
}

