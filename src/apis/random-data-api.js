import axios from "axios";

export default axios.create({
  baseURL: "https://random-data-api.com/api/",
  timeout: 1000
});
