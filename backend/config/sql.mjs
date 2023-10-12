import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config({ path: '../../.env' });

const database = {
    host: process.env.RDS_URL,
    database: process.env.RDS_DB_NAME,
    user: process.env.RDS_USER,
    password: process.env.RDS_PASSWORD,
};

const pool = mysql.createPool(database);

export default pool;
