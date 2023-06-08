import axios from "axios";

const instance = axios.create({
  baseURL: 'https://virtserver.swaggerhub.com/AGUSSUGIONO1224_1/project/1.0.0',
});

interface LoginResponse {}

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