import React from "react";
import Particles from "./Particles";
import styled from "styled-components";
import Features from "./Features";
import Process from "./Process";
import background from "../../assets/background/1.png";
import { Row, Col, Divider, Button } from "antd";
import CenterContainer from "./CenterContainer";
import TeamMembers from "./TeamMembers";
import { UiStore } from "../../stores/UiStore";
import { UserStore } from "../../stores/UserStore";
import { layoutConstants } from "../../layouts/constants";
import { useStore } from "simstate";
import { navigate, RouteComponentProps } from "@reach/router";

interface Props {

}

const HomePageContainer = styled.div`
  min-height: 800px;
`;

const titleShowcaseHeight = 500;

const BannerContainer = styled.div`
  position: relative;
  height: ${titleShowcaseHeight}px;
  width: 100%;
  background-color: ${layoutConstants.headerBackgrounColor};
`;

const ParticlesContainer = styled.div`
  position: absolute;
  height: ${titleShowcaseHeight}px;
  width: 100%;

  z-index: 3;
`;

const BackgroundContainer = styled.div`
  position: absolute;
  height: ${titleShowcaseHeight}px;
  width: 100%;

  & > img {
    float: right;
    height: ${titleShowcaseHeight}px;

  }

  z-index: 1;
`;

const TitleShowcase = styled(CenterContainer)`
  height: ${titleShowcaseHeight}px;
  width: 100%;
  color: white;
  //z-index: 3;
`;

const TitleContent = styled.div`

  line-height: 48px;
  //text-align: center;

  padding: 16px;

  h1 {
    font-size: 32px;
  }
`;

const HomePage: React.FC<RouteComponentProps> = () => {
  const uiStore = useStore(UiStore);
  const userStore = useStore(UserStore);

  return (
    <HomePageContainer>
      <BannerContainer>
        <BackgroundContainer>
          <img src={background} />
        </BackgroundContainer>
        <ParticlesContainer>
          <Particles marginTop={layoutConstants.headerHeight}
            height={titleShowcaseHeight + layoutConstants.headerHeight}
          />
        </ParticlesContainer>
        <Row style={{ zIndex: 5 }}>
          <Col xs={24} md={12}>
            <TitleShowcase>
              <TitleContent>
                <h1 style={{ color: "white" }}>基于区块链的论文分享平台</h1>
                <h2 style={{ color: "white" }}>论文互动，版权保证</h2>
                <h2 style={{ color: "white" }}>Share your papers without worries</h2>
                <Button size={"large"} type={"primary"} onClick={() => {
                  if (userStore.state.loggedIn) {
                    navigate("/explore");
                  } else {
                    uiStore.toggleLoginModalShown();
                  }
                }}>
                  {userStore.state.loggedIn
                    ? "开始分享"
                    : "登录以开始分享"
                  }
                </Button>
              </TitleContent>
            </TitleShowcase>
          </Col>
        </Row>

      </BannerContainer>

      <Features />
      <Process />
      <TeamMembers />
    </HomePageContainer >
  );
}

export default HomePage;
