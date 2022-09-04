import React, { useState } from "react";
import { EmployeeWithoutId, InputErrors } from "../../tools/types";
import { validateInput } from "../../tools/validateInput";
import { INPUT_ERRORS } from "../../tools/constants";

interface Props {
  name: string;
  handleChange: undefined | React.ChangeEventHandler<HTMLInputElement>;
  type: string;
  state: EmployeeWithoutId;
}

const Input: React.FC<Props> = ({ name, handleChange, type, state }) => {
  const [error, setError] = useState<string>("");

  const handleBlur = () => {
    let isValid = validateInput(type, state[name as keyof EmployeeWithoutId]);
    if (!isValid)
      setError(INPUT_ERRORS[type.toUpperCase() as keyof InputErrors]);
    else if (error) setError("");
  };

  return (
    <div>
      <input
        type={type}
        name={name}
        onChange={handleChange}
        placeholder={name}
        value={state[name as keyof EmployeeWithoutId]}
        onBlur={handleBlur}
      />
      <p className="input-error">{error}</p>
    </div>
  );
};

export default Input;
