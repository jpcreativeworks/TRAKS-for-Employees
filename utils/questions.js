module.exports = {
    firstQ: [{
        type: "list",
        message: "Please choose what you would like to do by using your arrow and enter keys:",
        name: "questionStart",
        choices: [
            "Add Employee",            
            "Update Employee by Role",
            "Add Department",
            "View All Employees by Manager",
            "View All Employees by Department",
            "Add Role",
            "View All Roles",
            "Update an Employee's Role",
            "Update an Employees Manager",
            "View All Departments",
            "Exit"

        ]
    }],
    addsEmployee: [{
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
        choices: [
            {
                name: "Graphic Designer/Manager",
                value: 1,

            },
            {
                name: "Graphic Designer/Associate",
                value: 2,
            },
            {
                name: "Graphic Designer/Intern",
                value: 3,
            },
            {
                name: "Front-End Dev/Manager",
                value: 4,
            },
            {
                name: "Front-End Dev/Associate",
                value: 5,
            },
            {
                name: "Back-End Dev/Manager",
                value: 6,
            },
            {
                name: "Back-End Dev/Associate",
                value: 7,
            },
            {
                name: "UX/UI Dev/Manager",
                value: 8,
            },
            {
                name: "UX/UI Dev/Associate",
                value: 9,
            }
        ]
    },

    {
        type: "list",
        message: "Enter New Employee's Manager by the Manager ID",
        name: "mgr_id",
        choices: [{
            name: "Bonnie, Bean",
            value: 2,
        },
        {
            name: "Kathy, Smith",
            value: 1,
        },
        {
            name: "Manager Status",
            value: null
        }
        ]
    }
    ],
    addsDepartment:
    {
        type: "input",
        message: "Please input the name of the Department being added",
        name: "name",

    },
    addsRole: [
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
            name: "dept_id"
        }
    ],
    updatesEmployee: [

        {
            type: "list",
            message: "Select Employee",
            name: "id",
            choices: [
                
                    {
                        name: "Kathy, Smith",
                        value: 1,
        
                    },
                    {
                        name: "Karen, Cray",
                        value: 2,
                    },
                    {
                        name: "Bonnie, Bean",
                        value: 3,
                    },
                    {
                        name: "Jim, Speghetti",
                        value: 4,
                    },
                    {
                        name: "Jani, Kapul",
                        value: 5,
                    },
                    {
                        name: "Laura, White",
                        value: 6,
                    },
                    {
                        name: "Melba, Brown",
                        value: 7,
                    },
                    {
                        name: "Loren, Rodriguez",
                        value: 8,
                    },
                ]
        },
    {
            type: "list",
            message: "Select Role to update",
            name: "role_id",
            choices: [
                {
                    name: "Graphic Designer/Manager",
                    value: 1,

                },
                {
                    name: "Graphic Designer/Associate",
                    value: 2,
                },
                {
                    name: "Graphic Designer/Intern",
                    value: 3,
                },
                {
                    name: "Front-End Dev/Manager",
                    value: 4,
                },
                {
                    name: "Front-End Dev/Associate",
                    value: 5,
                },
                {
                    name: "Back-End Dev/Manager",
                    value: 6,
                },
                {
                    name: "Back-End Dev/Associate",
                    value: 7,
                },
                {
                    name: "UX/UI Dev/Manager",
                    value: 8,
                },
                {
                    name: "UX/UI Dev/Associate",
                    value: 9,
                }
            ]

    }
    ]
}