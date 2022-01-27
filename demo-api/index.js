const express = require('express');
const { sign } = require('jsonwebtoken');

const validUser = {
  username: 'romain',
  password: '123456',
};

const SECRET_KEY = 'abcdef123456';

const app = express();

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
  );

  res.json({
    token,
  });
});

app.listen(4000, () => {
  console.log('Server started on port 4000');
});
