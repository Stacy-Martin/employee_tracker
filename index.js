const mysql = require('mysql');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
// const connection = require('./db/connection');


var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "yourRootPassword",
  database: "employees_db",
});
connection.connect();

const header = () => {
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('┏━━━┓━━━━━━━━┏┓━━━━━━━━━━━━━━━━━━━━━━┏━━━━┓━━━━━━━━━━━━┏┓━━━━━━━━━');
console.log('┃┏━━┛━━━━━━━━┃┃━━━━━━━━━━━━━━━━━━━━━━┃┏┓┏┓┃━━━━━━━━━━━━┃┃━━━━━━━━━');
console.log('┃┗━━┓┏┓┏┓┏━━┓┃┃━┏━━┓┏┓━┏┓┏━━┓┏━━┓━━━━┗┛┃┃┗┛┏━┓┏━━┓━┏━━┓┃┃┏┓┏━━┓┏━┓');
console.log('┃┏━━┛┃┗┛┃┃┏┓┃┃┃━┃┏┓┃┃┃━┃┃┃┏┓┃┃┏┓┃━━━━━━┃┃━━┃┏┛┗━┓┃━┃┏━┛┃┗┛┛┃┏┓┃┃┏┛');
console.log('┃┗━━┓┃┃┃┃┃┗┛┃┃┗┓┃┗┛┃┃┗━┛┃┃┃━┫┃┃━┫━━━━━┏┛┗┓━┃┃━┃┗┛┗┓┃┗━┓┃┏┓┓┃┃━┫┃┃━');
console.log('┗━━━┛┗┻┻┛┃┏━┛┗━┛┗━━┛┗━┓┏┛┗━━┛┗━━┛━━━━━┗━━┛━┗┛━┗━━━┛┗━━┛┗┛┗┛┗━━┛┗┛━');
console.log('━━━━━━━━━┃┃━━━━━━━━━┏━┛┃━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('━━━━━━━━━┗┛━━━━━━━━━┗━━┛━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
start();
}

// function which prompts the user for what action they should take
const start = () => {
    inquirer
      .prompt({
        name: 'startQuestion',
        type: 'list',
        message: 'Would you like to do?',
        choices: ['View employees, departments or managers', 'Add employee', 'Remove employee', 'Update employee role or manager', 'Exit employee database'],
        // console.log('Move up and down to reveal more choices')
      })
      .then((answer) => {
        // based on their answer, call according function
        if (answer.startQuestion === 'View employees, departments or managers') {
          viewFunction ();
        } else if (answer.startQuestion === 'Add employee') {
          addEmpFunction ();
        } else if (answer.startQuestion === 'Remove employee') {
          removeEmpFunction();
        } else if (answer.startQuestion === 'Update employee role or manager') {
          updateFunction();
        } else if (answer.startQuestion === 'Exit employee database')
          console.log('Have a nice day!'),
          connection.end
      });
  };


// **********VIEW FUNCTION*******************************************************************

const viewFunction = async () => {
  await inquirer
    .prompt ({
      name: 'viewWhat',
      type: 'list',
      message: 'What would you like to view?',
      choices: ['View employees', 'View departments', 'View managers', 'Return to main menu'],
    })
    .then (async (answer) => {
      if (answer.viewWhat === 'View employees') {
        await viewEmployees ();
      } else if (answer.viewWhat === 'View departments') {
        await viewDpts ();
      } else if (answer.viewWhat === 'View managers') {
        await viewMgrs ();
      } else (answer.viewWhat === 'Return to main menu')
        await start ();
    })
}

const viewEmployees = () => 
new Promise ((resolve, reject) => {
      const query = 
        `SELECT 
        employee.id, employee.first_name, employee.last_name AS employee FROM employee` 
        // role.title, role.salary,department.name AS department, 
        // CONCAT (manager.first_name, ' ', manager.last_name) AS manager FROM employee 
        // LEFT JOIN role ON employee.role_id = role.id 
        // LEFT JOIN department ON department_id = department.id 
        // LEFT JOIN employee manager on employee.manager_id = manager.id` 
        connection.query(query, (err, res) => {
          if (err) throw err;
          console.log(`This is the employees list`);
          const employees = console.table(res);
          resolve (employees);        
        })
      });


const viewDpts = () => 
new Promise ((resolve, reject) => {
      const query = 
        `SELECT employee.id, CONCAT(first_name,' ',last_name) AS name , role.title as title, department.name as department
        FROM employees_DB.employee
        left join role on role_id = role.id
        left join department on role_id=department.id ` 
        connection.query(query, (err, res) => {
          if (err) throw err;
          console.log(`This is the employees list`);
          const employees = console.table(res);
          resolve (employees);        
        })
      });

const viewMgrs = () => 
new Promise ((resolve, reject) => {
      const query = 
        `SELECT 
        employee.id, employee.first_name, employee.last_name AS employee, 
        role.title, role.salary,department.name AS department, 
        CONCAT (manager.first_name, ' ', manager.last_name) AS manager FROM employee 
        LEFT JOIN role ON employee.role_id = role.id 
        LEFT JOIN department ON department_id = department.id 
        LEFT JOIN employee manager on employee.manager_id = manager.id` 
        connection.query(query, (err, res) => {
          if (err) throw err;
          console.log(`This is the employees list`);
          const employees = console.table(res);
          resolve (employees);        
        })
      });

  header();

