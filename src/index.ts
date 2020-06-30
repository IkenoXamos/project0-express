import App from './App';
import UserController from './controllers/UserController';

const app = new App(
  [
    new UserController(),
  ],
  9001);

app.listen();
