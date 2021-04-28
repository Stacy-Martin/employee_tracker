const mysql = require('mysql');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const connection = require('./db/connection');

// function which prompts the user for what action they should take
const start = () => {
    inquirer
      .prompt({
        name: 'startQuestion',
        type: 'list',
        message: 'Would you like to do?',
        choices: ['View all employees', 'View all employees by department', 'View all employees by manager', 'Add employee', 'Remove employee', 'Update employee role', 'Update employee manager']
        // ?? WHERE DOES THIS CONSOLE LOG MESSAGE GO ??
        // console.log('Move up and down to reveal more choices')
      })
      .then((answer) => {
        // based on their answer, call according function
        if (answer.startQuestion === 'View all employees') {
          viewEmp ();
        } else if (answer.startQuestion === 'View all employees by department') {
          viewEmpDpt();
        } else if (answer.startQuestion === 'View all employees by manager') {
          viewEmpMgr();
        } else if (answer.startQuestion === 'Add employee') {
          addEmp();
        } else if (answer.startQuestion === 'Remove employee') {
          removeEmp();
        } else if (answer.startQuestion === 'Update employee role') {
          updateEmpRole();
        } else if (answer.startQuestion === 'Update employee manager') {
          updateEmpMgr();
        } else {
          connection.end();
        }
      });
  };
  
  const viewEmp = () => {
    // query the database for all employees
    connection.query('SELECT * FROM employee', (err, results) => {
      if (err) throw err;
      // once you show the employee list, prompt the user for which they'd like to view
      inquirer
        .prompt([
          {
            name: 'choice',
            type: 'rawlist',
            choices() {
              const employeeArray = [];
      // TO DO COMPLETE ALL 7 OF THESE SECTIONS ON RESULTS AND PUSH
              results.forEach(({ item_name }) => {
                employeeArray.push(item_name);
              });
              return employeeArray;
            },
            message: 'What employee would you like to view?',
          },
        ])
        .then((answer) => {
          // get the information of the chosen item
          // TO DO COMPLETE ALL 7 OF THESE VARIABLES
          // SHOULD I CREATE A CHOSEN EMPLOYEE VARIABLE ON THE OUTSIDE??
          let chosenEmployee;
          results.forEach((item) => {
            if (item.item_name === answer.choice) {
              chosenEmployee = item;
            }
          });
        });
    });
  };
  
  const viewEmpDpt = () => {
    // query the database for all employees
    connection.query('SELECT * FROM employee', (err, results) => {
      if (err) throw err;
      // once you show the employee list, prompt the user for which they'd like to view
      inquirer
        .prompt([
          {
            name: 'choice',
            type: 'rawlist',
            choices() {
              const employeeArray = [];
      // TO DO COMPLETE THIS SECTION ON RESULTS AND PUSH
              results.forEach(({ item_name }) => {
                employeeArray.push(item_name);
              });
              return employeeArray;
            },
            message: 'Which departments employees would you like to view?',
          },
        ])
        .then((answer) => {
          // get the information of the chosen item
          // TO DO COMPLETE THIS VARIABLE
          let chosenEmployee;
          results.forEach((item) => {
            if (item.item_name === answer.choice) {
              chosenEmployee = item;
            }
          });
        });
    });
  };
  
  const viewEmpMgr = () => {
    // query the database for all employees
    connection.query('SELECT * FROM employee', (err, results) => {
      if (err) throw err;
      // once you show the employee list, prompt the user for which they'd like to view
      inquirer
        .prompt([
          {
            name: 'choice',
            type: 'rawlist',
            choices() {
              const employeeArray = [];
      // TO DO COMPLETE THIS SECTION ON RESULTS AND PUSH
              results.forEach(({ item_name }) => {
                employeeArray.push(item_name);
              });
              return employeeArray;
            },
            message: 'What managers employees would you like to view?',
          },
        ])
        .then((answer) => {
          // get the information of the chosen item
          // TO DO COMPLETE THIS VARIABLE
          let chosenEmployee;
          results.forEach((item) => {
            if (item.item_name === answer.choice) {
              chosenEmployee = item;
            }
          });
        });
    });
  };
  
  const addEmp = () => {
    // query the database for all employees
    connection.query('SELECT * FROM employee', (err, results) => {
      if (err) throw err;
      // once you show the employee list, prompt the user for which they'd like to view
      inquirer
        .prompt([
          {
            name: 'choice',
            type: 'rawlist',
            choices() {
              const employeeArray = [];
      // TO DO COMPLETE THIS SECTION ON RESULTS AND PUSH
              results.forEach(({ item_name }) => {
                employeeArray.push(item_name);
              });
              return employeeArray;
            },
            message: 'What employee would you like to view?',
          },
        ])
        .then((answer) => {
          // get the information of the chosen item
          // TO DO COMPLETE THIS VARIABLE
          let chosenEmployee;
          results.forEach((item) => {
            if (item.item_name === answer.choice) {
              chosenEmployee = item;
            }
          });
        });
    });
  };
  
  const removeEmp = () => {
    // query the database for all employees
    connection.query('SELECT * FROM employee', (err, results) => {
      if (err) throw err;
      // once you show the employee list, prompt the user for which they'd like to view
      inquirer
        .prompt([
          {
            name: 'choice',
            type: 'rawlist',
            choices() {
              const employeeArray = [];
      // TO DO COMPLETE THIS SECTION ON RESULTS AND PUSH
              results.forEach(({ item_name }) => {
                employeeArray.push(item_name);
              });
              return employeeArray;
            },
            message: 'Which employee would you like to remove?',
          },
        ])
        .then((answer) => {
          // get the information of the chosen item
          // TO DO COMPLETE THIS VARIABLE
          let chosenEmployee;
          results.forEach((item) => {
            if (item.item_name === answer.choice) {
              chosenEmployee = item;
            }
          });
        });
    });
  };
  
  const updateEmpRole = () => {
    // query the database for all employees
    connection.query('SELECT * FROM employee', (err, results) => {
      if (err) throw err;
      // once you show the employee list, prompt the user for which they'd like to view
      inquirer
        .prompt([
          {
            name: 'employee',
            type: 'list',
            message: 'What employee would you like to update?', 
            choices: employeeArray
          },
          {
            name: 'role',
            type: 'list',
            message: 'What is their new role?', 
            choices: roleArray
        }
        ]).then((answer) => {
          // connection.query XXXXXX
          if (err) throw err;    
        })
    }).catch((err) => console.error('Interface Error', err))
  }
  
  const updateEmpMgr = () => {
    // query the database for all employees
    connection.query('SELECT * FROM employee', (err, results) => {
      if (err) throw err;
      // once you show the employee list, prompt the user for which they'd like to view
      inquirer
        .prompt([
          {
            name: 'employee',
            type: 'list',
            message: 'Which manager would you like to update?', 
            choices: employeeArray
          },
          {
            name: 'role',
            type: 'list',
            message: 'What is their new role?', 
            // ??  WHAT ARE WE UPDATING ??
            choices: roleArray
        }
              const employeeArray = [];
      // TO DO COMPLETE THIS SECTION ON RESULTS AND PUSH
              results.forEach(({ item_name }) => {
                employeeArray.push(item_name);
              });
              return employeeArray;
            },
            message: 'What employees manager would you like to update?',
          },
        ])
        .then((answer) => {
          // get the information of the chosen item
          // TO DO COMPLETE THIS VARIABLE
          // let chosenEmployee;
          // results.forEach((item) => {
          //   if (item.item_name === answer.choice) {
          //     chosenEmployee = item;
            }
          });
        });
    });
  };

  // connect to the mysql server and sql database
connection.connect((err) => {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});
