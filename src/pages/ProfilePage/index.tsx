import React from "react";
import { RouteComponentProps } from "@reach/router";
import { useStore } from "simstate";
import styled from "styled-components";
import { Statistic } from "antd";
import ProfilePage from "./ProfilePage";
import { UserStore } from "../../stores/UserStore";
import { getApiService } from "../../apis";
import { UserService } from "../../apis/user/UserService";
import Query from "../../apis/Query";
import Loading from "../../components/Loading";
import FunctionLayout from "../../layouts/FunctionLayout";

const Container = styled.div`
  max-width: 1000px;

  margin: 0 auto;
`;

const Profile: React.FC<RouteComponentProps> = (props) => {
  const userStore = useStore(UserStore);

  let content;

  if (!userStore.state.loggedIn) {
    content = "请登录！";
  } else {
    content = (
      <Query call={() => getApiService(UserService).getUserInfo(userStore.state.user!!.username)}>
        {(data, loading) => {
          if (loading) {
            return <Loading />;
          }

          return (
            <ProfilePage userInfo={data} />
          );
        }}
      </Query>
    );
  }

  return (
    <FunctionLayout>
      <Container>
        {content}
      </Container>
    </FunctionLayout>
  )
};

export default Profile;
