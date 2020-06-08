export class Account {
  id: number;
  balance: number;
  status: AccountStatus;
  type: AccountType;

  constructor();
  constructor(id: number);
  constructor(id: number, balance: number, status: AccountStatus, type: AccountType);
  constructor(id?: number, balance?: number, status?: AccountStatus, type?: AccountType) {
    this.id = id || 0;
    this.balance = balance || 0;
    this.status = status || new AccountStatus();
    this.type = type || new AccountType();
  }
}

export class AccountStatus {
  id: number;
  status: string;

  constructor();
  constructor(id: number, status: string);
  constructor(id?: number, status?: string) {
    this.id = id || 0;
    this.status = status || '';
  }
}

export class AccountType {
  id: number;
  type: string;

  constructor();
  constructor(id: number, type: string);
  constructor(id?: number, type?: string) {
    this.id = id || 0;
    this.type = type || '';
  }
}
