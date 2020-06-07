import express from 'express';
import bodyparser from 'body-parser';

export default class App {
  public port: number;
  public app: express.Application;

  constructor(controllers: Array<any>, port: number) {
    this.app = express();
    this.port = port;

    this.initializeMiddleware();
    this.initializeControllers(controllers);

    this.app.post('/login', (req, res) => {
      const { username, password } = req.body;

      console.log(`${username} tried to login with password ${password}`);

      res.status(200).send(`${username} has successfully logged in`);
      res.status(200).send();
    });
  }

  private initializeMiddleware(): void {
    this.app.use(bodyparser.json());
  }

  private initializeControllers(controllers: Array<any>): void {
    controllers.forEach( (controller) => {
      this.app.use('/', controller.router);
    });
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`App has started listening on port ${this.port}`);
    });
  }
}
