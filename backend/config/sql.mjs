import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const database = {
    // host: "127.0.0.1",
    // database: 'rcgenuser',
    // user: 'root',
    // password: 'rcgen44',

    host: 'rcgenuser.cm2acwggi1zp.ap-southeast-1.rds.amazonaws.com',
    database: 'rcgenuser',
    user: 'root',
    password: 'rcgengrp44',
};

//process.env.REACT_APP_DATABASE_URL;

const connection = mysql.createConnection(database);


export default connection.promise();

