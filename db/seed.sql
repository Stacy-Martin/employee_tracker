USE employees_db;

INSERT INTO department(name) VALUES ("IT"), ("Accounting"), ("The Boss"), ("Research"), ("Development");

INSERT INTO role (title, salary, department_id) VALUES ("IT guy", 50000, 1), ("HR Associate", 45000, 2), ("Janitor", 95000, 3), ("Chief Engineer", 180000, 4), ("Ecologist", 110000, 5), ("Sales Rep", 62000, 6), ("Botanist", 75000, 7), ("Safety Inspector", 97000, 8), ("Skydiving Teacher", 32000, 9), ("NSFT Enforcer", 78000, 10);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Tessa", "Martin", 1, 1), ("Ashton", "Martin", 2, 2), ("Nova", "Martin", 3, 3), ("Patches", "Martin", 4, 4), ("Abalone", "Martin", 5, 5), ("Pepper", "Martin", 6, 6), ("Chauncy", "Martin", 7, 7), ("Wolfy", "Martin", 8, 8), ("Gma", "Stinger", 9, 9), ("Lisa", "Cook", 10, 10);