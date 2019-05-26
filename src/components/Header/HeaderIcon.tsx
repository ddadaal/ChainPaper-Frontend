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

  padding: 0 8px;

  height: ${layoutConstants.headerHeight}px;

  display: flex;
  align-items: center;
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
