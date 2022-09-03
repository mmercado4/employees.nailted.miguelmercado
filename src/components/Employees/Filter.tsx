import React, { ChangeEventHandler, useState } from "react";
import { EmployeeQuery } from "../../tools/types";

interface Props {
  query: EmployeeQuery;
  setQuery: Function;
}

const Filter: React.FC<Props> = ({ query, setQuery }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target as HTMLInputElement;
    setQuery({ ...query, email: value, offset: 0 });
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by email"
        value={query.email}
        onChange={handleChange}
      />
      <p>Email: {query.email}</p>
    </div>
  );
};

export default Filter;
