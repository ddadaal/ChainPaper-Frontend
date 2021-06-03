import { PaperService, PaperIdResponse, PaperListResponse } from "./PaperService";
import { PaperDraft, PaperInfo, PaperComment, PaperRef } from "../../models/paper";
import { HttpMethod } from "../HttpService";
import { sleepMs } from "../../utils";

const now = new Date();

const comments = [
  { userId: "2", time: now.toString(), content: "好！", stars: 10 },
  { userId: "3", time: now.toString(), content: "好！！！", stars: 4 },
];

export const papers: PaperInfo[] = [
  {
    paperId: "1", authors: ["123", "1"], paper: {
      title: "Bug Localization with Semantic and Structural Features using Convolutional Neural Network and Cascade Forest",
      refs: [{ type: "published", doi: "10.1145/3210459.3210469", content: "123" }, {
        type: "chainpaper",
        paperId: "2",
        title: "123",
        content: "Poor H V. An introduction to signal detection and estimation[M]. Springer Science & Business Media, 2013."
      }],
      keywords: "case study",
      abstractContent: "Background: Correctly localizing buggy ﬁles for bug reports together with their semantic and structural information is a crucial task, which would essentially improve the accuracy of bug localization techniques. Aims: To empirically evaluate and demonstrate the eﬀects of both semantic and structural information in bug reports and source ﬁles on improving the performance of bug localization, we propose CNN Forest involving convolutional neural network and ensemble of random forests that have excellent performance in the tasks of semantic parsing and structural information extraction. Method: We ﬁrst employ convolutional neural network with multiple ﬁlters and an ensemble of random forests with multi-grained scanning to extract semantic and structural features from the word vectors derived from bug reports and source ﬁles. And a subsequent cascade forest (a cascade of ensembles of random forests) is used to further extract deeper features and observe the correlated relationships between bug reports and source ﬁles. CNN Forest is then empirically evaluated over 10,754 bug reports extracted from AspectJ, Eclipse UI, JDT, SWT, and Tomcat projects. Results: The experiments empirically demonstrate the signiﬁcance of including semantic and structural information in bug localization, and further show that the proposed CNN Forest achieves higher Mean Average Precision and Mean Reciprocal Rank measures than the best results of the four current state-of-the-art approaches (NPCNN, LR+WE, DNNLOC, and BugLocator). Conclusion: CNN Forest is capable of deﬁning the correlated relationships between bug reports and source ﬁles, and we empirically show that semantic and structural information in bug reports and source ﬁles are crucial in improving bug localization.",
      introduction: "123",
      content: "string",
      conclusion: "1321",
      acknowledgement: "1232132121",
    },
    uploadTime: now.toString(), score: 10, stars: 10, comments,
    state: "open",
  }
];

export class PaperServiceMock extends PaperService {
  async uploadPaper(paperDraft: PaperDraft): Promise<PaperIdResponse> {
    return { paperId: "123" };
  }

  async modifyPaper(paperId: string, paperDraft: PaperDraft): Promise<PaperIdResponse> {
    return { paperId: "123" };
  }

  async getPapers(): Promise<{ papers: PaperInfo[] }> {
    return { papers };
  }

  async getPaper(paperId: string): Promise<{ paper: PaperInfo }> {
    return { paper: papers[0] };
  }

  async scorePaper(paperId: string, score: number) {

  }


  async getPaperStar(paperId: string): Promise<{ stars: number; stared: boolean }> {
    return { stars: 9, stared: Math.random() < 0.5 };
  }

  async getPaperScore(paperId: string): Promise<{ score: number; myScore: number }> {
    return { score: 8, myScore: Math.random() < 0.5 ? 4 : -1 };
  }

  async getPaperComments(paperId: string): Promise<{ comments: PaperComment[] }> {
    await sleepMs(1000);
    return { comments };
  }


  async starPaper(paperId: string, operation: "star" | "unstar") {

  }

  async commentPaper(paperId: string, commentContent: string) {

  }

  async getPaperRefGraph(paperId: string): Promise<{ refs: PaperRef }> {
    return {
      refs:
        {
          type: "published",
          doi: "10.1145/3210459.3210469",
          content: "123",
          refs: [        {
            type: "chainpaper",
            title: "Environment paper",
            content: "content 1",
            paperId: "123",
            refs: [
              {
                type: "chainpaper",
                title: "Environment paper",
                content: "content 1",
                paperId: "456",
                refs: [
                  {
                    type: "chainpaper",
                    title: "Environment paper",
                    content: "content 1",
                    paperId: "4929",
                    refs: []
                  }]
              }
            ]
          },],
        },


    };
  }
}
