import React, { useState, useEffect } from "react";
import ListOfEmployees from "./ListOfEmployees";
import { Employee, EmployeeQuery } from "../../tools/types";
import { getEmployees } from "../../tools/gateways";

const Employees: React.FC = () => {
  const [employees, setEmployees] = useState<Array<Employee>>([]);
  const [query, setQuery] = useState<EmployeeQuery>({
    offset: 0,
    limit: 10,
    email: "",
    sort: "",
    orderBy: "",
  });

  useEffect(() => {
    const call = async () => {
      const response = await getEmployees(query);
      console.log(response);
      if (response) setEmployees(response.data);
    };

    call();
  }, [query]);

  return (
    <main>
      <ListOfEmployees employees={employees} />
    </main>
  );
};

export default Employees;
