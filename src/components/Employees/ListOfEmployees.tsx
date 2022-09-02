import React from "react";
import { Employee } from "../../tools/types";

interface Props {
  employees: Array<Employee>;
}

const ListOfEmployees: React.FC<Props> = ({ employees }) => {
  const renderEmployeeRows = () => {
    return employees.map((employee, i) => {
      return (
        <tr key={`row-${i}`}>
          <td>{employee.id}</td>
          <td>{employee.name}</td>
          <td>{employee.surname}</td>
          <td>{employee.email}</td>
        </tr>
      );
    });
  };

  return (
    <table>
      <thead>
        <td>#</td>
        <td>Name</td>
        <td>Surname</td>
        <td>Email</td>
      </thead>
      <tbody>{renderEmployeeRows()}</tbody>
    </table>
  );
};

export default ListOfEmployees;
