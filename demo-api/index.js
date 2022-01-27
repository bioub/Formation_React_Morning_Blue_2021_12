const express = require('express');
const cors = require('cors');
const { sign, verify } = require('jsonwebtoken');

const validUser = {
  username: 'romain',
  password: '123456',
};

const users = [
  {
    id: 1,
    username: 'romain',
    email: 'romain.bohdanowicz@formation.tech'
  },
  {
    id: 2,
    username: 'antonin',
    email: 'antonin@morning.blue'
  }
]

const SECRET_KEY = 'abcdef123456';

const app = express();

app.use(cors());

app.post('/login', express.json(), (req, res) => {
  const credentials = req.body;

  if (credentials.username !== validUser.username || credentials.password !== validUser.password) {
    res.statusCode = 401;
    return res.json({
      msg: 'Invalid credentials',
    });
  }

  const token = sign(
    {
      username: validUser.username,
    },
    SECRET_KEY,
    {
      expiresIn: '30m'
    }
  );

  res.json({
    token,
  });
});

function authenticate(req, res, next) {
  const [,token] = req.headers.authorization?.split(' ') ?? ['', ''];
  
  try {
    verify(token, SECRET_KEY);
  } catch {
    res.statusCode = 401;
    return res.json({
      msg: 'Invalid token',
    });
  }
  
  next();
}

app.get('/users', authenticate, (req, res) => {
  res.json(users);
});

app.get('/users/:id', authenticate, (req, res) => {
  const id = req.params.id;

  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    res.statusCode = 404;
    return res.json({
      msg: 'User not found',
    });
  }

  res.json(user);
});

app.listen(4000, () => {
  console.log('Server started on port 4000');
});
