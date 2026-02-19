const express = require('express');
const { filterUsers } = require('./utils');

const app = express();
app.use(express.json());

let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com', role: 'admin', active: true },
  { id: 2, name: 'Bob', email: 'bob@example.com', role: 'user', active: true }
];

// GET /
app.get('/', (req, res) => {
  res.json({ message: 'Hello CI/CD!' });
});

// GET /api/users
app.get('/api/users', (req, res) => {
  const { role, active } = req.query;

  const parsedActive =
    active === undefined ? undefined : active === 'true';

  const result = filterUsers(users, role, parsedActive);

  if (result.length === 0) {
    return res.status(404).json({ message: 'No users found' });
  }

  res.status(200).json(result);
});

// GET /api/users/:id
app.get('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.status(200).json(user);
});

// POST /api/users
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;

  const newUser = {
    id: users.length + 1,
    name,
    email,
    role: 'user',
    active: true
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// POST /api/login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    return res.status(200).json({ token: 'fake-jwt-token' });
  }

  res.status(401).json({ message: 'Invalid credentials' });
});

module.exports = app;
