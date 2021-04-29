USE employees_db;

INSERT INTO department(name) 
VALUES ("IT"), ("Accounting"), ("The Boss"), ("Research"), ("Development");

INSERT INTO role (title, salary, department_id) 
VALUES ("CEO", 50000, 1), 
("HR Associate", 45000, 2), 
("Janitor", 95000, 3), 
("Chief Engineer", 180000, 1), 
("Ecologist", 110000, 2),
 ("Sales Rep", 62000, 3),
 ("Botanist", 75000, 1), 
 ("Safety Inspector", 97000, 2), 
 ("Skydiving Teacher", 32000, 3),
 ("NSFT Enforcer", 78000, 4);

INSERT INTO employee (first_name, last_name, role_id) 
VALUES ("Tessa", "Martin", 11), 
("Ashton", "Martin", 12),
 ("Nova", "Martin", 13), 
 ("Patches", "Martin", 14), 
 ("Abalone", "Martin", 13), 
 ("Pepper", "Martin", 11), 
 ("Chauncy", "Martin", 12), 
 ("Wolfy", "Martin",13), 
 ("Gma", "Stinger", 14),
 ("Lisa", "Cook", 11);
 