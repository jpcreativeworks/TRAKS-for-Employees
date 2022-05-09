INSERT INTO department (name)
VALUES ('Sales'), ('Adversitment'), ('Operations'), ('Human Resources'), ('Accounting');

INSERT INTO `role` (title, salary, department_id)
VALUES ('Manger', 32000, 2), ('Employee', 28000, 1), ('Intern', 5000, 5), ('Manager', 38000, 4), ('Employee', 30000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Kathy', 'Smith', 1, null), ('Jim', 'Speghetti', )
