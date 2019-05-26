import React from "react";
import { PaperInfo } from "../../models/paper";

import { Descriptions, Avatar, Tooltip } from "antd";
import ContributorAvatar from "../../components/ContributorAvatar";

const DescriptionsItem = Descriptions.Item;


interface Props {
  paperInfo: PaperInfo;
}

const PaperMeta = ({ paperInfo }: Props) => {
  return (
    <Descriptions title="文章信息">
      <DescriptionsItem label="合作者">
        {paperInfo.authors.map((author) => <ContributorAvatar key={author} userId={author} />) as any}
      </DescriptionsItem>
      <DescriptionsItem label="上传时间">
        {paperInfo.uploadTime as any}
      </DescriptionsItem>
    </Descriptions>
  )
}

export default PaperMeta;
