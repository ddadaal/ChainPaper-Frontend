import React from "react";
import { Modal, List } from "antd";
import Query from "../../apis/Query";
import { getApiService } from "../../apis";
import { PaperService } from "../../apis/paper/PaperService";
import PaperListItem from "../../components/PaperList/PaperListItem";
import { PaperInfo } from "../../models/paper";

interface Props {
  papers: PaperInfo[];
  show: boolean;
  close(): void;
}

const paperService = getApiService(PaperService);

const PaperModal: React.FC<Props> = (props) => {
  return (
    <Modal visible={props.show} title={"我发的论文"} onCancel={props.close} onOk={props.close}>
      <List
        dataSource={props.papers}
        pagination={{ pageSize: 5 }}
        renderItem={(item) => <PaperListItem item={item} />}
      />
    </Modal >
  )
};

export default PaperModal;
