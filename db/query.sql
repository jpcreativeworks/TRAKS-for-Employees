

USE business_db
-- view all by manager
SELECT 
    CONCAT(e.employee_first,',', e.employee_last ) AS 'Employee Name',   
    r.role_title, r.role_salary,d.name,ee.employee_first AS "Manager First name",ee.employee_last AS "Manager Last name"
from employee e
left join roles r on r.id = e.role_id
left join dept d on d.id = r.dept_id
left join employee ee on e.mgr_id =ee.id;
--   view all by dept
  SELECT 
    CONCAT(e.employee_first,',', e.employee_last ) AS 'Employee Name',   
    d.id, d.name AS "Department"
from employee e
left join roles r on r.id = e.role_id
left join dept d on d.id = r.dept_id
left join employee ee on e.mgr_id =ee.id;
-- view all roles
    SELECT r.role_title AS "Employee Role"
from employee e
left join roles r on r.id = e.role_id
--view all depts
    SELECT * from dept;
-- adding an Employee
INSERT INTO employee(employee_first, employee_last, role_id, mgr_id) VALUES (); 
-- adding role
INSERT INTO roles(role_title, role_salary, dept_id) VALUES ();
-- adding dept
INSERT INTO dept SET ? ;
-- remove emp
DELETE from employee WHERE ?;
-- update empl
SELECT e.id, e.employee_first, e.employee_last, e.role_id, d.name AS employee, r.role_salary, e.id[1] AS manager
    FROM employee e
    JOIN roles r ON e.role_id = r.id
    JOIN department d ON d.id = r.dept_id
    JOIN employee m ON e.id = e.mgr_id