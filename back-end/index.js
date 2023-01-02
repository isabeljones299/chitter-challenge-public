import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import { router as peep } from './routes/peeps.js'; //maybe as Peep
import { login } from './routes/login.js';
import { register } from './routes/register.js';

// setup enviroment
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

let app = express();

const main = async () => {
    console.log(process.env.CLUSTER_URL)
    console.log(`connecting to db at ${process.env.CLUSTER_URL}`)
    // console.log(process.env)
    try {

        await mongoose.connect(process.env.CLUSTER_URL)
        console.log(`Connected to the database at: ${process.env.CLUSTER_URL}`);

    } catch (e) {
        console.log(`Database failed to connect: ${e.message}`);
    }
};

// app.use(`/peeps`, peep);
// app.use(`/allpeeps`, allpeeps)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use('/allpeeps', peep);
app.use('/addpeeps', peep);
app.use(`/login`, login);
app.use(`/register`, register);
// app.use(express.static(__dirname));

// app.get("/*", function (req, res) {
//     res.sendFile(path.join(__dirname, "index.html"));
// });

main().catch(err => console.log(err))

const server = app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(process.env.PORT);
    console.log("==========================================")
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`App is listening at: http://${SERVERHOST}:${SERVERPORT}`);
});

export default server;

// mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true })
// //heres how i check whether connection succeeds (ensure MONGODB_URL is correct in.env)
// const db = mongoose.connection
// db.once('open', _ => {
//     console.log('Database connected:', url)
// })

// db.on('error', err => {
//     console.error('connection error:', err)
// })



// const app = express()

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))

// // app.use('/api/users', users) //routes replaces api
// // app.use('/routes/peeps', peeps)

// // run app
// const PORT = process.env.PORT || 5000
// app.listen(PORT, () => console.log(`Server is running on port ${PORT})`))
