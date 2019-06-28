import axios from "axios";
export const LOGIN_START = "LOGIN_START";

const localHost = "http://localhost:5000";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post(`${localHost}/api/login`, creds)
    .then(res => localStorage.setItem("token", res.data.payload))
    .catch(err => console.error(err));
};
