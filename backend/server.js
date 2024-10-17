import express from 'express';
import mysql from 'mysql2';
import bodyParser from 'body-parser';
import cors from 'cors';
import bcrypt from 'bcrypt';

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.json());

// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'auth_db'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

// API endpoint to handle user signup
app.post('/api/users/', async (req, res) => {
  const { name, password } = req.body;

  // Hash the password before storing it
  const hashedPassword = await bcrypt.hash(password, 10);

  const query = 'INSERT INTO users (name, password) VALUES (?, ?)';
  db.query(query, [name, hashedPassword], (err, results) => {
    if (err) {
      console.error('Error inserting user:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({ id: results.insertId, name });
  });
});

// API endpoint to handle user login
app.post('/api/users/login', (req, res) => {
  const { name, password } = req.body;

  const query = 'SELECT * FROM users WHERE name = ?';
  db.query(query, [name], async (err, results) => {
    if (err) {
      console.error('Error fetching user:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    res.json({ message: 'Login successful', user: { id: user.id, name: user.name } });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
