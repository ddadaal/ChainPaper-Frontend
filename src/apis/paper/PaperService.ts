import {HttpService, HttpMethod} from "../HttpService";
import {PaperDraft, PaperInfo} from "../../models/paper";

export interface PaperIdResponse {
  paperId: string;
}

export interface PaperListResponse {
  paperItems: PaperItem[];
}

export interface PaperItem {
  paperId: string;
  name: string;
}

export class PaperService extends HttpService {
  async uploadPaper(paperDraft: PaperDraft): Promise<PaperIdResponse> {
    const data = await this.fetch({
      path: "/papers",
      method: HttpMethod.POST,
      body: paperDraft,
    });

    return data as PaperIdResponse;
  }

  async modifyPaper(paperId: string, paperDraft: PaperDraft): Promise<PaperIdResponse> {
    const data = await this.fetch({
      path: `/papers/${paperId}`,
      method: HttpMethod.PUT,
      body: paperDraft,
    });

    return data as PaperIdResponse;

  }

  async getPapers(): Promise<{ papers: PaperInfo[] }> {
    const data = await this.fetch({
      path: `/papers`,
      method: HttpMethod.GET,
    });

    return data as { papers: PaperInfo[] };

  }

  async getPaper(paperId: string): Promise<{ paper: PaperInfo }> {
    const data = await this.fetch({
      path: `/papers/${paperId}`,
      method: HttpMethod.GET,
    });

    return data as { paper: PaperInfo };
  }

  async scorePaper(paperId: string, score: number) {
    await this.fetch({
      path: `/papers/${paperId}/score`,
      body: {score},
      method: HttpMethod.POST,
    });
  }

  async starPaper(paperId: string, operation: "star" | "unstar") {
    await this.fetch({
      path: `/papers/${paperId}/score`,
      body: {star: operation == "star"},
      method: HttpMethod.POST,
    });
  }

  async commentPaper(paperId: string, commentContent: string) {
    await this.fetch({
      path: `/papers/${paperId}/comment`,
      body: {comment: commentContent},
      method: HttpMethod.POST,
    });
  }


}
