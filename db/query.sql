

USE business_db

SELECT 
    CONCAT(e.employee_first,',', e.employee_last ) AS 'Employee Name',   
    r.role_title, r.role_salary,d.name,ee.employee_first AS "Manager First name",ee.employee_last AS "Manager LAst name"
from employee e
left join roles r on r.id = e.role_id
left join dept d on d.id = r.dept_id
left join employee ee on e.mgr_id =ee.id;
  