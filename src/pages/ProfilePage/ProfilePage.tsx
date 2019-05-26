import React from "react";
import { UserInfo } from "../../models/user";
import { Statistic, Row, Col } from "antd";

interface Props {
  userInfo: UserInfo;
}

const ProfilePage: React.FC<Props> = (props) => {
  const { userInfo } = props;

  return (
    <div>
      <Row gutter={16}>
        <Col md={8}>
          <Statistic title="用户ID" value={userInfo.userId} />
        </Col>
        <Col md={8}>
          <Statistic title="用户名" value={userInfo.username} />
        </Col>
        <Col md={8}>
        <Statistic title="角色" value={userInfo.role} />
        </Col>
        <Col md={8}>
        <Statistic title="上传论文数" value={userInfo.papers.length} />
        </Col>
        <Col md={8}>
        <Statistic title="评分" value={userInfo.score} />
        </Col>
      </Row>

    </div>
  );
};

export default ProfilePage;
