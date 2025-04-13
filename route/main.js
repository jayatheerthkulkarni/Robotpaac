/*
    Strictly meant to route from bun
    Not meant to write any logic part in 
    this file.

    To send any data please use 
    routes.js
    and to interact with the db please use
    database_inter
    use the make file to compile all the CPP code
*/

import express from 'express';
/*  
    Please fill all the env vars in /env/.env (Create the dir
    manually as this is ignored by git
*/
import dotenv from 'dotenv' 
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/*Sets up the main dir path and sets it up*/
const main_project_dir = path.join(__dirname, "..");


dotenv.config({path: '../env/.env'});/*Do create the file*/

const app = express();
const port = process.env.PORT_ROBOT; /*Do not hardcode the port here*/

console.log(main_project_dir);
app.listen(port,() => {
    console.log(`App running at port ${port}`)
});