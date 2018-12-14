import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-app-a2eb6.firebaseio.com/"
});

export default instance;
