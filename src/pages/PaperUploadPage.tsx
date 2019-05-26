import React, { useState } from "react";
import { RouteComponentProps, navigate } from "@reach/router";
import Wizard from "./PaperEditing/Wizard";
import { message } from "antd";
import { getApiService } from "../apis";
import { PaperService } from "../apis/paper/PaperService";

const PaperUploadPage: React.FunctionComponent<RouteComponentProps> = () => {
  const paperService = getApiService(PaperService);

  return (
    <Wizard paperDraft={null} onSubmit={async (paperDraft) => {
      try {
        const res = await paperService.uploadPaper(paperDraft);
        message.success("提交成功");
        navigate(`/papers/${res.paperId}`);
      } catch (e) {
        message.error("提交失败");
      }
    }} />
  );
};
export default PaperUploadPage;
