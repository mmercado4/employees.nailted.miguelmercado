import React, { useState } from "react";
import PrimaryButton from "../Templates/PrimaryButton";
import Input from "../Templates/Input";
import { EmployeeWithoutId, Employee } from "../../tools/types";
import { addEmployee } from "../../tools/gateways";

interface Props {
  employees: Array<Employee>;
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
}

const initialState: EmployeeWithoutId = {
  name: "",
  surname: "",
  address: "",
  phone: "",
  email: "",
  birthdate: "",
};

const NewEmployeeForm: React.FC<Props> = ({ employees, setEmployees }) => {
  const [newEmployee, setNewEmployee] =
    useState<EmployeeWithoutId>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target as HTMLInputElement;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const saveEmployee = async () => {
    console.log("save");
    let result = await addEmployee(newEmployee);
    console.log(result);
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
