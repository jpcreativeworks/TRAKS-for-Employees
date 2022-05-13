INSERT INTO dept (name)
VALUE ('Graphic Design/Manager'),
('Graphic Design/Associate'),
('Graphic Designer/Intern'), 
('Front-End Dev/Manager'), 
('Front-End Dev/Associate'), 
('Back-End Dev/Manager'), 
('Back-End Dev/Associate'), 
('UX/UI Dev/Manager'), 
('UX/UI Dev/Associate');

INSERT INTO roles (role_title, role_salary, dept_id)
VALUES ('Manager', 32000, 1), ('Associate', 28000, 2),
 ('Intern', 5000, 3),
 ('Manager', 32000, 4), ('Associate', 28000, 5),
 ('Manager', 32000, 6), ('Associate', 28000, 7),
 ('Manager', 32000, 8), ('Associate', 28000, 9);

INSERT INTO employee (employee_first, employee_last, role_id, mgr_id)
VALUES ('Kathy', 'Smith', 1, NULL), 
('Karen', 'Cray', 2, 1),
('Bonni', 'Beans', 3, NULL),
('Jim', 'Speghetti', 4, 1),
('Jani', 'Kapul', 5, NULL),
('Laura', 'White', 6, 1),
('Melba', 'Brown', 7, NULL),
('Loren', 'Rodriguez', 8, 1)