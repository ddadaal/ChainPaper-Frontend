import React, { useState } from "react";
import { PaperInfo, PaperRef } from "../../models/paper";

import { Descriptions, Avatar, Tooltip, Button, Modal, Divider } from "antd";
import ContributorAvatar from "../../components/ContributorAvatar";
import PaperRefGraph from "../../components/PaperRefGraph";
import { getApiService } from "../../apis";
import { PaperService } from "../../apis/paper/PaperService";
import Query from "../../apis/Query";
import Loading from "../../components/Loading";
import { navigate } from "@reach/router";

const DescriptionsItem = Descriptions.Item;


function selectionString(ref: PaperRef) {
  if (ref.type === "chainpaper") {
    return "本系统的文章: " + ref.paperId;
  } else {
    return "已发表文章, DOI: " + ref.doi;
  }
}

interface Props {
  paperInfo: PaperInfo;
}

const paperService = getApiService(PaperService);

const GraphModal = ({ show, close, basePaperId }) => {
  const [selected, setSelected] = useState<PaperRef | null>(null);

  return (
    <Modal title="引用树" visible={show} onCancel={close} onOk={() => {
      if (selected) {
        if (selected.type === "chainpaper") {
          navigate(`/papers/${selected.paperId}`);
          close();
        } else {
          console.log(selected.doi);
          window.open(`https://doi.org/${selected.doi}`);
        }
      }
    }} okText={"进入文章界面"} okButtonDisabled={!selected} destroyOnClose={true}
    >

      <div>

      <Query call={() => paperService.getPaperRefGraph(basePaperId)}>
        {(data, loading) => {
          if (loading) { return <Loading />; }
          console.log(data);
          return <PaperRefGraph refs={data.refs.refs} onSelect={(ref) => setSelected(ref)} />
        }}
      </Query>
      </div>
      <Divider />
      <div>
      <p style={{ float: "left"}}>已选择: {selected ? selectionString(selected) : ""}</p>
      </div>
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
