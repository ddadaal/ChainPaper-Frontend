import React from "react";
import { useStore } from "simstate";
import { UserStore } from "../../stores/UserStore";
import { Button, Divider, message } from "antd";
import { PaperInfo } from "../../models/paper";
import { getApiService } from "../../apis";
import { CollabrationService } from "../../apis/collabration/CollabrationService";
import { UserService } from "../../apis/user/UserService";
import Query from "../../apis/Query";
import Loading from "../../components/Loading";
import { navigate } from "@reach/router";

interface Props {
  paperInfo: PaperInfo;
}

const collabrationService = getApiService(CollabrationService);
const userService = getApiService(UserService);


const CollabrationControls: React.FC<Props> = ({ paperInfo }) => {
  const userStore = useStore(UserStore);

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

            }} disabled={user.userId !== paperInfo.authors[0]}>
              邀请合作者
            </Button>
          </div>
        )
      }}
    </Query>
  )

};

export default CollabrationControls;
