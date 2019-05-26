import React from "react";
import { getApiService } from "../../apis";
import { CollabrationService } from "../../apis/collabration/CollabrationService";
import Query from "../../apis/Query";
import { Table } from "antd";

interface Props {
  requestIds: string[];
}

const collabrationService = getApiService(CollabrationService);



const CollabrationRequestTable: React.FC<Props> = (props) => {

  return (
    <Query call={() => Promise.all(props.requestIds.map((id) => (
      collabrationService.getCollabrationRequestInfo(id)
    )))}>
      {(data, loading, _, refetch) => {


        const columns = [
          { title: "请求ID", dataIndex: "collabrationRequestId", key: "collabrationRequestId" },
          { title: "时间", dataIndex: "time", key: "time" },
          { title: "请求者", dataIndex: "requesterId", key: "requesterId" },
          { title: "文章ID", dataIndex: "paperId", key: "paperId" },
          {
            title: "操作", key: "actions", render: (text, record) => {
              console.log(text);
              return (
                <a key={"accept"} onClick={() => {
                  console.log("123");
                  collabrationService.acceptCollabrationRequest(record.collabrationRequestId);
                  refetch();
                }}>接受</a>
              )

            }
          }
        ];

        return (
          <Table
            dataSource={data || []}
            loading={loading}
            columns={columns}
          />
        );
      }}
    </Query>
  )
};

export default CollabrationRequestTable;
