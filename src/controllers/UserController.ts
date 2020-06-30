import { Request, Response, Router } from 'express';
import Controller from './Controller';
import UserService from '../services/UserService';
import { User } from 'models/User';

export default class UserController implements Controller {
  public readonly path: string = '/user';
  public readonly router: Router = Router();
  private readonly service: UserService = new UserService();

  public initializeRoutes() {
    this.router.get(this.path, this.getAllUsers);
    this.router.post(this.path, this.createUser);
  }

  public getAllUsers = (_req: Request, res: Response): void => {
    res.send(this.service.getAllUsers());
  }

  public createUser = (req: Request, res: Response): void => {
    const u: User = req.body;
    res.send(this.service.createUser(u));
  }
}