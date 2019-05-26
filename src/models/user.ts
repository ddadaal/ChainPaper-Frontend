import { PaperInfo } from "./paper";

export type Role = "student" | "teacher";

export interface UserProfile {
  userId: string;
  username: string;
  role: Role;
  papers: PaperInfo[];
  score: number;
  collabrationInvitationIds: string[];
  collabrationRequestIds: string[];
}

