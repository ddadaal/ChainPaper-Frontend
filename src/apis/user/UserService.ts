import { HttpError, HttpMethod, HttpService } from "../HttpService";

export interface LoginResponse {
  token?: string;
  error?: "incorrect" | "frozen";
}

export class UserService extends HttpService {

  async login(username: string, password: string): Promise<LoginResponse> {

    const data = await this.fetch<LoginResponse>({
      method: HttpMethod.GET,
      params: { username, password },
      path: "/login",
    });
    if (data.token) {
      this.setToken(data.token);
    }
    return data;
  }

  async register(username: string, password: string): Promise<"success" | "conflict"> {
    try {
      await this.fetch({
        method: HttpMethod.POST,
        body: { username, password },
        path: "/register",
      });
      return "success";
    } catch (e) {
      const e1 = e as HttpError;
      if (e1.status === 409) {
        return "conflict";
      } else {
        throw e;
      }
    }
  }

  setToken(token: string) {
    if (token) {
      this.axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
      delete this.axios.defaults.headers.common.Authorization;
    }
  }
}
