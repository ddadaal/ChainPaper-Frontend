import React, { useState } from "react";
import { PaperInfo } from "../../models/paper";

import { Descriptions, Avatar, Tooltip, Button, Modal } from "antd";
import ContributorAvatar from "../../components/ContributorAvatar";
import PaperRefGraph from "../../components/PaperRefGraph";
import { getApiService } from "../../apis";
import { PaperService } from "../../apis/paper/PaperService";
import Query from "../../apis/Query";
import Loading from "../../components/Loading";

const DescriptionsItem = Descriptions.Item;


interface Props {
  paperInfo: PaperInfo;
}

const paperService = getApiService(PaperService);

const GraphModal = ({ show, close, basePaperId }) => {
  return (
    <Modal visible={show} onCancel={close} onOk={close} destroyOnClose={true}>
      <Query call={() => paperService.getPaperRefGraph(basePaperId)}>
        {(data, loading) => {
          if (loading) { return <Loading />; }
          return <PaperRefGraph refs={data.refs} />
        }}
      </Query>
    </Modal>
  )
}

const PaperMeta = ({ paperInfo }: Props) => {

  const [refGraphShow, setRefGraphShow] = useState(false);

  return (
    <div>
      <Descriptions title="文章信息">
        <DescriptionsItem label="合作者">
          {paperInfo.authors.map((author) => <ContributorAvatar key={author} userId={author} />) as any}
        </DescriptionsItem>
        <DescriptionsItem label="上传时间">
          <span>{paperInfo.uploadTime}</span>
        </DescriptionsItem>
        <DescriptionsItem label="引用数">
          <a title="查看引用图" onClick={() => setRefGraphShow(true)}>{paperInfo.paper.refs.length}</a>
        </DescriptionsItem>
      </Descriptions>
      <GraphModal show={refGraphShow} close={() => setRefGraphShow(false)} basePaperId={paperInfo.paperId} />
    </div>
  )
}

export default PaperMeta;
