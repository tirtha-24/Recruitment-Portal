const mysql = require('mysql');
const config = require('./configs');

const connection = mysql.createConnection(config.database.mysql);

connection.connect((err) => {
  if (err) {
    console.log(`Error : ${err}\n`);
  } else {
    console.log('\nDatabase connected!\n');
  }
});

module.exports = connection;
