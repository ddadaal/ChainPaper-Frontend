import React from "react";
import { getApiService } from "../../apis";
import { CollabrationService } from "../../apis/collabration/CollabrationService";
import Query from "../../apis/Query";
import { Table } from "antd";
import { Link } from "@reach/router";

interface Props {
  invitationIds: string[];
  refetch(): void;
}

const collabrationService = getApiService(CollabrationService);

const CollabrationInvitationTable: React.FC<Props> = (props) => {

  return (
    <Query call={() => Promise.all(props.invitationIds.map((id) => (
      collabrationService.getCollabrationInvitationInfo(id)
    )))}>
      {(data, loading, _) => {


        const columns = [
          { title: "邀请ID", dataIndex: "collabrationInvitationId", key: "collabrationInvitationId" },
          { title: "时间", dataIndex: "time", key: "time" },
          { title: "邀请者", dataIndex: "inviterId", key: "inviterId" },
          {
            title: "文章ID", key: "paperId", render: (text, record) => (
              <Link key="paperId" to={`/papers/${record.paperId}`}>{record.paperId}</Link>
            )
          },
          {
            title: "操作", key: "actions", render: (text, record) => {
              return (
                <a onClick={() => {
                  collabrationService.acceptCollabrationInvitation(record.collabrationInvitationId).then(() => {
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
  return <div />;
};

export default CollabrationInvitationTable;
