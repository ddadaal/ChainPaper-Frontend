import { HttpService, HttpMethod } from "../HttpService";
import { CollabrationInvitation, CollabrationRequest } from "../../models/collabration";
import { CollabrationService } from "./CollabrationService";

export class CollabrationServiceMock extends CollabrationService {
  async requestCollabration(paperId: string): Promise<{ collabrationRequestId: string }> {
    return { collabrationRequestId: "123" };
  }

  async acceptCollabrationRequest(collabrationRequestId: string) {

  }

  async inviteCollabration(paperId: string): Promise<{ collabrationInvitationId: string }> {
    return { collabrationInvitationId: "123" };
  }

  async acceptCollabrationInvitation(collabrationInvitationId: string) {

  }

  async getCollabrationInvitationInfo(collabrationInvitationId: string): Promise<CollabrationInvitation> {
    return { collabrationInvitationId, time: "1231231212", inviteeId: "123", inviterId: "123", paperId: "123" };
  }

  async getCollabrationRequestInfo(collabrationRequestId: string): Promise<CollabrationRequest> {
    return { collabrationRequestId, time: "1231231212", requesteeId: "123", requesterId: "123", paperId: "123" };

  };
}
