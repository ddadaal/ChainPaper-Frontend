import React from "react";
import BigContainer from "./BigContainer";
import { Tabs, Row, Col, Divider, Card, Table } from "antd";
import relations from "../../assets/names/relations.json";
import styled from "styled-components";

const { TabPane } = Tabs;

interface Props {

}

const imgSize = "48px";

const AvatarContainer = styled.div`
  display: inline-block;

  margin: 4px;
  width: ${imgSize};

  small {
    display: block;
  text-align: center;
  }

  img {
  width: ${imgSize};
  height: ${imgSize};

  :hover {
    transform: scale(2);
  }
    transition: transform .3s ease-in-out;
  }
`;

const Column = styled.div`
  // width: ${(props: { length: number }) => 100 / props.length}%;

  //min-width: 150px;

  //display: inline-grid;

  padding: 8px;

  #kind {
    display: inline-block;
    text-align: center;
  }

  float: top;

  //background-color: white;
  //
  #people {
        display: inline-block;
      text-align: center;
  }

  text-align: center;

`;

function Avatar({ name }: { name: string }) {
  return <AvatarContainer>
    <img src={require(`../../assets/names/people/${name}.jpg`)} />
    <small>{name}</small>
  </AvatarContainer>;
}

const ColumnContainer = styled.div`

`;

const columns = [
  {
    title: "模块",
    dataIndex: "kind",
    key: "kind",
    render: (val) => <h3 style={{ textAlign: "right", minWidth: "80px" }} key={val}>{val}</h3>,
  }, {
    title: "队员",
    dataIndex: "people",
    key: "people",
    render: (val) => val.map((x, i) => <Avatar name={x} key={`${x}-${i}`} />),
  },
];



const StyledTable = styled(Table)`
  margin: 0 auto;
  max-width: 1000px;

  thead {
    display: none !important;
  }
`

export default class TeamMembers extends React.PureComponent<Props, {}> {
  render() {

    return (
      < div style={{ paddingTop: "20px", paddingBottom: "40px", backgroundColor: "#ffffff" }
      }>
        <BigContainer title={"人员分工"}>
          <Tabs defaultActiveKey="0" tabBarStyle={{ textAlign: "center" }}>
            {Object.keys(relations).map((tab, i) => {
              const data = relations[tab];
              const arrayData = Object.keys(data).map((x) => ({ kind: x, people: data[x] }));
              const dataLength = Object.keys(data).length;
              return <TabPane key={i + ""} tab={tab}  >
                <StyledTable bordered={true} pagination={false}
                  dataSource={arrayData}
                  columns={columns}
                />
              </TabPane>;
            })}
          </Tabs>
        </BigContainer></div >
    );
  }
}
