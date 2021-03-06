/**
 * @author Dominic
 * @email dominicseduraja3@gmail.com
 * @create date 2021-01-11 
 * @modify date 2021-01-23 
 * @desc [description]
 */

 var mysql = require('mysql2');
require('dotenv').config();

 /**
  * Dot env configuration
  */
 
 let database = mysql.createPool({
     user: process.env.DB_USER,
     password: process.env.DB_PASS,
     database: process.env.DB_NAME,
     host: process.env.DB_HOST,
     port: 3306,
     multipleStatements: true,
     dateStrings: true
 })
 
 
 
 module.exports = database
 
 module.exports.transactions = {
     async beginTransaction() {
         await database.promise().query('START TRANSACTION; SET AUTOCOMMIT = 0');
 
     },
 
     async commit() {
         await database.promise().query('COMMIT; SET AUTOCOMMIT = 1');
     },
 
     async rollback() {
         await database.promise().query('ROLLBACK; SET AUTOCOMMIT = 1');
 
     }
 
 }
 