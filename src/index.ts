import express from 'express';
import bodyparser from 'body-parser';

const PORT = 9001;
const app = express();

app.use(bodyparser.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  console.log(`${username} tried to login with password ${password}`);

  res.status(200).send(`${username} has successfully logged in`);
  res.status(200).send();
});

app.listen(PORT, () => {
  console.log(`App has started listening on port ${PORT}`);
});
