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

export default connection.promise();

