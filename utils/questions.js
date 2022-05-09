modeule.exports = {
    firstQ: {
        type: "list",
        message: "Please choose what you would like to do by using your arrow and enter keys:",
        name: "questionStart",
        choices: [
            "Add Employee",
            "Remove Employee",
            "Update Employee",                         
            "Add Department",            
            "View All Employees by Manager",
            "View All Employees by Department",
            "Add Role",
            "Remove Role",
            "View All Roles",
            "Update an Employee's Role",
            "Update an Employees Manager",
            "View All Departments",
            "Exit"       
                    
        ]
    },
    addingEmployee: (roleTypes, employees) => [{
        type: "input",
        message: "Employee's first name?",
        name: "employee_first"
    },
    {
        type: "input",
        message: "Employee's last name?",
        name: "employee_last"
    },
    {
        type: "list",
        message: "Please submit valid role ID",
        name: "role_id",
        choices: roleTypes
    },
    {
        type: "list",
        message: "Choose the Employee's Manager",
        name: "mgr_id",
        choices: employees
    }
],
addingDepartment: 
    {
        type: "input",
        message: "Please input the name of the Department being added",
        name: "dept_name"
    },
addingRole: [
    {
        type: "input",
        message: "Please provide the Title of the Role being added",
        name: "role_title"
    },
    {
        type: "input",
        message: "How much is the Salary for this Role?",
        name: "role_salary"
    },
    {
        type: "input",
        message: "Please provide the Department ID for this Role",
        name: "role_dept_id"
    }
],
removingRole: {
    type: "list",
    message: "Which role would you like to remove?",
    name: "remove_role",
    choices: ["Graphic Designer", "Front-End Dev", "Back-End Dev", "UX/UI Dev", "Manager", "Associate"]
},
removingEmployee: {
    type: "list",
    message: "What was your Employee's role you are wanting to remove?",
    name: "remove_employee",
    choices: ["Graphic Designer", "Front-End Dev", "Back-End Dev", "UX/UI Dev", "Manager", "Associate"]
},
toExit: {
    type: "list",
    message: "Please confirm you are a exiting TRAKS for Employees"
}
}