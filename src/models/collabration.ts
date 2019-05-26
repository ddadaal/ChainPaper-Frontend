export interface CollabrationInvitation {
  time: string;
  inviteeId: string;
  inviterId: string;
  paperId: string;
}

export interface CollabrationRequest {
  time: string;
  requesteeId: string;
  requesterId: string;
  paperId: string;
}