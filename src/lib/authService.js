import axios from "axios";

const baseUrl = process.env.BASE_URL || "http://localhost:5000"

class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: `${baseUrl}/auth`,
      withCredentials: true,
    });
  }

  // deconstruct response.data to {data}

  signup({ username, password }) {
    console.log(username, password)
    return this.auth
      .post("/signup", { username, password })
      .then(({ data }) => data);
  }

  login({ username, password }) {
    return this.auth
      .post("/login", { username, password })
      .then(({ data }) => data);
  }

  logout() {
    return this.auth.get("/logout", {}).then(({ data }) => data);
  }

  me() {
    return this.auth.get("/me", {}).then(({ data }) => data);
  }
}

const axiosReqFunctions = new Auth();
export default axiosReqFunctions;
