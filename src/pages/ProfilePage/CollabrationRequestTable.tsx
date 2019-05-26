import React from "react";
import { getApiService } from "../../apis";
import { CollabrationService } from "../../apis/collabration/CollabrationService";
import Query from "../../apis/Query";
import { Table } from "antd";
import { Link } from "@reach/router";

interface Props {
  requestIds: string[];
  refetch(): void;
}

const collabrationService = getApiService(CollabrationService);



const CollabrationRequestTable: React.FC<Props> = (props) => {

  return (
    <Query call={() => Promise.all(props.requestIds.map((id) => (
      collabrationService.getCollabrationRequestInfo(id)
    )))}>
      {(data, loading, _) => {


        const columns = [
          { title: "请求ID", dataIndex: "collabrationRequestId", key: "collabrationRequestId" },
          { title: "时间", dataIndex: "time", key: "time" },
          { title: "请求者", dataIndex: "requesterId", key: "requesterId" },
          {
            title: "文章ID", key: "paperId", render: (text, record) => (
              <Link key="paperId" to={`/papers/${record.paperId}`}>{record.paperId}</Link>
            )
          },
          {
            title: "操作", key: "actions", render: (text, record) => {
              return (
                <a key={"accept"} onClick={() => {
                  collabrationService.acceptCollabrationRequest(record.collabrationRequestId).then(() => {
                    props.refetch();
                  });
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
