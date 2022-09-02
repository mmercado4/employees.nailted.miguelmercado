export interface Employee {
  id: number;
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
