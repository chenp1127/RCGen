import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config({ path: '../../.env' });

const database = {
    // host: process.env.RDS_URL,
    // database: process.env.RDS_DB_NAME,
    // user: process.env.RDS_USER,
    // password: process.env.RDS_PASSWORD,

    host: "127.0.0.1",
    database: 'rcgenuser',
    user: 'root',
    password: 'rcgen44',
};

const pool = mysql.createPool(database);

export default pool;
