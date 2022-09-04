import { API_URL } from "./constants";
import { EmployeeQuery, EmployeeWithoutId } from "./types";

const getEmployees = async (query: EmployeeQuery) => {
  let queryString = Object.keys(query)
    .filter((key) => query[key as keyof EmployeeQuery] !== "")
    .map((key) => `${key}=${query[key as keyof EmployeeQuery]}`)
    .join("&");
  return await fetcher(`/employees?${queryString}`, {});
};

const getOneEmployee = async (id: number) => {
  return await fetcher(`/employees/${id}`, {});
};

const addEmployee = async (body: EmployeeWithoutId) => {
  let opts = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  };
  return await fetcher("/employees", opts);
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

export { getEmployees, getOneEmployee, addEmployee };
