import React, { useState, useEffect } from "react";
import ListOfEmployees from "./ListOfEmployees";
import OneEmployee from "./OneEmployee";
import NewEmployeeForm from "./NewEmployeeForm";
import { Employee, EmployeeQuery } from "../../tools/types";
import { getEmployees } from "../../tools/gateways";

const Employees: React.FC = () => {
  const [employees, setEmployees] = useState<Array<Employee>>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<number | null>(null);
  const [totalEmployees, setTotalEmployees] = useState<number | null>(null);
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
      if (response) {
        setEmployees(response.data);
        setTotalEmployees(response.total);
      } else {
        //TODO MANEJAR ERROR
      }
    };

    call();
  }, [query]);

  return (
    <main>
      <section className="employees-section">
        <ListOfEmployees
          employees={employees}
          setSelectedEmployee={setSelectedEmployee}
          totalEmployees={totalEmployees}
          query={query}
          setQuery={setQuery}
        />
        <OneEmployee
          selectedEmployee={selectedEmployee}
          query={query}
          setQuery={setQuery}
        />
      </section>
      <NewEmployeeForm query={query} setQuery={setQuery} />
    </main>
  );
};

export default Employees;
