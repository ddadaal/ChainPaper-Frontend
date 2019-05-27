import React, { useState } from "react";
import { PaperInfo } from "../../models/paper";
import { Row, Col, Statistic, Icon, Rate, Spin, message } from "antd";
import { getApiService } from "../../apis";
import { PaperService } from "../../apis/paper/PaperService";
import Query from "../../apis/Query";
import CommentPanel from "./CommentPanel";
import CollabrationControls from "./CollabrationControls";
import styled from "styled-components";
import PaperMeta from "./PaperMeta";
import { useStore } from "simstate";
import { UserStore } from "../../stores/UserStore";

interface Props {
  paper: PaperInfo;
}

const paperService = getApiService(PaperService);

const StarStatistics = ({ paperId, readonly }) => {
  return (
    <Query call={() => paperService.getPaperStar(paperId)}>
      {(data, loading, _, refetch) => {
        return (
          <Spin spinning={loading}>
            <Statistic
              title="打星数"
              value={loading ? "" : data.stars}
              prefix={loading
                ? <Spin size="small" />
                : <Icon onClick={() => {
                  if (readonly) { return; }
                  if (data.stared) {
                    message.success("取消打星成功！");
                    paperService.starPaper(paperId, "unstar").then(refetch);
                  } else {
                    message.success("打星成功！");
                    paperService.starPaper(paperId, "star").then(refetch);
                  }
                }} type="star" theme={data.stared ? "filled" : undefined}
                />
              }
            />
          </Spin>

        )
      }}
    </Query>
  );

}

const ScoreStatistic = ({ paperId, readonly }) => {
  return (
    <Query call={() => paperService.getPaperScore(paperId)}>
      {(data, loading, _, refetch) => {
        return (
          <Spin spinning={loading}>
            <Statistic
              title="评分"
              value={loading ? "" : data.score}
              prefix={loading
                ? <Spin size="small" />
                : <Rate
                  disabled={readonly}
                  allowHalf={true}
                  defaultValue={data.score / 2}
                  onChange={(value) => {
                    message.success(`您打了${value * 2}分！打分成功！`);
                    paperService.scorePaper(paperId, value * 2).then(refetch);
                  }}
                />
              }
            />
          </Spin>
        )
      }}
    </Query>
  );

}

const Panel = styled.div`
  margin: 8px 0;
`;

const ControlPanel: React.FC<Props> = ({ paper }) => {
  const { paperId, comments } = paper;

  const userStore = useStore(UserStore);

  return (
    <div>
      <Panel>
        <PaperMeta paperInfo={paper} />
      </Panel>
      <Panel>
        <Row gutter={16}>
          <Col span={12}>
            <StarStatistics readonly={!userStore.state.loggedIn} paperId={paperId} />
          </Col>
          <Col span={12}>
            <ScoreStatistic readonly={!userStore.state.loggedIn} paperId={paperId} />
          </Col>
        </Row>
      </Panel>
      <Panel>
        <CollabrationControls paperInfo={paper} />
      </Panel>
      <Panel>
        <CommentPanel paperId={paperId} />
      </Panel>
    </div>
  )
};

export default ControlPanel;
