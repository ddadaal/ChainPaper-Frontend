import React from "react";
import { Icon } from "antd";
import { IconProps } from "antd/es/icon";
import styled from "styled-components";
import { layoutConstants } from "../../layouts/constants";

interface Props extends IconProps {
  onRightPadding?: boolean;
}

const HeaderItemContainer = styled.div`
  :hover {
    background-color: ${layoutConstants.headerIconBackgroundColor};
    cursor: pointer;
  }

  padding-left: 8px;
  padding-right: 8px;
`;

export const HeaderColoredIcon = styled(Icon)`
  color: ${layoutConstants.headerIconColor};
`;

export default function HeaderIcon(props: Props) {

  const { onClick, ...rest } = props;

  return (
    <HeaderItemContainer onClick={onClick}>
      <HeaderColoredIcon {...rest}/>
    </HeaderItemContainer>
  );
}
