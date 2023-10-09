import express, { json } from 'express';
import cors from 'cors'; // Import the cors middleware
// import fetch from 'node-fetch';
import sql from '../config/sql.mjs';
import indexRouter from '../routes/index.route.mjs';
const app = express();
const port = 8000; // Choose a port for your server
app.use(cors());
app.use(json());

//routes
app.use("/", indexRouter)
app.use(("*"), (req, res) => {
    res.send("404 - Not Found!")
})

sql.connect().then(() => {
    console.log('connected to database');
}).catch((err) => console.log(err.message))

// let query;
// //let params;
// query = 'INSERT INTO users (id, email, password, fullname, address, number) VALUES (1, "chen", "rcgen123", "chenpeng", "NCShub", "88888888")';
// //params = [email, password, fullname, address, number];
//         //sql.execute(query, [...params, id])
//         sql.execute(query)
//             .then((result) => console.log(result))
//             .catch((err) => console.log(err.message))

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
