export default interface User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
}

export interface Role {
  id: number;
  role: string;
}
