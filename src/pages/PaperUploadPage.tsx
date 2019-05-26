import React from "react";
import {RouteComponentProps, navigate} from "@reach/router";
import {Button, Input, Row, Col, Layout, Icon, Menu} from "antd";
import LatexEditor from "../components/LatexEditor";
import RootLayout from "../layouts/RootLayout";

const {Sider, Content} = Layout;
const {TextArea} = Input;

const PaperUploadPage: React.FunctionComponent<RouteComponentProps> = () => {
  return (
    <RootLayout>
      <Layout>
        <Sider style={{height: window.innerHeight}}>
          <div style={{
            height: '32px',
            background: 'rgba(255, 255, 255, 0.2)',
            margin: '16px'
          }}/>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart"/>
              <span>上传论文</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{background: '#fff', margin: '40px'}}>
            <div style={{textAlign: 'center', margin: '20px', marginTop: '40px'}}>
              <TextArea style={{fontFamily: 'SimHei', fontSize: '24px', textAlign: 'center', width: '50%'}}
                        placeholder="标题"
                        autosize/>
            </div>
            <div style={{textAlign: 'center', margin: '20px'}}>
              <div style={{marginLeft: '20%', marginRight: '20%'}}>
                <Row>
                  <Col span={3}>
                    <p style={{fontFamily: 'SimHei', fontSize: '18px', fontWeight: 'bold', display: 'inline-block'}}>摘
                      要</p>
                  </Col>
                  <Col span={21}>
                    <TextArea
                      style={{fontFamily: 'SimSun', fontSize: '14px', lineHeight: '20px', display: 'inline-block'}}
                      placeholder="中文摘要"
                      autosize/>
                  </Col>
                </Row>
              </div>
            </div>
            <div style={{textAlign: 'center', margin: '20px'}}>
              <div style={{marginLeft: '20%', marginRight: '20%'}}>
                <Row>
                  <Col span={3}>
                    <p style={{fontFamily: 'SimHei', fontSize: '18px', fontWeight: 'bold', display: 'inline'}}>关键词</p>
                  </Col>
                  <Col span={21}>
                    <TextArea
                      style={{
                        fontFamily: 'SimSun',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        lineHeight: '20px',
                        display: 'inline'
                      }}
                      placeholder="中文关键词"
                      autosize/>
                  </Col>
                </Row>
              </div>
            </div>

            <div style={{textAlign: 'center', margin: '20px'}}>
              <p style={{fontFamily: 'SimHei', fontSize: '18px', fontWeight: 'bold'}}>绪 论</p>
              <TextArea
                style={{fontFamily: 'SimSun', fontSize: '14px', textAlign: 'center', width: '60%', lineHeight: '20px'}}
                placeholder="绪论"
                autosize/>
            </div>

            <div style={{textAlign: 'center', margin: '20px'}}>
              <p style={{fontFamily: 'SimHei', fontSize: '18px', fontWeight: 'bold'}}>正 文</p>
              <TextArea
                style={{fontFamily: 'SimSun', fontSize: '14px', width: '60%', lineHeight: '20px'}}
                placeholder="正文"
                autosize/>
            </div>

            <div style={{textAlign: 'center', margin: '20px'}}>
              <p style={{fontFamily: 'SimHei', fontSize: '18px', fontWeight: 'bold'}}>结束语</p>
              <TextArea
                style={{fontFamily: 'SimSun', fontSize: '14px', textAlign: 'center', width: '60%', lineHeight: '20px'}}
                placeholder="结束语"
                autosize/>
            </div>

            <div style={{textAlign: 'center', margin: '20px'}}>
              <p style={{fontFamily: 'SimHei', fontSize: '18px', fontWeight: 'bold'}}>致 谢</p>
              <TextArea
                style={{fontFamily: 'SimSun', fontSize: '14px', textAlign: 'center', width: '60%', lineHeight: '20px'}}
                placeholder="致谢"
                autosize/>
            </div>

            <div style={{textAlign: 'center', margin: '20px'}}>
              <p style={{fontFamily: 'SimHei', fontSize: '18px', fontWeight: 'bold'}}>参考文献</p>
              <TextArea
                style={{fontFamily: 'SimSun', fontSize: '14px', width: '60%', lineHeight: '20px'}}
                placeholder="参考文献"
                autosize/>
            </div>
          </Content>
        </Layout>
      </Layout>
    </RootLayout>
  );
};
export default PaperUploadPage;
