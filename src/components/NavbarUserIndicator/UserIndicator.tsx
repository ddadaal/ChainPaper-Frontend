import React, { useState } from "react";
import { Dropdown, Avatar, Icon, Menu } from "antd";
import MediaQuery from "react-responsive";
import { useStore } from "simstate";
import { UserStore } from "../../stores/UserStore";
import { Link } from "@reach/router";
import { layoutConstants } from "../../layouts/constants";
import { DEFAULT_AVATAR } from "../../utils";

interface Props {

}


const UserIndicator: React.FunctionComponent<Props> = () => {
  const userStore = useStore(UserStore);

  const dropdownMenu = (
    <Menu>
      <Menu.Item key="self">
        <Link to={"/profile"}>个人中心</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">
        <a onClick={userStore.logout}>登出</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={dropdownMenu} trigger={["click"]}>
      <a className="ant-dropdown-link">
        <Avatar size="default" src={DEFAULT_AVATAR} />
        <MediaQuery minWidth={layoutConstants.menuBreakpoint}>
          <span style={{ marginLeft: "8px" }}>
            欢迎：{userStore.state.user!!.username}
            <Icon type="down" />
          </span>
        </MediaQuery>
      </a>
    </Dropdown>
  );
};

export default UserIndicator;
