import React from "react";
import { PaperInfo } from "../../models/paper";

import { Descriptions, Avatar, Tooltip } from "antd";

const DescriptionsItem = Descriptions.Item;


interface Props {
  paperInfo: PaperInfo;
}

const Author = ({ userId }) => {
  return (
    <Tooltip title={userId}>
      <Avatar>{userId}</Avatar>
    </Tooltip>
  );
}

const PaperMeta = ({ paperInfo }: Props) => {
  return (
    <Descriptions title="文章信息">
      <DescriptionsItem label="合作者">
        {paperInfo.authors.map((author) => <Author key={author} userId={author} />) as any}
      </DescriptionsItem>
      <DescriptionsItem label="上传时间">
        {paperInfo.uploadTime as any}
      </DescriptionsItem>
    </Descriptions>
  )
}

export default PaperMeta;
