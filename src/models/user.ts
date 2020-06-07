export default class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;

  constructor(id: number, username: string, password: string, firstName: string, lastName: string, email: string, role: Role) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.role = role;
  }
}

export class Role {
  id: number;
  role: string;

  constructor(id: number, role: string) {
    this.id = id;
    this.role = role;
  }
}
