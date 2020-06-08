import UserService from '../../services/user.service';
import { User } from '../../models/user';

describe('The UserService', () => {
  const service: UserService = new UserService();

  describe('when obtaining all users', () => {
    const result: any = service.getAllUsers();
    it('should return an array', () => {
      expect(Array.isArray(result))
        .toBeTruthy();
    });

    it('should contain Users', () => {
      if (result.length > 0) {
        expect(result[0] instanceof User)
          .toBeTruthy();
      }
    });
  });
});
