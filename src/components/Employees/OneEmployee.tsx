import React, { useState, useEffect } from "react";
import { Employee } from "../../tools/types";

interface Props {
  selectedEmployee: number | null;
}

const OneEmployee: React.FC<Props> = ({ selectedEmployee }) => {
  return <p>Empleado {selectedEmployee}</p>;

  //   if (Object.keys(selectedEmployee).length > 0) {
  //     return <p>No hay empleado</p>;
  //   } else {
  //     return Object.keys(selectedEmployee).map((data, i) => {
  //       return (
  //         <p key={`employee-data-${i}`}>
  //           {data}: <span>{selectedEmployee[data as keyof Employee]}</span>
  //         </p>
  //       );
  //     });
  //   }
};

export default OneEmployee;
