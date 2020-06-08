export class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;

  constructor();
  constructor(id: number, username: string, password: string, firstName: string, lastName: string, email: string);
  constructor(id: number, username: string, password: string, firstName: string, lastName: string, email: string, role: Role)
  constructor(id?: number, username?: string, password?: string, firstName?: string, lastName?: string, email?: string, role?: Role) {
    this.id = id || 0;
    this.username = username || '';
    this.password = password || '';
    this.firstName = firstName || '';
    this.lastName = lastName || '';
    this.email = email || '';
    this.role = role || new Role();
  }
}
export class Role {
  id: number;
  name: string;

  constructor();
  constructor(id: number);
  constructor(id: number, name: string);
  constructor(id?: number, name?: string) {
    this.id = id || 0;
    this.name = name || '';
  }
}
