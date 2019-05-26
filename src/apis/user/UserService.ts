import { HttpError, HttpMethod, HttpService } from "../HttpService";
import { Role, UserInfo } from "../../models/user";
import { getUserInfoInStorage } from "../../stores/UserStore";

export interface Response {
  userId?: string;
  token?: string;
  error?: "incorrect" | "frozen";
}

export class UserService extends HttpService {

  constructor() {
    super();
    // data
    const data = getUserInfoInStorage();
    if (data) {
      this.setToken(data.token);
    }
  }

  async login(username: string, password: string): Promise<Response> {
    try {
      const data = await this.fetch<Response>({
        method: HttpMethod.GET,
        params: { username, password },
        path: "/login",
      });
      if (data.token) {
        this.setToken(data.token);
      }
      return data;
    } catch (e) {
      return (e as HttpError).data;
    }

  }

  async register(username: string, password: string, role: Role): Promise<Response> {
    try {
      const data = await this.fetch({
        method: HttpMethod.POST,
        body: { username, password, role },
        path: "/register",
      });
      return data;
    } catch (e) {
      const e1 = e as HttpError;
      return e1.data;
    }

  }

  async getUserInfo(userId: string): Promise<UserInfo> {
    try {
      const data = await this.fetch<UserInfo>({
        method: HttpMethod.GET,
        path: `/user/${userId}`,
      });
      return data;
    } catch (e) {
      const e1 = e as HttpError;
      return e1.data;
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
