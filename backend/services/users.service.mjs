import pool from '../config/sql.mjs';

// export const getUsers = async () => {
//     const query = 'SELECT * FROM users';
//     const connection = await pool.getConnection(); // Get a connection from the pool

//     try {
//         const [rows] = await connection.execute(query);
//         return rows;
//     } catch (error) {
//         throw error;
//     } finally {
//         connection.release(); // Release the connection back to the pool when done
//     }
// }

export const getUsers = async () => {
    const query = 'SELECT * FROM users';
    const connection = await pool.getConnection();

    try {
        const [rows] = await connection.execute(query);
        return rows; // Return the array of users
    } catch (error) {
        throw error;
    } finally {
        connection.release();
    }
}

export const getUser = async (id) => {
    const query = 'SELECT * FROM users WHERE id = ?';
    const connection = await pool.getConnection();

    try {
        const [rows] = await connection.execute(query, [id]);
        return rows;
    } catch (error) {
        throw error;
    } finally {
        connection.release();
    }
}

export const createUser = async (user) => {
    const { id, email, password, fullname, address, number } = user;
    let query;
    let params;

    if (address === undefined) {
        query = 'INSERT INTO users (id, email, password, fullname, number) VALUES(?, ?, ?, ?, ?)';
        params = [id, email, password, fullname, number];
    } else if (number === undefined) {
        query = 'INSERT INTO users (id, email, password, fullname, address) VALUES(?, ?, ?, ?, ?)';
        params = [id, email, password, fullname, address];
    } else if (address === undefined && number === undefined) {
        query = 'INSERT INTO users (id, email, password, fullname) VALUES(?, ?, ?, ?)';
        params = [id, email, password, fullname];
    } else {
        query = 'INSERT INTO users (id, email, password, fullname, address, number) VALUES(?, ?, ?, ?, ?, ?)';
        params = [id, email, password, fullname, address, number];
    }

    const connection = await pool.getConnection();

    try {
        const result = await connection.execute(query, params);
        return result;
    } catch (error) {
        throw error;
    } finally {
        connection.release();
    }
}

export const updateUser = async (id, user) => {
    const { email, password, fullname, address, number } = user;
    const query = 'UPDATE users SET email = ?, password = ?, fullname = ?, address = ?, number = ? WHERE id = ?';
    const params = [email, password, fullname, address, number, id];
    const connection = await pool.getConnection();

    try {
        const result = await connection.execute(query, params);
        return result;
    } catch (error) {
        throw error;
    } finally {
        connection.release();
    }
}

export const deleteUser = async (id) => {
    const query = 'DELETE FROM users WHERE id = ?';
    const connection = await pool.getConnection();

    try {
        const result = await connection.execute(query, [id]);
        return result;
    } catch (error) {
        throw error;
    } finally {
        connection.release();
    }
}
