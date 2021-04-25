USE employees_db;

INSERT INTO department(name) VALUES ("IT"), ("Accounting"), ("The Boss"), ("Research"), ("Development");

INSERT INTO role (title, salary, department_id) VALUES ("IT guy", 50000, 1), ("HR Associate", 45000, 2), ("Janitor", 95000, 3), ("Chief Engineer", 180000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Tessa", "Martin", 1, 1), ("Ashton", "Martin", 2, 2), ("Nova", "Martin", 3, 3);