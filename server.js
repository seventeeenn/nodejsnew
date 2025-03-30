const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

let users = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'routes')));
app.use('/styles', express.static(path.join(__dirname, 'public/styles')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/home.html'));
});

app.post('/register', (req, res) => {
  const { user, name, surname, date, inPass, confInPass } = req.body;
  const newUser = { id: users.length + 1, user, name, surname, date, inPass, confInPass };
  users.push(newUser); res.json({ message: 'Registration successful', user: newUser });
});

app.get('/user/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = users.find(u => u.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
