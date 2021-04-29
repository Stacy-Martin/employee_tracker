const mysql = require('mysql');
// const inquirer = require('inquirer');
// const consoleTable = require('console.table');

const employees_db=process.env.employees_db
const password=process.env.password
const user = process.env.root

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "yourRootPassword",
  database: "employees",
});

module.exports = connection;