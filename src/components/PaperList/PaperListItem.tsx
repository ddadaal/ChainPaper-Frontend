import React from "react";
import { List, Icon } from "antd";
import { PaperInfo } from "../../models/paper";
import { limitLength } from "../../utils";
import { Link } from "@reach/router";

interface Props {
  item: PaperInfo;
}

const IconText = ({ type, text }: { type: string; text: React.ReactNode; }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const PaperListItem: React.FC<Props> = ({ item }) => (
  <List.Item
    actions={[
      <IconText type="star-o" text={item.stars} />,
      <IconText type="message" text={item.comments.length} />,
    ]}
  >
    <List.Item.Meta
      title={<Link to={`/papers/${item.paperId}`}>{limitLength(item.paper.abstractContent)}</Link>}
      description={`${item.authors.join(", ")} | ${item.uploadTime}`}
    >
    </List.Item.Meta>
    {limitLength(item.paper.abstractContent, 300)}

  </List.Item>
);

export default PaperListItem;
