require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool();

pool.query('SELECT * FROM people', (err, res) => {
    console.log(err, res)
    pool.end()
})
