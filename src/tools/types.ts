export interface Employee {
  id: number | string;
  name: string;
  surname: string;
  address: string;
  phone: string;
  email: string;
  birthdate: string;
}

export interface EmployeeWithoutId {
  name: string;
  surname: string;
  address: string;
  phone: string;
  email: string;
  birthdate: string;
}

export interface EmployeeQuery {
  offset: number;
  limit: number;
  email: string;
  sort: string;
  orderBy: string;
}

export interface InputErrors {
  TEXT: string;
  NUMBER: string;
  TEL: string;
  EMAIL: string;
}
