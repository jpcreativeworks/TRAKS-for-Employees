DROP DATABASE IF EXISTS business_db;
CREATE DATABASE business_db;

USE business_db;

CREATE TABLE dept (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE `role` (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  role_title VARCHAR(30) NOT NULL,
  role_salary INT,
  dept_id INT,
  FOREIGN KEY (dept_id)
  REFERENCES dept(id)
  ON DELETE SET NULL
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  employee_first VARCHAR(30) NOT NULL,
  employee_last VARCHAR(30) NOT NULL,
  role_id INT,
  mgr_id INT,
  FOREIGN KEY (role_id)
  REFERENCES `role`(id)
  ON DELETE SET NULL,
  FOREIGN KEY (mgr_id)
  REFERENCES employee(id)
);

