import UserService from '../../services/user.service';
import { User } from '../../models/user';
import NonZeroIdError from '../../exceptions/NonZeroIdError';

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

  describe('when creating a user', () => {
    it('should succeed when id is zero', () => {
      const result: any = service.createUser(new User());
      expect(result instanceof User).toBeTruthy();
      expect(result.id).toBeGreaterThan(0);
    });

    it('should throw an error when id is non-zero', () => {
      const u: User = new User();
      u.id = 5;

      expect( () => {service.createUser(u); }).toThrowError(NonZeroIdError);
    })
  })
});
