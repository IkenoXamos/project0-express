export default interface Account {
  id: number;
  balance: number;
  status: AccountStatus;
  type: AccountType;
}

export interface AccountStatus {
  id: number;
  status: string;
}

export interface AccountType {
  id: number;
  type: string;
}
