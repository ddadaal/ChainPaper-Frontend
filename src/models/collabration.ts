export interface CollabrationInvitation {
  collabrationInvitationId: string;
  time: string;
  inviteeId: string;
  inviterId: string;
  paperId: string;
}

export interface CollabrationRequest {
  collabrationRequestId: string;
  time: string;
  requesteeId: string;
  requesterId: string;
  paperId: string;
}
