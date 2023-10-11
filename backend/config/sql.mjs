import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config({ path: '../../.env' });

const database = {

    host: process.env.RDS_URL,
    database: process.env.RDS_DB_NAME,
    user: process.env.RDS_USER,
    password: process.env.RDS_PASSWORD,

};

//process.env.REACT_APP_DATABASE_URL;

const connection = mysql.createConnection(database);

console.log('process.env.DB_HOST: ', process.env.MYSQL_URL)
console.log('process.env.DB_USER: ', process.env.MYSQL_USER)
console.log('process.env.DB_PASSWORD: ', process.env.MYSQL_PASSWORD)
console.log('process.env.DB_DATABASE: ', process.env.MYSQL_DB_NAME)
export default connection.promise();

