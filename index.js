// const mysql = require('mysql');
const inquirer = require('inquirer');
// const consoleTable = require('console.table');
const connection = require('./db/connection');


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
        choices: ['View employees, departments or managers', 'Add employee', 'Remove employee', 'Update employee role or manager', 'Exit employee database']
        // ?? WHERE DOES THIS CONSOLE LOG MESSAGE GO ??
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
        } else (answer.startQuestion === 'Exit employee database')
          console.log('Have a nice day!')
          connection.end();
      });
  };
 
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
        connection.query(`
        SELECT CONCAT (employee.first_name, " ", employee.last_name) AS employee, 
        role.title, role.salary,department.name AS department, 
        CONCAT (manager.first_name, " ", manager.last_name) AS manager FROM employee 
        LEFT JOIN role ON employee.role_id = role.id 
        LEFT JOIN department ON department_id = department.id 
        LEFT JOIN employee manager on employee.manager_id = manager.id`, 
        
        (err, res) => {
        if (err) reject (new Error("Error, please restart program", err));  
        console.log(`This is the employees list`);
        
        const employees = console.table(res);
        
        resolve (employees);       
    })
});


  // connect to the mysql server and sql database
connection.connect((err) => {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  header();
});
