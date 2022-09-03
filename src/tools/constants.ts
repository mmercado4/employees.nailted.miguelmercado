import { InputErrors } from "./types";

const API_URL: String = "http://localhost:3001";

const INPUT_ERRORS: InputErrors = {
  TEXT: "Should not be empty",
  NUMBER: "Just numbers please",
  TEL: "Possible error in phone format",
  EMAIL: "Possible error in email format",
};

export { API_URL, INPUT_ERRORS };
