import React, { useState, useEffect } from "react";
import { Employee } from "../../tools/types";
import { getOneEmployee } from "../../tools/gateways";

interface Props {
  selectedEmployee: number | null;
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

const OneEmployee: React.FC<Props> = ({ selectedEmployee }) => {
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

  return <div className="right-container">{renderEmployeeInfo()}</div>;
};

export default OneEmployee;
