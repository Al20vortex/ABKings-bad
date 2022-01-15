import { express } from 'express';
import { cors } from 'cors';
import { pool } from './db';

const port = 5003;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/info', async(req, res) => {
    try {
        console.log('This was made in 2022!');
        // this query won't work
        const example = await pool.query(
            'SELECT * FROM notTable;'
        );
        res.json(example.rows);
    } catch {
        console.log('Uh oh');
        res.json('Uh oh');
    }
});

app.listen(5012, () => {
    console.log('Express server running on port', port);
});