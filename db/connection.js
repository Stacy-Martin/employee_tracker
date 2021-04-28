const mysql = require('mysql');
// const inquirer = require('inquirer');
// const consoleTable = require('console.table');

const employees_db=process.env.employees_db
const password=process.env.password
const user = process.env.root

// create the connection information for the sql database
const connection = mysql.createConnection({
  host: 'localhost',
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: 'root',
  // Your password
  password: 'yourRootPassword',
  database: 'employees_db',
});



module.exports = connection;