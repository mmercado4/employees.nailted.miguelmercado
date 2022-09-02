import React, { useState, useEffect } from "react";
import ListOfEmployees from "./ListOfEmployees";
import { Employee } from "../../tools/types";

const Employees: React.FC = () => {
  const [employees, setEmployees] = useState<Array<Employee>>([]);
  return (
    <main>
      <ListOfEmployees />
    </main>
  );
};

export default Employees;
