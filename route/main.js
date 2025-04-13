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
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const port = process.env.PORT_ROBOT; /*Do not hardcode the port here*/

