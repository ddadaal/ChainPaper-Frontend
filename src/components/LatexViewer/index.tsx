import LatexEditor from "../LatexEditor";
import { PaperDraft } from "../../models/paper";
import { Col, Row } from "antd";
import Latex from 'react-latex';
import React from "react";

interface Props {
  paper: PaperDraft;
}

const LatexViewer: React.FC<Props> = ({ paper }: Props) => {
  return (
    <div>
      <div
        style={{ fontFamily: 'SimHei', fontSize: '24px', textAlign: 'center' }}>{paper.title}</div>
      <div style={{ margin: '20px' }}>
        <div>
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
                }}>{paper.abstractContent}</div>
            </Col>
          </Row>
        </div>
      </div>
      <div style={{ margin: '20px' }}>
        <div style={{ marginLeft: '15%', marginRight: '15%' }}>
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
              >{paper.keywords}</div>
            </Col>
          </Row>
        </div>
      </div>

      <div style={{ textAlign: 'center', margin: '20px', marginLeft: '15%', marginRight: '15%' }}>
        <p style={{ fontFamily: 'SimHei', fontSize: '18px', fontWeight: 'bold' }}>绪 论</p>
        <div
          style={{
            fontFamily: 'SimSun',
            fontSize: '14px',
            textAlign: 'center',
            lineHeight: '20px'
          }}>{paper.introduction}</div>
      </div>

      <div style={{ textAlign: 'center', margin: '20px', marginLeft: '15%', marginRight: '15%' }}>
        <p style={{ fontFamily: 'SimHei', fontSize: '18px', fontWeight: 'bold' }}>正 文</p>
        <Latex
          style={{
            fontFamily: 'SimSun',
            fontSize: '14px',
            lineHeight: '20px'
          }}>{paper.content}</Latex>
      </div>

      <div style={{ textAlign: 'center', margin: '20px', marginLeft: '15%', marginRight: '15%' }}>
        <p style={{ fontFamily: 'SimHei', fontSize: '18px', fontWeight: 'bold' }}>结束语</p>
        <div
          style={{
            fontFamily: 'SimSun',
            fontSize: '14px',
            textAlign: 'center',
            lineHeight: '20px'
          }}>{paper.conclusion}</div>
      </div>

      <div style={{ textAlign: 'center', margin: '20px', marginLeft: '15%', marginRight: '15%' }}>
        <p style={{ fontFamily: 'SimHei', fontSize: '18px', fontWeight: 'bold' }}>致 谢</p>
        <div
          style={{
            fontFamily: 'SimSun',
            fontSize: '14px',
            textAlign: 'center',
            lineHeight: '20px'
          }}>{paper.acknowledgement}</div>
      </div>

      <div style={{ textAlign: 'center', margin: '20px' }}>
        <p style={{ fontFamily: 'SimHei', fontSize: '18px', fontWeight: 'bold' }}>参考文献</p>
        {paper.refs.map(((ref, index) => (<p style={{
          fontFamily: 'SimSun',
          fontSize: '14px',
          lineHeight: '20px'
        }}>【{index + 1}】{
            ref.type === "published" ? ref.doi : ref.content
          }</p>)))}
      </div>
    </div>
  )
};

export default LatexViewer;
