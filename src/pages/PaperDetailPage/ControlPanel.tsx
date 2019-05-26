import React, { useState } from "react";
import { PaperInfo } from "../../models/paper";
import { Row, Col, Statistic, Icon, Rate, Spin, message } from "antd";
import { getApiService } from "../../apis";
import { PaperService } from "../../apis/paper/PaperService";
import Query from "../../apis/Query";
import CommentPanel from "./CommentPanel";

interface Props {
  paper: PaperInfo;
}

const paperService = getApiService(PaperService);

const StarStatistics = ({ paperId }) => {
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

const ScoreStatistic = ({ paperId }) => {
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
                : <Rate allowHalf={true} defaultValue={data.score / 2} onChange={(value) => {
                  message.success("打分成功！");
                  console.log(value);
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

const ControlPanel: React.FC<Props> = ({ paper }) => {
  const { paperId, comments } = paper;


  return (
    <div>
      <Row gutter={16}>
        <Col span={12}>
          <StarStatistics paperId={paperId} />
        </Col>
        <Col span={12}>
          <ScoreStatistic paperId={paperId} />
        </Col>
      </Row>
      <CommentPanel paperId={paperId} />
    </div>
  )
};

export default ControlPanel;
