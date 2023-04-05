import { dentistsInstance } from "./dentisInstance";
export const getDentists = () => {
  let dentists = dentistsInstance.get();
  return dentists;
};
export const getDentistById = (id) => {
  let dentist = dentistsInstance.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return dentist;
};
