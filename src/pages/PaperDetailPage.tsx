import React, {useState} from "react";
import {RouteComponentProps, navigate} from "@reach/router";
import {Button, Input, Row, Col, Layout, Icon, Modal, Tabs, message} from "antd";
import LatexEditor from "../components/LatexEditor";
import RootLayout from "../layouts/RootLayout";
import {Steps} from 'antd';
import FunctionLayout from "../layouts/FunctionLayout";
import {getApiService} from "../apis";
import {PaperService} from "../apis/paper/PaperService";
import {Reference} from "../models/paper";
import Loading from "../components/Loading";
import Query from "../apis/Query";

import Latex from 'react-latex';
import LatexViewer from "../components/LatexViewer";

const PaperDetailPage: React.FunctionComponent<RouteComponentProps> = (props: any) => {
  const paperService = getApiService(PaperService);

  const getDetail = async () => {
    const data = await paperService.getPaper(props.paperId);
    return data.paper.paper
  };

  return (
    <FunctionLayout>
      <Query call={getDetail}>
        {(data, loading) => {
          if (loading) {
            return <Loading/>;
          }

          return (
            <div>
              <LatexViewer paper={data} />
            </div>
          );
        }}
      </Query>
    </FunctionLayout>
  );
};
export default PaperDetailPage;
