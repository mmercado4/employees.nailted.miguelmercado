import { InputErrors } from "./types";

const API_URL: String = "https://api-nailted.herokuapp.com";

const INPUT_ERRORS: InputErrors = {
  TEXT: "Should not be empty",
  NUMBER: "Just numbers please",
  TEL: "Possible error in phone format",
  EMAIL: "Possible error in email format",
  DATE: "Should not be empty",
};

export { API_URL, INPUT_ERRORS };
