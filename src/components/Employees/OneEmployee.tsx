import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import { Employee, EmployeeQuery } from "../../tools/types";
import { getOneEmployee } from "../../tools/gateways";
import Swal from "sweetalert2";

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

  useEffect(() => {
    const call = async () => {
      if (selectedEmployee) {
        let response = await getOneEmployee(selectedEmployee);
        if (response.success) {
          setEmployeeInfo(response.data);
        } else {
          Swal.fire("Watch out!", response.message, "warning");
        }
      }
    };

    call();
  }, [selectedEmployee]);

  const renderEmployeeInfo = () => {
    if (Object.keys(employeeInfo).length > 0) {
      return ["address", "email", "phone", "birthdate"].map((key, i) => {
        return (
          <div className="employee-detail" key={`data-${i}`}>
            <p>{key[0].toUpperCase() + key.slice(1)}: </p>
            <p>{employeeInfo[key as keyof Employee]}</p>
          </div>
        );
      });
    }
  };

  return (
    <>
      <h2>Employee</h2>
      <p>
        Select one employee to see the details. In case you can not find it,
        please search it by email.
      </p>
      <Filter query={query} setQuery={setQuery} />
      {!Object.values(employeeInfo).includes("") ? (
        <h3>
          {employeeInfo.id} - {employeeInfo.name} {employeeInfo.surname}
        </h3>
      ) : (
        <h3>Selected employee</h3>
      )}

      <div className="employee-details">{renderEmployeeInfo()}</div>
    </>
  );
};

export default OneEmployee;
