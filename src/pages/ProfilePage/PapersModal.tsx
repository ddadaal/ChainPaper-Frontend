import React from "react";
import { Modal, List } from "antd";
import Query from "../../apis/Query";
import { getApiService } from "../../apis";
import { PaperService } from "../../apis/paper/PaperService";
import PaperListItem from "../../components/PaperList/PaperListItem";
import { PaperInfo } from "../../models/paper";

interface Props {
  paperIds: string[];
  show: boolean;
  close(): void;
}

const paperService = getApiService(PaperService);

const PaperModal: React.FC<Props> = (props) => {
  return (
    <Modal visible={props.show} title={"我发的论文"} onCancel={props.close} onOk={props.close}>
      <Query call={() => Promise.all(props.paperIds.map((id) => paperService.getPaper(id)))}>
        {(data, loading) => (
          <List
            dataSource={data}
            pagination={{ pageSize: 5 }}
            loading={loading}
            renderItem={(item) => <PaperListItem item={item.paper} />}
          />
        )}
      </Query>

    </Modal >
  )
};

export default PaperModal;
