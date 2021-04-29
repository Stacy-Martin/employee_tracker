var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "yourRootPassword",
  database: "employees",
});
connection.connect();

const start = async () => {
  await inquirer
    .prompt({
      name: "startQuestion",
      type: "list",
      message: "Would you like to do?",
      choices: [
        "View employees, departments or managers",
        "Add employee",
        "Remove employee",
        "Update employee role or manager",
        "Exit employee database",
      ],
      // console.log('Move up and down to reveal more choices')
    })
    .then((answer) => {
      if (answer.startQuestion === "View employees, departments or managers") {
        viewFunction();
      } else if (answer.startQuestion === "Add employee") {
        addEmpFunction();
      } else if (answer.startQuestion === "Remove employee") {
        removeEmpFunction();
      } else if (answer.startQuestion === "Update employee role or manager") {
        updateFunction();
      } else answer.startQuestion === "Exit employee database";
      console.log("Have a nice day!");
      

      
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
          connection.end();
        } else if (answer.viewWhat === 'View departments') {
          await viewDpts ();
        } else if (answer.viewWhat === 'View managers') {
          await viewMgrs ();
        } else (answer.viewWhat === 'Return to main menu')
          await start ();
      })

      
  }

  const viewEmployees = () => {

    return new Promise((resolve, reject)=>{
        connection.query("SELECT * FROM employee", (err, res, fields) => {
            if (err) console.log("ERROR!!!!", err);
            console.log("We got data ", res);
            // connection.end();
            resolve(res)
        
          });
    
        
    
    })

    connection.query("SELECT * FROM employee", (err, res, fields) => {
        if (err) console.log("ERROR!!!!", err);
        console.log("We got data ", res);
      });

      connection.end();
return new Promise ((resolve, reject) => {
      // const query = 
      //   `SELECT 
      //   employee.id, employee.first_name, employee.last_name AS employee, 
      //   role.title, role.salary,department.name AS department, 
      //   CONCAT (manager.first_name, ' ', manager.last_name) AS manager FROM employee 
      //   LEFT JOIN role ON employee.role_id = role.id 
      //   LEFT JOIN department ON department_id = department.id 
      //   LEFT JOIN employee manager on employee.manager_id = manager.id` 
      const query = 'SELECT * FROM employee'
        connection.query(query, (err, res) => {
          if (err) reject(err);
          console.log(`This is the employees list`);
          console.table(res);
          resolve (res);        
        })
      });
    }



start();
