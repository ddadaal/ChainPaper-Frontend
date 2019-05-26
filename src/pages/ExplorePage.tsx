import React from "react";
import { RouteComponentProps, Link } from "@reach/router";
import { Typography, Divider, List, Avatar, Icon } from "antd";
import Loading from "../components/Loading";
import { getApiService } from "../apis";
import { PaperService } from "../apis/paper/PaperService";
import Query from "../apis/Query";
import { limitLength } from "../utils";
import FunctionLayout from "../layouts/FunctionLayout";
import styled from "styled-components";
import PaperListItem from "../components/PaperList/PaperListItem";

const { Title, Paragraph } = Typography;

interface Props extends RouteComponentProps {

}

const getList = async () => {
  const paperService = getApiService(PaperService);
  const data = await paperService.getPapers();

  return data.papers;
}

const Results = styled.div`
  max-width: 1000px;

  margin: 0 auto;
`;

const ExplorePage: React.FunctionComponent<Props> = () => {
  return (
    <FunctionLayout>
      <Results>

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
                  size="large"
                  itemLayout="horizontal"
                  dataSource={data}

                  pagination={{ pageSize: 10 }}
                  renderItem={(item) => (

                    <PaperListItem item={item} />
                  )}
                />

              );
            }}
          </Query>

        </Typography>
      </Results>

    </FunctionLayout>
  )
};

export default ExplorePage;
