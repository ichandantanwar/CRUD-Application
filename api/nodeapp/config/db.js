
var mysql = require('mysql');

// setup database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nimapapi'
});


try {
  connection.connect();
  console.log("DB Connected")
} catch (error) {
  console.log(error);
}

module.exports = function getMySQLResult(query) {
  return new Promise((res, rej) => {
    connection.query(query, function (error, results, fields) {
      if (error) rej(error);
      // console.log(results);
      res(results);
    });
  });
}