import React, { useState } from "react";
import { RouteComponentProps, navigate } from "@reach/router";
import { getApiService } from "../apis";
import { PaperService } from "../apis/paper/PaperService";
import PageLoading from "../components/PageLoading";
import Query from "../apis/Query";
import { message } from "antd";
import FunctionLayout from "../layouts/FunctionLayout";
import PaperRefGraph from "../components/PaperRefGraph";

// paperId
const PaperRefGraphPage: React.FunctionComponent<RouteComponentProps> = ({ paperId }: any) => {
  const paperService = getApiService(PaperService);

  return (
    <FunctionLayout>
      <Query call={() => {
        return paperService.getPaperRefGraph(paperId)
      }}>
        {(data, loading) => {
          if (loading) {
            return <PageLoading />;
          }
          return (
            <div>
              <PaperRefGraph refs={data.refs} />
            </div>
          )
        }}
      </Query>
    </FunctionLayout>
  );
};
export default PaperRefGraphPage;
