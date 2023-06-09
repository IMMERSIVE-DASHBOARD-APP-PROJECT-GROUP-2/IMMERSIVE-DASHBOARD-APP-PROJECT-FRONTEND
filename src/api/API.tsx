import axios from "axios";

const instance = axios.create({
  baseURL: "http://34.123.236.1",
});

interface LoginResponse {
  data: {
    token: string;
  };
}

export default {
  Login: (email: string, password: string): Promise<LoginResponse> =>
    instance({
      method: "POST",
      url: "/login",
      data: {
        email,
        password,
      },
    }),
};
