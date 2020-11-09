require('dotenv').config();
const { Pool } = require('pg');
const pool = new Pool();

const fetch = require('node-fetch');


const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
const port = 5000;

let tables = ['people', 'category'];
const query1 = ` SELECT * FROM ${tables[0]}`;
const query2 = ` SELECT person_id, fname, lname, contact, category  FROM ${tables[0]}
 INNER JOIN ${tables[1]} ON category.category_id = people.category_id
 ORDER BY fname;`;

app.get('/getAllPeopleJSON', async (req, res) => {
    try {
        console.log('try triggered');
        const jsonResult = await pool.query(query2);
        res.json(jsonResult.rows);
    } catch (e) {
        console.log('catch triggered', e);
    }
});
const testArray=['hello 1','hello 2','hello 3']
app.get('/getTestRoute', (req, res) => {
    console.log('try from test route triggered');
    res.send(testArray);
});
app.listen(port, () => (console.log(`Example app listening at http://localhost:${port}`)))