import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import bodyParser from 'body-parser';
import path from 'path';
import mongoose from 'mongoose';

import routes from './src/routes/crmRoutes.js';


if(process.env.NODE_ENV !== 'production') dotenv.config();

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


const app = express();
const port = process.env.PORT || 5000;
const __dirname = path.resolve();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// app.use(cors());

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.static("client/build"));


routes(app)
app.use((req, res)=> {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
});




app.listen(port, error => {
    if(error) throw error;
    console.log('Server running on port ' + port);
});


