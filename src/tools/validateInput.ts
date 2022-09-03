export const validateInput = (type: string, value: string) => {
  switch (type) {
    case "email":
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
        return false;
      break;
    case "number":
      if (!/^(\d+)$/.test(value)) return false;
      break;
    default:
      if (!value) return false;
  }
  return true;
};
