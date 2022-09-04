import React from "react";
import Pages from "./Pages";
import { Employee, EmployeeQuery } from "../../tools/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

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

  const sortBy = (property: string) => {
    if (query.sort !== property) {
      setQuery({ ...query, sort: property, orderBy: "desc" });
    } else {
      if (query.orderBy === "desc") setQuery({ ...query, orderBy: "asc" });
      else setQuery({ ...query, sort: "", orderBy: "" });
    }
  };

  return (
    <div className="left-container">
      <h2>List of employees</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th onClick={() => sortBy("name")}>
              Name{" "}
              {query.sort === "name" && query.orderBy === "desc" && (
                <FontAwesomeIcon icon={faArrowDown} />
              )}
              {query.sort === "name" && query.orderBy === "asc" && (
                <FontAwesomeIcon icon={faArrowUp} />
              )}
            </th>
            <th onClick={() => sortBy("surname")}>
              Surname{" "}
              {query.sort === "surname" && query.orderBy === "desc" && (
                <FontAwesomeIcon icon={faArrowDown} />
              )}
              {query.sort === "surname" && query.orderBy === "asc" && (
                <FontAwesomeIcon icon={faArrowUp} />
              )}
            </th>
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
    </div>
  );
};

export default ListOfEmployees;
