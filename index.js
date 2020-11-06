require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool();

let tables = ['people','category'];
const query1 = ` SELECT * FROM ${tables[0]}`;
const query2 = ` SELECT person_id, fname, lname, contact, category  FROM ${tables[0]}
INNER JOIN ${tables[1]} ON category.category_id = people.category_id
ORDER BY fname;`;

pool.query(query2, (err, res) => {
    console.log(err, res.rows)
    pool.end()
})