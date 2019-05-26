import React from "react";
import { RouteComponentProps, Link } from "@reach/router";
import { Typography, Divider, List, Avatar } from "antd";
import Loading from "../components/Loading";
import { getApiService } from "../apis";
import { PaperService } from "../apis/paper/PaperService";
import Query from "../apis/Query";
import { limitLength } from "../utils";
import FunctionLayout from "../layouts/FunctionLayout";

const { Title, Paragraph } = Typography;

interface Props extends RouteComponentProps {

}

const getList = async () => {
  const paperService = getApiService(PaperService);
  const data = await paperService.getPapers();

  return data.papers;
}

const ExplorePage: React.FunctionComponent<Props> = () => {
  return (
    <FunctionLayout>
      <Typography>
        <Title>探索</Title>
        <Paragraph>探索好的新文章</Paragraph>
        <Divider />
        <Query call={getList}>
          {(data, loading) => {
            if (loading) {
              return <Loading />;
            }

            return (
              <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => (
                  <List.Item.Meta
                    title={<Link to={`/papers/${item.paperId}`}>{limitLength(item.paper.abstractContent)}</Link>}
                    description={limitLength(item.paper.abstractContent, 150)}
                  />
                )}
              />

            );
          }}
        </Query>

      </Typography>

    </FunctionLayout>
  )
};

export default ExplorePage;
