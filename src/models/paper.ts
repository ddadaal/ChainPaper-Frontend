export type Reference = ({
  type: "published",
  doi: string;
} | {
  type: "chainpaper",
  paperId: string;
}) & { content?: string };

export type PaperDraft = {
  title: string;
  refs: Reference[];
  keywords: string;
  abstractContent: string;
  introduction: string;
  content: string;
  conclusion: string;
  acknowledgement: string;
}

export type PaperComment = {
  userId: string;
  time: string; // Unix UTC时间戳
  content: string;
  stars: number; // 赞数
}

export type PaperInfo = {
  paperId: string;
  authors: string[]; // 0是上传者
  paper: PaperDraft;
  uploadTime: string; // Unix UTC时间戳
  score: number; // 10分满分
  stars: number; // Star数
  comments: PaperComment[]; // 评论数量
  state: "open" | "submitted"; // 开放可评论；已提交
}

export type PaperRef = Reference & { title: string; refs: PaperRef[] };

