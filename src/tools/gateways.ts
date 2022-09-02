import Employees from "../components/Employees";
import { API_URL } from "./constants";
import { EmployeeQuery } from "./types";

const getEmployees = async (query: EmployeeQuery) => {
  let queryString = Object.keys(query)
    .filter((key) => query[key as keyof EmployeeQuery] !== "")
    .map((key) => `${key}=${query[key as keyof EmployeeQuery]}`)
    .join("&");
  return await fetcher(`/employees?${queryString}`, {});
};

const fetcher = async (path: String, opts: Object) => {
  try {
    let data = await fetch(`${API_URL}${path}`, opts);
    let response = await data.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};

export { getEmployees };

// let opts = {
//   method: "POST",
//   headers: { "content-type": "application/json" },
//   body: JSON.stringify(body),
// };
