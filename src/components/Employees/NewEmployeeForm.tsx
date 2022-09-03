import React, { useState } from "react";
import PrimaryButton from "../Templates/PrimaryButton";
import Input from "../Templates/Input";
import { EmployeeWithoutId, EmployeeQuery } from "../../tools/types";
import { addEmployee } from "../../tools/gateways";
import Moment from "moment";

interface Props {
  query: EmployeeQuery;
  setQuery: Function;
}

const initialState: EmployeeWithoutId = {
  name: "",
  surname: "",
  address: "",
  phone: "",
  email: "",
  birthdate: "",
};

const NewEmployeeForm: React.FC<Props> = ({ query, setQuery }) => {
  const [newEmployee, setNewEmployee] =
    useState<EmployeeWithoutId>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target as HTMLInputElement;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const saveEmployee = async () => {
    let employee = { ...newEmployee };
    employee.birthdate = Moment(newEmployee.birthdate).format("DD/MM/YYYY");
    let result = await addEmployee(employee);
    if (result.success) {
      setQuery({ ...query, offset: 0 });
      setNewEmployee({ ...initialState });
    } else {
      //TODO: MANEJAR ERROR
    }
  };

  const renderInputs = () => {
    let newEmployeeInputs = Object.keys({ ...newEmployee });
    let type = "text";
    return newEmployeeInputs.map((input, i) => {
      if (/date/gi.test(input)) type = "date";
      else if (/phone/gi.test(input)) type = "tel";
      else if (/email/gi.test(input)) type = "email";
      return (
        <Input
          key={`input-${i}`}
          name={input}
          handleChange={handleChange}
          type={type}
          state={newEmployee}
        />
      );
    });
  };

  return (
    <div>
      <form>{renderInputs()}</form>
      <PrimaryButton text="Save" action={saveEmployee} />
    </div>
  );
};

export default NewEmployeeForm;
