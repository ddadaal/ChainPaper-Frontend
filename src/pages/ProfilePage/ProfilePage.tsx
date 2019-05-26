import React, { useState, useCallback } from "react";
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
  const [uploadModalShow, setUploadModalShow] = useState(false);
  const [collabrationModalShow, setCollabrationModalShow] = useState(false);

  return (
    <div>
      <div>

        <Descriptions title="用户信息" bordered>
          <DescriptionItem label="用户ID"><span>{userInfo.userId}</span></DescriptionItem>
          <DescriptionItem label="用户名"><span>{userInfo.username}</span></DescriptionItem>

          <DescriptionItem label="角色"><span>{userInfo.role}</span></DescriptionItem>
          <DescriptionItem label="上传论文数">
            <a onClick={() => setUploadModalShow(true)}>
              {userInfo.paperIds.length}
            </a>
          </DescriptionItem>
          <DescriptionItem label="参与论文数">
            <a onClick={() => setCollabrationModalShow(true)}>
              {userInfo.paperIdsInCollabration.length}
            </a>
          </DescriptionItem>
          <DescriptionItem label="评分"><span>{userInfo.score}</span></DescriptionItem>

        </Descriptions>
        <PaperModal title="我上传的论文" paperIds={userInfo.paperIds} show={uploadModalShow} close={() => setUploadModalShow(false)} />
        <PaperModal title="我参与的论文" paperIds={userInfo.paperIdsInCollabration} show={collabrationModalShow} close={() => setCollabrationModalShow(false)} />

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
    </div>
  );
};

export default ProfilePage;
