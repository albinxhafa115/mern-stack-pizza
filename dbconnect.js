const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: '115_pizza'
});

connection.connect((error) => {
    if (error) {
        console.error('Error connecting to MySQL: ', error);
    } else {
        console.log('Connected to MySQL successfully!');
    }
});

module.exports = connection;
