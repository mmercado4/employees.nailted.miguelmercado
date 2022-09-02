import React from "react";
import { Employee } from "../../tools/types";

interface Props {
  employees: Array<Employee>;
  setSelectedEmployee: Function;
}

const ListOfEmployees: React.FC<Props> = ({
  employees,
  setSelectedEmployee,
}) => {
  const renderEmployeeRows = () => {
    return employees.map((employee, i) => {
      return (
        <tr key={`row-${i}`} onClick={() => setSelectedEmployee(employee.id)}>
          <td>{employee.id}</td>
          <td>{employee.name}</td>
          <td>{employee.surname}</td>
          <td>{employee.email}</td>
        </tr>
      );
    });
  };

  return (
    <div className="left-container">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{renderEmployeeRows()}</tbody>
      </table>
    </div>
  );
};

export default ListOfEmployees;
