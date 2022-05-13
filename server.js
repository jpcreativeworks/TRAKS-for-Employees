let inquirer = require('inquirer');
require("console.table")
const mysql = require('mysql2');
const { firstQ, addsEmployee, addsRole, addsDepartment, updatesEmployee } = require('./utils/questions')
//required ports and method to call express

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
            case "Add Employee": addingEmployee(); //completed
                break;
            // case "Remove Employee": removingEmployee(); //completed
            //     break;
            case "Update Employee by Role": updateEmployee(); //needs async function
                break;
            case "Add Department": addingDepartment(); //complete debug
                break;
            case "View All Employees by Manager": viewAllbyMgmt(); //needs async func completed
                break;
            case "View All Employees by Department": viewAllbyDept(); //needs asyn func completed
                break;
            case "Add Role": addingRole(); //completed debug
                break;
            // case "Remove Role": removingRole();
            //     break;
            case "View All Roles": showAllRoles(); //needs async func completed
                break;
            case "Update an Employee's Role": updateEmployeeRole(); // needs async func
                break;
            case "Update an Employees Manager": updateEmployeeMngr(); // meeds async func
                break;
            case "View All Departments": viewAllDepts(); //needs async func completed
                break;
            default:
                db.end();
            process.exit(0)
        }
    })
}

function viewAllbyMgmt() {
    console.log('viewAllByMgmt')
    db.query('SELECT CONCAT(e.employee_first,",", e.employee_last ) AS "Employee Name", r.role_title, r.role_salary,d.name,ee.employee_first AS "Manager First name",ee.employee_last AS "Manager Last name" from employee e left join roles r on r.id = e.role_id left join dept d on d.id = r.dept_id left join employee ee on e.mgr_id =ee.id;',
    function(err,data){
        if(err) throw err;
        console.table(data);
        begin()
    })
}

function viewAllbyDept() {
    db.query('SELECT CONCAT(e.employee_first,",", e.employee_last ) AS "Employee Name", d.id, d.name AS "Department" from employee e left join roles r on r.id = e.role_id left join dept d on d.id = r.dept_id left join employee ee on e.mgr_id =ee.id;',
    function(err,data){
        if (err) throw err;
        console.table(data);
        begin()
    })
}

function showAllRoles() {
    db.query('SELECT r.role_title AS "Employee Role" from employee e left join roles r on r.id = e.role_id left join dept d on d.id = r.dept_id;',
    function(err,data){
        if (err) throw err;
        console.table(data);
        begin()
    })
}

function viewAllDepts () {
    db.query('SELECT * from dept;',
    function(err,data) {
        if (err) throw err;
        console.table(data);
        begin()
    })
}

function addingEmployee (res) {
    console.log('find the response?', res);
    inquirer.prompt(addsEmployee).then(function(res) {
        console.log(res);
        let roles = {Manager: null, Associate: 1};
        db.query('INSERT INTO employee(employee_first, employee_last, role_id, mgr_id) VALUES ("' + res.employee_first + '","' + res.employee_last + '","' + res.role_title + '","' + parseInt(res.mgr_id) + '")',
        function(err,data) {
            if (err) throw err;
            console.table(data);
            begin();
        })
    });
    // addingEmployee
    // db.query('INSERT INTO employee(employee_first, employee_last, role_id, mgr_id) VALUES ()')
    
}
//debug
// function addingRole (res) {
//     inquirer.prompt(addsRole).then(function(res) {
//         console.log(res);
//         let dept = {'Graphic Design': 1, 'Front-End Dev': 2, 'Back-End Dev': 3, 'UX/UI Dev': 4};
//         db.query('INSERT INTO roles(role_title, role_salary, dept_id) VALUES ("' + res.role_title + '","' + res.role_salary + '","' + parseInt(res.dept_id) + '")',
//         function(err,data) {
//             if (err) throw err;
//             console.table(data);
//             begin();
//         })
//     });
// }
// ADDING DEPT 
function addingDepartment (res) {
    inquirer.prompt(addsDepartment).then(function(res) {
        console.log(res);
        const newDept = res
        // let dept = {'Graphic Design': 1, 'Front-End Dev': 2, 'Back-End Dev': 3, 'UX/UI Dev': 4};
        db.query(`INSERT INTO dept(name) VALUE ('${newDept.name}')`);
        // function(err,data) {
        //     if (err) throw err;
            // console.table(data);
            begin();
        // }
    });
}
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

//BONUS
// function removingEmployee(){
//     console.log("Employee Removed");
//     inquirer.prompt(removesEmployee).then(function(res) {
//         console.log(res)
//         let deleteUserChoiceEmployee = res.map(({id, employee_first, employee_last}) =>
//         ({value: id, name: `${id} ${employee_first} ${employee_last}`}));
//         db.query(DELETE FROM employee WHERE ());
//         console.table(res);
//         deletePromots(deleteUserChoiceEmployee);

//     });

// }



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