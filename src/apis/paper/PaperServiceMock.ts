import {PaperService, PaperIdResponse, PaperListResponse} from "./PaperService";
import {PaperDraft, PaperInfo} from "../../models/paper";
import {HttpMethod} from "../HttpService";

const papers: PaperInfo[] = [
  {
    paperId: "1", authors: ["123", "1"], paper: {
      title: "Bug Localization with Semantic and Structural Features using Convolutional Neural Network and Cascade Forest",
      refs: [{type: "published", doi: "10.1145/3210459.3210469"}, {
        type: "chainpaper",
        paperId: "2",
        content: "Poor H V. An introduction to signal detection and estimation[M]. Springer Science & Business Media, 2013."
      }],
      keywords: "case study",
      abstractContent: "Background: Correctly localizing buggy ﬁles for bug reports together with their semantic and structural information is a crucial task, which would essentially improve the accuracy of bug localization techniques. Aims: To empirically evaluate and demonstrate the eﬀects of both semantic and structural information in bug reports and source ﬁles on improving the performance of bug localization, we propose CNN Forest involving convolutional neural network and ensemble of random forests that have excellent performance in the tasks of semantic parsing and structural information extraction. Method: We ﬁrst employ convolutional neural network with multiple ﬁlters and an ensemble of random forests with multi-grained scanning to extract semantic and structural features from the word vectors derived from bug reports and source ﬁles. And a subsequent cascade forest (a cascade of ensembles of random forests) is used to further extract deeper features and observe the correlated relationships between bug reports and source ﬁles. CNN Forest is then empirically evaluated over 10,754 bug reports extracted from AspectJ, Eclipse UI, JDT, SWT, and Tomcat projects. Results: The experiments empirically demonstrate the signiﬁcance of including semantic and structural information in bug localization, and further show that the proposed CNN Forest achieves higher Mean Average Precision and Mean Reciprocal Rank measures than the best results of the four current state-of-the-art approaches (NPCNN, LR+WE, DNNLOC, and BugLocator). Conclusion: CNN Forest is capable of deﬁning the correlated relationships between bug reports and source ﬁles, and we empirically show that semantic and structural information in bug reports and source ﬁles are crucial in improving bug localization.",
      introduction: "123",
      content: "string",
      conclusion: "1321",
      acknowledgement: "1232132121",
    },
    uploadTime: "1231232131", score: 10, stars: 10, comments: [
      {userId: "2", time: "1232132132131", content: "好！", stars: 10},
      {userId: "3", time: "1232142141", content: "好！！！", stars: 4},
    ],
    state: "open",
  }
];

export class PaperServiceMock extends PaperService {
  async uploadPaper(paperDraft: PaperDraft): Promise<PaperIdResponse> {
    return {paperId: "123"};
  }

  async modifyPaper(paperId: string, paperDraft: PaperDraft): Promise<PaperIdResponse> {
    return {paperId: "123"};
  }

  async getPapers(): Promise<{ papers: PaperInfo[] }> {
    return {papers};
  }

  async getPaper(paperId: string): Promise<{ paper: PaperInfo }> {
    return {paper: papers[0]};
  }

  async scorePaper(paperId: string, score: number) {

  }

  async starPaper(paperId: string, operation: "star" | "unstar") {

  }

  async commentPaper(paperId: string, commentContent: string) {

  }
}
