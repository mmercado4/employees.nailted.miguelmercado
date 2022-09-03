import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import { Employee, EmployeeQuery } from "../../tools/types";
import { getOneEmployee } from "../../tools/gateways";

interface Props {
  selectedEmployee: number | null;
  query: EmployeeQuery;
  setQuery: Function;
}

const initialState: Employee = {
  id: "",
  name: "",
  surname: "",
  address: "",
  email: "",
  phone: "",
  birthdate: "",
};

const OneEmployee: React.FC<Props> = ({
  selectedEmployee,
  query,
  setQuery,
}) => {
  const [employeeInfo, setEmployeeInfo] = useState<Employee>(initialState);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const call = async () => {
      if (selectedEmployee) {
        setLoading(true);
        let response = await getOneEmployee(selectedEmployee);
        console.log(response);
        if (response.success) {
          setEmployeeInfo(response.data);
          setTimeout(() => setLoading(false), 1000);
        } else {
          console.log(response);
        }
      }
    };

    call();
  }, [selectedEmployee]);

  const renderEmployeeInfo = () => {
    if (Object.keys(employeeInfo).length > 0) {
      return Object.keys(employeeInfo).map((key, i) => {
        return (
          <p key={`data-${i}`}>
            {key}: <span>{employeeInfo[key as keyof Employee]}</span>
          </p>
        );
      });
    }
  };

  return (
    <div className="right-container">
      <h2>Employee</h2>
      <p>
        Select one employee to see the details. In case you can not find it,
        please search it by email.
      </p>
      <Filter query={query} setQuery={setQuery} />
      {renderEmployeeInfo()}
    </div>
  );
};

export default OneEmployee;
