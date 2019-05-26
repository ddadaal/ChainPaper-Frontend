
import { Response, UserService } from "./UserService";
import { Role, UserInfo } from "../../models/user";
import { papers } from "../paper/PaperServiceMock";

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

  async getUserInfo(userId: string): Promise<UserInfo> {
    return {
      userId,
      username: `${userId}'s name`,
      role: "student",
      papers,
      score: 4.6,
      collabrationInvitationIds: [],
      collabrationRequestIds: [],
    };
  }
}
