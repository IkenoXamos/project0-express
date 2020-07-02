import App from './app';
import UserController from './controllers/userController';

const app = new App(
  [
    new UserController(),
  ],
  9001);

app.listen();
