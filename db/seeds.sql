INSERT INTO dept (name)
VALUE ("Graphic Designer"), ("Front-End Dev"), ("Back-End Dev"), ("UX/UI Dev");

INSERT INTO roles (role_title, role_salary, dept_id)
VALUES ('Manager', 32000, 1), ('Associate', 28000, 1), ('Associate', 28000, 1),
 ('Manager', 32000, 2), ('Associate', 28000, 2), ('Associate', 28000, 2),
 ('Manager', 32000, 3), ('Associate', 28000, 3), ('Associate', 28000, 3),
 ('Manager', 32000, 4), ('Associate', 28000, 4), ('Associate', 28000, 4);

INSERT INTO employee (employee_first, employee_last, role_id, mgr_id)
VALUES ('Kathy', 'Smith', 1, null), ('Jim', 'Speghetti', 4);
