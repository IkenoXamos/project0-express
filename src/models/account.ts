export default class Account {
  id: number;
  balance: number;
  status: AccountStatus;
  type: AccountType;

  constructor(id: number, balance: number, status: AccountStatus, type: AccountType) {
    this.id = id;
    this.balance = balance;
    this.status = status;
    this.type = type;
  }
}

export class AccountStatus {
  id: number;
  status: string;

  constructor(id: number, status: string) {
    this.id = id;
    this.status = status;
  }
}

export class AccountType {
  id: number;
  type: string;

  constructor(id: number, type: string) {
    this.id = id;
    this.type = type;
  }
}
