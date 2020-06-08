import { Request, Response, Router } from 'express';
import Controller from './controller.interface';

export default class UserController implements Controller {
  public readonly path: string = '/user';
  public readonly router: Router = Router();

  public initializeRoutes() {
    this.router.get(this.path, this.getAllUsers);
    this.router.post(this.path, this.createUser);
  }

  public getAllUsers = (req: Request, res: Response) => {
    res.send();
  }

  public createUser = (req: Request, res: Response) => {
    res.send();
  }
}
