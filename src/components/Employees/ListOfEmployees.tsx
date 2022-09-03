import React from "react";
import Pages from "./Pages";
import Filter from "./Filter";
import { Employee, EmployeeQuery } from "../../tools/types";

interface Props {
  employees: Array<Employee>;
  setSelectedEmployee: Function;
  totalEmployees: number | null;
  query: EmployeeQuery;
  setQuery: Function;
}

const ListOfEmployees: React.FC<Props> = ({
  employees,
  setSelectedEmployee,
  totalEmployees,
  query,
  setQuery,
}) => {
  const renderEmployeeRows = () => {
    if (employees?.length > 0) {
      return employees.map((employee, i) => {
        return (
          <tr key={`row-${i}`} onClick={() => setSelectedEmployee(employee.id)}>
            <td>{query.offset + i + 1}</td>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.surname}</td>
            <td>{employee.email}</td>
          </tr>
        );
      });
    }
    return (
      <tr>
        <td colSpan={5}>No employees!</td>
      </tr>
    );
  };
  //TODO ORDER BY NAME AND SURNAME

  return (
    <div className="left-container">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{renderEmployeeRows()}</tbody>
      </table>
      <Pages
        totalEmployees={totalEmployees}
        query={query}
        setQuery={setQuery}
      />
      <Filter query={query} setQuery={setQuery} />
    </div>
  );
};

export default ListOfEmployees;
