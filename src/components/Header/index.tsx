import React from "react";
import { Dropdown, Icon, Layout, Menu, Popover } from "antd";
import { NavbarUserIndicator } from "../NavbarUserIndicator";
import { mainNavs } from "./mainNavs";
import MediaQuery from "react-responsive";
import HeaderIcon from "./HeaderIcon";
import { layoutConstants } from "../../layouts/constants";
import styled from "styled-components";
import { Location, navigate } from "@reach/router";

const { Header: AntdHeader } = Layout;

interface Props {

}

export const MarginedDiv = styled.div`

  display: flex;
  align-items: center;
  & > * {
  margin-right: 4px;
  margin-left: 4px;
  //display: inline-block;
  }

  &:first-child {
    margin-left: 0px;
  }

  &:last-child {
  margin-right: 0px;
  }
`;

export const dropdownMenuStyle: React.CSSProperties = {
  width: "256px",
  textAlign: "center",
};

export const horizontalMenuStyle: React.CSSProperties = {
  lineHeight: `${layoutConstants.headerHeight}px`,
};


export const Head = styled(AntdHeader)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${layoutConstants.headerHeight}px;
  padding: 4px;
`;

export function HeaderNavMenu({ vertical, selectedKeys, to }:
  { vertical: boolean, selectedKeys: string[], to(path: string): void }) {
  return (
    <Menu theme={"dark"}
      mode={vertical ? "vertical" : "horizontal"}
      selectedKeys={selectedKeys}
      style={vertical ? dropdownMenuStyle : horizontalMenuStyle}>
      {mainNavs.map((x) =>
        <Menu.Item
          key={x.path}
          onClick={() => to(x.path)}>
          <Icon type={x.iconName} />
          {x.text}
        </Menu.Item>,
      )}
    </Menu>
  );
}

const Logo = styled.span`
  color: white;
`;

const Header: React.FunctionComponent = () => {
  return (
    <Location>
      {({ location }) => {
        const selectedKeys = mainNavs.filter((x) => x.match(location.pathname)).map((x) => x.path);

        return (
          <Head>
            <MarginedDiv>
              <Logo>ChainPaper</Logo>
            </MarginedDiv>
            <MarginedDiv>
              <MediaQuery minWidth={layoutConstants.menuBreakpoint}>
                {(matches) => matches
                  ? <>
                    <HeaderNavMenu vertical={false} selectedKeys={selectedKeys} to={navigate} />
                    <NavbarUserIndicator />
                  </>
                  : <>
                    <NavbarUserIndicator />

                    <Dropdown overlay={<HeaderNavMenu
                      vertical={true}
                      selectedKeys={selectedKeys}
                      to={navigate}
                    />}
                      trigger={["click"]}
                    >
                      <HeaderIcon type={"bars"} />
                    </Dropdown>
                  </>
                }
              </MediaQuery>
            </MarginedDiv>
          </Head>
        );
      }}
    </Location>
  );
}

export default Header;
