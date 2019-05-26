import React, {useState} from "react";
import {RouteComponentProps, navigate} from "@reach/router";
import {Button, Input, Row, Col, Layout, Icon, Modal, Tabs, message} from "antd";
import LatexEditor from "../components/LatexEditor";
import RootLayout from "../layouts/RootLayout";
import {Steps} from 'antd';
import FunctionLayout from "../layouts/FunctionLayout";
import {getApiService} from "../apis";
import {PaperService} from "../apis/paper/PaperService";
import {Reference} from "../models/paper";
import Loading from "../components/Loading";
import Query from "../apis/Query";

const Latex = require('react-latex');

const PaperDetailPage: React.FunctionComponent<RouteComponentProps> = (props: any) => {
  const paperService = getApiService(PaperService);

  const getDetail = async () => {
    const data = await paperService.getPaper(props.paperId);
    return data.paper.paper
  };

  return (
    <FunctionLayout>
      <Query call={getDetail}>
        {(data, loading) => {
          if (loading) {
            return <Loading/>;
          }

          if (data) {
            return (
              <div>
                <div
                  style={{fontFamily: 'SimHei', fontSize: '24px', textAlign: 'center'}}>{data.title}</div>
                <div style={{margin: '20px'}}>
                  <div style={{marginLeft: '15%', marginRight: '15%'}}>
                    <Row>
                      <Col span={3}>
                        <p style={{
                          fontFamily: 'SimHei',
                          fontSize: '18px',
                          fontWeight: 'bold',
                          display: 'inline-block'
                        }}>摘 要</p>
                      </Col>
                      <Col span={21}>
                        <div
                          style={{
                            fontFamily: 'SimSun',
                            fontSize: '14px',
                            lineHeight: '20px',
                            display: 'inline-block'
                          }}>{data.abstractContent}</div>
                      </Col>
                    </Row>
                  </div>
                </div>
                <div style={{margin: '20px'}}>
                  <div style={{marginLeft: '15%', marginRight: '15%'}}>
                    <Row>
                      <Col span={3}>
                        <p style={{
                          fontFamily: 'SimHei',
                          fontSize: '18px',
                          fontWeight: 'bold',
                          display: 'inline'
                        }}>关键词</p>
                      </Col>
                      <Col span={21}>
                        <div
                          style={{
                            fontFamily: 'SimSun',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            lineHeight: '20px',
                            display: 'inline'
                          }}
                        >{data.keywords}</div>
                      </Col>
                    </Row>
                  </div>
                </div>

                <div style={{textAlign: 'center', margin: '20px', marginLeft: '15%', marginRight: '15%'}}>
                  <p style={{fontFamily: 'SimHei', fontSize: '18px', fontWeight: 'bold'}}>绪 论</p>
                  <div
                    style={{
                      fontFamily: 'SimSun',
                      fontSize: '14px',
                      textAlign: 'center',
                      lineHeight: '20px'
                    }}>{data.introduction}</div>
                </div>

                <div style={{textAlign: 'center', margin: '20px', marginLeft: '15%', marginRight: '15%'}}>
                  <p style={{fontFamily: 'SimHei', fontSize: '18px', fontWeight: 'bold'}}>正 文</p>
                  <Latex
                    style={{
                      fontFamily: 'SimSun',
                      fontSize: '14px',
                      lineHeight: '20px'
                    }}>{data.content}</Latex>
                </div>

                <div style={{textAlign: 'center', margin: '20px', marginLeft: '15%', marginRight: '15%'}}>
                  <p style={{fontFamily: 'SimHei', fontSize: '18px', fontWeight: 'bold'}}>结束语</p>
                  <div
                    style={{
                      fontFamily: 'SimSun',
                      fontSize: '14px',
                      textAlign: 'center',
                      lineHeight: '20px'
                    }}>{data.conclusion}</div>
                </div>

                <div style={{textAlign: 'center', margin: '20px', marginLeft: '15%', marginRight: '15%'}}>
                  <p style={{fontFamily: 'SimHei', fontSize: '18px', fontWeight: 'bold'}}>致 谢</p>
                  <div
                    style={{
                      fontFamily: 'SimSun',
                      fontSize: '14px',
                      textAlign: 'center',
                      lineHeight: '20px'
                    }}>{data.acknowledgement}</div>
                </div>

                <div style={{textAlign: 'center', margin: '20px'}}>
                  <p style={{fontFamily: 'SimHei', fontSize: '18px', fontWeight: 'bold'}}>参考文献</p>
                  {data.refs.map(((ref, index) => (<p style={{
                    fontFamily: 'SimSun',
                    fontSize: '14px',
                    lineHeight: '20px'
                  }}>【{index + 1}】{
                    ref.type === "published" ? ref.doi : ref.content
                  }</p>)))}
                </div>
              </div>
            );
          }
          return null;
        }}
      </Query>
    </FunctionLayout>
  );
};
export default PaperDetailPage;
