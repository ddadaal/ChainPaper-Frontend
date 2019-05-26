import React, { useState } from "react";
import { RouteComponentProps, navigate } from "@reach/router";
import Wizard from "./PaperEditing/Wizard";
import { getApiService } from "../apis";
import { PaperService } from "../apis/paper/PaperService";
import PageLoading from "../components/PageLoading";
import Query from "../apis/Query";
import { message } from "antd";

// paperId
const PaperEditPage: React.FunctionComponent<RouteComponentProps> = ({ paperId }: any) => {
  const paperService = getApiService(PaperService);
  return (
    <Query call={() => paperService.getPaper(paperId)}>
      {(data, loading) => {
        if (loading) {
          return <PageLoading />;
        }

        return <Wizard paperDraft={data.paper.paper} onSubmit={(draft) => {
          paperService.modifyPaper(paperId, draft).then(() => {
            message.success("编辑成功!");
            navigate(`/papers/${paperId}`);
          });
        }} />
      }}
    </Query>
  );
};
export default PaperEditPage;
