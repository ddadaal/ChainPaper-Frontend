import React, { useState } from "react";
import { RouteComponentProps, navigate } from "@reach/router";
import FunctionLayout from "../../layouts/FunctionLayout";
import { getApiService } from "../../apis";
import { PaperService } from "../../apis/paper/PaperService";
import Loading from "../../components/Loading";
import Query from "../../apis/Query";

import LatexViewer from "../../components/LatexViewer";
import { Row, Col } from "antd";
import ControlPanel from "./ControlPanel";
import styled from "styled-components";

const HeightLimited = styled.div`
  max-height: 75vh;
  overflow: auto;
  outline: 1px solid lightgray;
  padding: 4px;
`;

const PaperDetailPage: React.FunctionComponent<RouteComponentProps> = (props: any) => {
  const paperService = getApiService(PaperService);

  const getDetail = async () => {
    const data = await paperService.getPaper(props.paperId);
    return data.paper;
  };

  return (
    <FunctionLayout>
      <Query call={getDetail} key={props.paperId}>
        {(data, loading) => {
          if (loading) {
            return <Loading />;
          }

          return (
            <Row gutter={8}>
              <Col lg={16}>
                <HeightLimited>
                  <LatexViewer paper={data.paper} />
                </HeightLimited>
              </Col>
              <Col lg={8}>
                <ControlPanel paper={data} />
              </Col>
            </Row>
          );
        }}
      </Query>
    </FunctionLayout>
  );
};
export default PaperDetailPage;
