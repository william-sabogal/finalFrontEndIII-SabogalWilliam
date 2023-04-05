import axios from "axios";
export const dentistsInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users",
});

