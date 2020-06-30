import { User } from '../models/user';
import NonZeroIdError from '../exceptions/NonZeroIdError';

export default class UserService {

  public getAllUsers(): Array<User> {
    return new Array<User>();
  }

  public createUser(u: User): User {
    if (u.id) {
      throw new NonZeroIdError();
    }

    u.id = 1;

    return u;
  }
}
