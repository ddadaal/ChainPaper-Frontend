
import { Response, UserService } from "./UserService";
import { Role } from "../../models/user";

export default class UserServiceMock extends UserService {
  async login(username: string, password: string): Promise<Response> {
    if (username === "1") {
      return { token: "0001" };
    } else {
      return { error: "incorrect" };
    }
  }

  async register(username: string, password: string, role: Role): Promise<Response> {
    if (username !== "1") {
      return { token: "0001" };
    } else {
      return { error: "incorrect" };
    }
  }
}
