import { API_URL } from "./constants";

const getEmployees = async () => {
  // let opts = {
  //   method: "POST",
  //   headers: { "content-type": "application/json" },
  //   body: JSON.stringify(body),
  // };
  return await fetcher("/employees", {});
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
