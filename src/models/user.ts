import { PaperInfo } from "./paper";

export type Role = "student" | "teacher";

export interface UserInfo {
  userId: string;
  username: string;
  role: Role;
  paperIds: string[];
  score: number;
  collabrationInvitationIds: string[];
  collabrationRequestIds: string[];
}

