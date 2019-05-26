import React, { useState } from "react";
import { Dropdown, Avatar, Icon, Menu } from "antd";
import MediaQuery from "react-responsive";
import { useStore } from "simstate";
import { UserStore } from "../../stores/UserStore";
import { Link } from "@reach/router";
import { layoutConstants } from "../../layouts/constants";

interface Props {

}

const DEFAULT_AVATAR = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540823688873&di=18f09cc1a41075294d1c12e67d178594&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F16%2F06%2F05%2F155753d94b715a2.jpg";

const UserIndicator: React.FunctionComponent<Props> = () => {
  const userStore = useStore(UserStore);

  const dropdownMenu = (
    <Menu>
      <Menu.Item key="self">
        <Link to={"/user"}>个人中心</Link>
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
