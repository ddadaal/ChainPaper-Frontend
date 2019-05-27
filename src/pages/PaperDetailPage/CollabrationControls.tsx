import React, { useState } from "react";
import { useStore } from "simstate";
import { UserStore } from "../../stores/UserStore";
import { Button, Divider, message, Modal, AutoComplete, Input, Descriptions } from "antd";
import { PaperInfo } from "../../models/paper";
import { getApiService } from "../../apis";
import { CollabrationService } from "../../apis/collabration/CollabrationService";
import { UserService } from "../../apis/user/UserService";
import Query from "../../apis/Query";
import Loading from "../../components/Loading";
import { navigate } from "@reach/router";
import ContributorAvatar from "../../components/ContributorAvatar";

interface Props {
  paperInfo: PaperInfo;
}

const collabrationService = getApiService(CollabrationService);
const userService = getApiService(UserService);


const CollabrationControls: React.FC<Props> = ({ paperInfo }) => {
  const userStore = useStore(UserStore);
  const [invitationShow, setInvitationShow] = useState(false);

  const { user } = userStore.state;

  if (!user) {
    return <div>请先登录！</div>;
  }

  return (
    <Query call={() => userService.getUserInfo(user.username)}>
      {(userInfo, loading, _, refetch) => {
        if (loading) {
          return <Loading />;
        }

        const canEdit = paperInfo.authors.includes(user.userId);

        return (
          <div>
            <Button type="primary" disabled={!canEdit} onClick={() => {
              navigate(`/papers/${paperInfo.paperId}/edit`);
            }}>
              编辑{canEdit ? "" : "（请先申请成为合作者）"}
            </Button>
            <Divider type="vertical" />
            <Button onClick={() => {
              collabrationService.requestCollabration(paperInfo.paperId).then(() => {
                message.success("请求已发出！");
              });
            }} disabled={canEdit}>申请合作</Button>
            <Button onClick={() => {
              setInvitationShow(true)
            }} disabled={user.userId !== paperInfo.authors[0]}>
              邀请合作者
            </Button>
            <InvitationModal
              show={invitationShow}
              close={() => setInvitationShow(false)}
              paperId={paperInfo.paperId}
              authors={paperInfo.authors}
            />
          </div>
        )
      }}
    </Query>
  )

};

export default CollabrationControls;

const InvitationModal: React.FC<{ show: boolean; close(): void; paperId: string; authors: string[]; }> = (props) => {

  const [input, setInput] = useState("");

  return (
    <Modal
      visible={props.show}
      onOk={props.close}
      onCancel={props.close}
      destroyOnClose={true}
      title={"邀请合作者"}
    >
      <AutoComplete
        dataSource={["1", "2", "3"]}
        value={input}
        onChange={(e) => setInput(e as string)}
      >
      </AutoComplete>
      <Button type="primary" size="large" onClick={() => {
        collabrationService.inviteCollabration(props.paperId, input).then(() => message.success("邀请成功!"))
      }}>
        邀请
      </Button>
      <Descriptions title="文章信息">
        <Descriptions.Item label="合作者">
          {props.authors.map((author) => <ContributorAvatar key={author} userId={author} />) as any}
        </Descriptions.Item>
      </Descriptions>
    </Modal>
  )
};
