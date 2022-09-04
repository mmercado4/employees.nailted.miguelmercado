import React, { useState } from "react";
import PrimaryButton from "../Templates/PrimaryButton";
import Input from "../Templates/Input";
import { EmployeeWithoutId, EmployeeQuery } from "../../tools/types";
import { addEmployee } from "../../tools/gateways";
import Moment from "moment";
import Swal from "sweetalert2";

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
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target as HTMLInputElement;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const saveEmployee = async () => {
    let employee = { ...newEmployee };
    if (employee.birthdate)
      employee.birthdate = Moment(newEmployee.birthdate).format("DD/MM/YYYY");
    Object.keys(employee).forEach(
      (key) =>
        (employee[key as keyof EmployeeWithoutId] = employee[
          key as keyof EmployeeWithoutId
        ].replace(",", ""))
    );
    setLoading(true);
    let result = await addEmployee(employee);
    if (result.success) {
      setTimeout(() => {
        setQuery({ ...query, offset: 0 });
        setNewEmployee({ ...initialState });
        setLoading(false);
        Swal.fire("Saved!", result.message, "success");
      }, 1000);
    } else {
      setTimeout(() => {
        Swal.fire(
          result.message,
          result.errors.map((error: any) => error.msg).join("; "),
          "error"
        );
        setLoading(false);
      }, 700);
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
    <div className="new-employee-form">
      <h2>Add more employees</h2>
      <form>{renderInputs()}</form>
      <PrimaryButton text={loading ? "Saving" : "Save"} action={saveEmployee} />
    </div>
  );
};

export default NewEmployeeForm;
