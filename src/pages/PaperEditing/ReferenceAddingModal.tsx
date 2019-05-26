import React, { useState } from "react";
import { Modal, Input, message, Tabs } from "antd";
import { Reference } from "../../models/paper";
import { getApiService } from "../../apis";
import { PaperService } from "../../apis/paper/PaperService";

const TabPane = Tabs.TabPane;

interface Props {
  show: boolean;
  onAdd(ref: Reference): void;
  close(): void;
}

const ReferenceAddingModal: React.FC<Props> = (props) => {
  const paperService = getApiService(PaperService);

  const [paperId, setPaperId] = useState("");
  const [doi, setDoi] = useState("");
  const [type, setType] = useState("published");

  return (
    <Modal
      title="添加文献"
      visible={props.show}
      onOk={async () => {
        if (type === "published") {
          props.onAdd({ type: "published", doi });
        } else if (type === "chainpaper") {
          try {
            const data = await paperService.getPaper(paperId);
            props.onAdd({
              type: "chainpaper",
              paperId: paperId,
              content: data.paper.authors.join(",") + ":" + data.paper.paper.title + "," + data.paper.uploadTime
            });
          } catch (e) {
            message.error("无该论文");
          }
        }
        props.close();
      }}
      onCancel={() => {
        props.close();
      }}>
      <Tabs defaultActiveKey="published" onChange={(activeKey) => {
        setType(activeKey);
      }}>
        <TabPane tab="已发表论文" key="published">
          <Input placeholder="输入doi" value={doi} onChange={(e) => {
            setDoi(e.target.value)
          }} />
        </TabPane>
        <TabPane tab="本平台论文" key="chainpaper">
          <Input placeholder="输入论文号" value={paperId} onChange={(e) => {
            setPaperId(e.target.value)
          }} />
        </TabPane>
      </Tabs>
    </Modal>
  );
}

export default ReferenceAddingModal;
