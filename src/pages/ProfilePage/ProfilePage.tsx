import React, { useState } from "react";
import { UserInfo } from "../../models/user";
import { Statistic, Row, Col, Descriptions } from "antd";
import styled from "styled-components";
import CollabrationRequestTable from "./CollabrationRequestTable";
import CollabrationInvitationTable from "./CollabrationInvitationTable";
import PaperModal from "./PapersModal";

const DescriptionItem = Descriptions.Item;

interface Props {
  userInfo: UserInfo;
  refetch(): void;
}

const Title = styled.h4`
margin: 20px 0;
    color: rgba(0, 0, 0, 0.85);
    font-weight: bold;
    font-size: 16px;
    line-height: 1.5;
`;

const ProfilePage: React.FC<Props> = (props) => {
  const { userInfo } = props;
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <div>

        <Descriptions title="用户信息" bordered>
          <DescriptionItem label="用户ID"><span>{userInfo.userId}</span></DescriptionItem>
          <DescriptionItem label="用户名"><span>{userInfo.username}</span></DescriptionItem>

          <DescriptionItem label="角色"><span>{userInfo.role}</span></DescriptionItem>
          <DescriptionItem label="上传论文数">
            <a onClick={() => setModalShow(true)}>
              {userInfo.paperIds.length}
            </a>
          </DescriptionItem>
          <DescriptionItem label="评分"><span>{userInfo.score}</span></DescriptionItem>

        </Descriptions>
        <PaperModal paperIds={userInfo.paperIds} show={modalShow} close={() => setModalShow(false)} />
      </div>
      <div>
        <Title>
          我收到的合作请求
        </Title>
        <CollabrationRequestTable refetch={props.refetch} requestIds={userInfo.collabrationRequestIds} />
      </div>
      <div>
        <Title>
          我收到的合作邀请
        </Title>
        <CollabrationInvitationTable refetch={props.refetch} invitationIds={userInfo.collabrationInvitationIds} />
      </div>

      {/* <Row gutter={16}>
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
      </Row> */}

    </div>
  );
};

export default ProfilePage;
