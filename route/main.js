/*
    Main backend entry file
    Please follow the format to code read the comments in between
    and to interact with the db please use
    database_inter
    use the make file to compile all the CPP code
*/

import express from 'express';
/*  
    Please fill all the env vars in /env/.env Create the dir
    manually as this is ignored by git
*/
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import dashboard from './dashboard';
import master from './master';
import cors from 'cors';
import suppliers from './suppliers';
import customers from './customer';
import inwards from './inwards';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/*Sets up the main dir path and sets it up*/
const main_project_dir = path.join(__dirname, '..');
/* sets up every other path that is required throughout the project */
/* Please set up all the paths here, we don't want path.join again and again */
const path_to_rendered = path.join(main_project_dir, '/rendered_routing');
const path_to_rendered_home = path.join(
  path_to_rendered,
  '/dashboard/index.html',
);
const path_to_rendered_master = path.join(
  path_to_rendered,
  '/master/index.html',
);

const path_to_rendered_suppliers = path.join(
  path_to_rendered,
  '/suppliers/index.html',
);

const path_to_rendered_customers = path.join(
  path_to_rendered,
  '/customers/index.html',
);

const path_to_rendered_inwards = path.join(
  path_to_rendered,
  '/inwards/index.html',
);

dotenv.config({ path: '../env/.env' }); /*Do create the file*/

const app = express();
const port = process.env.PORT_ROBOT; /*Do not hardcode the port here*/
app.use(cors());
app.use(express.json()); // This line is crucial for parsing JSON request bodies
app.use(express.static(path.join(path_to_rendered)));

/* please add all the apis prehand in this order */
/* Specially those that goes to different files as no logic of APIs should'nt be written here */
app.use('/api/data', dashboard);
app.use('/api/master', master);
app.use('/api/suppliers', suppliers);
app.use('/api/customers', customers);
app.use('/api/inwards', inwards);

app.get('/', (req, res) => {
  res.sendFile(path_to_rendered_home);
});

app.get('/product', (req, res) => {
  res.sendFile(path_to_rendered_master);
});

app.get('/suppliers', (req, res) => {
  res.sendFile(path_to_rendered_suppliers);
});

app.get('/customers', (req, res) => {
  res.sendFile(path_to_rendered_customers);
});

app.get('/inwards', (req, res) => {
  res.sendFile(path_to_rendered_inwards);
});

app.listen(port, () => {
  console.log(`App running at port ${port}`);
  console.log(`visit http://localhost:${port}`);
});
