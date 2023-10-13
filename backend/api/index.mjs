import express, { json } from 'express';
import cors from 'cors';
import sql from '../config/sql.mjs';
import indexRouter from '../routes/index.route.mjs';

const app = express();
const port = 8000;

app.use(cors());
app.use(json());

// Routes
app.use("/", indexRouter);

app.use(("*"), (req, res) => {
    res.send("404 - Not Found!");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
