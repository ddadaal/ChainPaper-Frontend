import { PaperInfo } from "./paper";

export type Role = "student" | "teacher";

export interface UserInfo {
  userId: string;
  username: string;
  role: Role;
  papers: PaperInfo[];
  score: number;
  collabrationInvitationIds: string[];
  collabrationRequestIds: string[];
}

