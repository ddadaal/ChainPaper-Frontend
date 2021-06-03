import { HttpService, HttpMethod } from "../HttpService";
import { CollabrationInvitation, CollabrationRequest } from "../../models/collabration";
import { CollabrationService } from "./CollabrationService";

const now = new Date().toString();

export class CollabrationServiceMock extends CollabrationService {
  async requestCollabration(paperId: string): Promise<{ collabrationRequestId: string }> {
    return { collabrationRequestId: "123" };
  }

  async acceptCollabrationRequest(collabrationRequestId: string) {

  }

  async inviteCollabration(paperId: string, inviteeId: string): Promise<{ collabrationInvitationId: string }> {
    return { collabrationInvitationId: "123" };
  }

  async acceptCollabrationInvitation(collabrationInvitationId: string) {

  }

  async getCollabrationInvitationInfo(collabrationInvitationId: string): Promise<CollabrationInvitation> {
    return { collabrationInvitationId, time: now.toString(), inviteeId: "123", inviterId: "123", paperId: "123" };
  }

  async getCollabrationRequestInfo(collabrationRequestId: string): Promise<CollabrationRequest> {
    return { collabrationRequestId, time: now.toString(), requesteeId: "123", requesterId: "123", paperId: "123" };

  };
}
