import { User } from '../models/user';
import { Request, Response, Router } from 'express';

export default class UserController {
  public readonly path: string = "/user";
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
