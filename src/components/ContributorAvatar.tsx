import React from "react";
import { Tooltip, Avatar } from "antd";

interface Props {
  userId: string;
}

const ContributorAvatar = ({ userId }: Props) => {
  return (
    <Tooltip title={userId}>
      <Avatar>{userId}</Avatar>
    </Tooltip>
  );
}

export default ContributorAvatar;

