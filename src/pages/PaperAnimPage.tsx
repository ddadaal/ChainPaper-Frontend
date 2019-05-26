import React, {useState} from "react";
import {RouteComponentProps, navigate} from "@reach/router";
import {getApiService} from "../apis";
import {PaperService} from "../apis/paper/PaperService";
import PageLoading from "../components/PageLoading";
import Query from "../apis/Query";
import {message} from "antd";
import FunctionLayout from "../layouts/FunctionLayout";

// paperId
const PaperAnimPage: React.FunctionComponent<RouteComponentProps> = ({paperId}: any) => {
  this.canvas = React.createRef();
  const paperService = getApiService(PaperService);

  return (
    <FunctionLayout>
      <Query call={() => {
        return paperService.getPaper(paperId)
      }}>
        {(data, loading) => {
          if (loading) {
            return <PageLoading/>;
          }
          return (
            <div>
            </div>
          )
        }}
      </Query>
    </FunctionLayout>
  );
};
export default PaperAnimPage;
