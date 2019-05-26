import React from "react";
import { getApiService } from "../../apis";
import { CollabrationService } from "../../apis/collabration/CollabrationService";
import Query from "../../apis/Query";
import { Table } from "antd";

interface Props {
  invitationIds: string[];
}

const collabrationService = getApiService(CollabrationService);

const CollabrationInvitationTable: React.FC<Props> = (props) => {

  return (
    <Query call={() => Promise.all(props.invitationIds.map((id) => (
      collabrationService.getCollabrationInvitationInfo(id)
    )))}>
      {(data, loading, _, refetch) => {


        const columns = [
          { title: "邀请ID", dataIndex: "collabrationInvitationId", key: "collabrationInvitationId" },
          { title: "时间", dataIndex: "time", key: "time" },
          { title: "邀请者", dataIndex: "inviterId", key: "inviterId" },
          { title: "文章ID", dataIndex: "paperId", key: "paperId" },
          {
            title: "操作", key: "actions", render: (text, record) => {
              return (
                <a onClick={() => {
                  collabrationService.acceptCollabrationInvitation(record.collabrationInvitationId);
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
  return <div />;
};

export default CollabrationInvitationTable;
