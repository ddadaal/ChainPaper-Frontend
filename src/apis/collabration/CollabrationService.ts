import {HttpMethod, HttpService} from "../HttpService";
import {CollabrationInvitation, CollabrationRequest} from "../../models/collabration";

export class CollabrationService extends HttpService {
  async requestCollabration(paperId: string): Promise<{ collabrationRequestId: string }> {
    const data = await this.fetch({
      path: `/collabration/request`,
      body: { paperId },
      method: HttpMethod.POST,
    });

    return data as any;
  }

  async acceptCollabrationRequest(collabrationRequestId: string) {
    await this.fetch({
      path: `collabration/request/${collabrationRequestId}`,
      method: HttpMethod.POST,
    });
  }

  async inviteCollabration(paperId: string): Promise<{ collabrationInvitationId: string }> {
    const data = await this.fetch({
      path: `/collabration/invitation`,
      body: { paperId },
      method: HttpMethod.POST,
    });

    return data as any;
  }

  async acceptCollabrationInvitation(collabrationInvitationId: string) {
    await this.fetch({
      path: `/collabration/invitation/${collabrationInvitationId}`,
      method: HttpMethod.POST,
    });
  }

  async getCollabrationInvitationInfo(collabrationInvitationId: string): Promise<CollabrationInvitation> {
    const data = await this.fetch<CollabrationInvitation>({
      path: `/collabration/invitation/${collabrationInvitationId}`,
      method: HttpMethod.GET,
    });

    return data;
  }

  async getCollabrationRequestInfo(collabrationRequestId: string): Promise<CollabrationRequest> {
    const data = this.fetch<CollabrationRequest>({
      path: `/collabration/request/${collabrationRequestId}`,
      method: HttpMethod.GET,
    });

    return data;
  };
}
