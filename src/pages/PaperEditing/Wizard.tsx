import React, { useState } from "react";
import { RouteComponentProps, navigate } from "@reach/router";
import { Button, Input, Row, Col, Layout, Icon, Modal, Tabs, message, Steps } from "antd";


import Latex from 'react-latex';
import { getApiService } from "../../apis";
import { PaperService } from "../../apis/paper/PaperService";
import { Reference, PaperDraft } from "../../models/paper";
import FunctionLayout from "../../layouts/FunctionLayout";
import ReferenceAddingModal from "./ReferenceAddingModal";

const Step = Steps.Step;
const { Sider, Content } = Layout;
const ButtonGroup = Button.Group;
const { TextArea } = Input;
const TabPane = Tabs.TabPane;

interface Props {
  paperDraft: PaperDraft | null;
  onSubmit(paperDraft: PaperDraft): void;
}

const Wizard: React.FunctionComponent<Props> = ({ paperDraft, onSubmit }) => {
  const paperService = getApiService(PaperService);

  const [title, setTitle] = useState(paperDraft ? paperDraft.title : "");
  const [keywords, setKeywords] = useState(paperDraft ? paperDraft.keywords : "");
  const [abstractContent, setAbstractContent] = useState(paperDraft ? paperDraft.abstractContent : "");
  const [introduction, setIntroduction] = useState(paperDraft ? paperDraft.introduction : "");
  const [content, setContent] = useState(paperDraft ? paperDraft.content : "");
  const [conclusion, setConclusion] = useState(paperDraft ? paperDraft.conclusion : "");
  const [acknowledgement, setAcknowledgement] = useState(paperDraft ? paperDraft.acknowledgement : "");
  const [refs, setRefs] = useState(paperDraft ? paperDraft.refs : []);

  const [isModelShow, setIsModelShow] = useState(false);
  const [step, setStep] = useState(0);

  return (
    <div>
      <ReferenceAddingModal
        show={isModelShow}
        close={() => setIsModelShow(false)}
        onAdd={(newRef) => setRefs([...refs, newRef])}
      />
      <FunctionLayout>
        <Steps current={step} style={{ padding: '30px' }}>
          <Step title="填写" />
          <Step title="预览" />
          <Step title="提交" />
        </Steps>
        {step == 0 ? (
          <div>
            <div style={{ textAlign: 'center', margin: '20px', marginTop: '20px' }}>
              <TextArea style={{ fontFamily: 'SimHei', fontSize: '24px', textAlign: 'center', width: '60%' }}
                placeholder="标题"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                autosize />
            </div>
            <div style={{ textAlign: 'center', margin: '20px' }}>
              <div style={{ marginLeft: '15%', marginRight: '15%' }}>
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
                    <TextArea
                      style={{ fontFamily: 'SimSun', fontSize: '14px', lineHeight: '20px', display: 'inline-block' }}
                      placeholder="中文摘要"
                      value={abstractContent}
                      onChange={(e) => {
                        setAbstractContent(e.target.value);
                      }}
                      autosize />
                  </Col>
                </Row>
              </div>
            </div>
            <div style={{ textAlign: 'center', margin: '20px' }}>
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
                    <TextArea
                      style={{
                        fontFamily: 'SimSun',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        lineHeight: '20px',
                        display: 'inline'
                      }}
                      value={keywords}
                      onChange={(e) => {
                        setKeywords(e.target.value);
                      }}
                      placeholder="中文关键词"
                      autosize />
                  </Col>
                </Row>
              </div>
            </div>

            <div style={{ textAlign: 'center', margin: '20px' }}>
              <p style={{ fontFamily: 'SimHei', fontSize: '18px', fontWeight: 'bold' }}>绪 论</p>
              <TextArea
                style={{
                  fontFamily: 'SimSun',
                  fontSize: '14px',
                  textAlign: 'center',
                  width: '60%',
                  lineHeight: '20px'
                }}
                placeholder="绪论"
                value={introduction}
                onChange={(e) => {
                  setIntroduction(e.target.value);
                }}
                autosize />
            </div>

            <div style={{ textAlign: 'center', margin: '20px' }}>
              <p style={{ fontFamily: 'SimHei', fontSize: '18px', fontWeight: 'bold' }}>正 文</p>
              <TextArea
                style={{ fontFamily: 'SimSun', fontSize: '14px', width: '70%', lineHeight: '20px' }}
                placeholder="正文"
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
                autosize />
            </div>

            <div style={{ textAlign: 'center', margin: '20px' }}>
              <p style={{ fontFamily: 'SimHei', fontSize: '18px', fontWeight: 'bold' }}>结束语</p>
              <TextArea
                style={{
                  fontFamily: 'SimSun',
                  fontSize: '14px',
                  textAlign: 'center',
                  width: '70%',
                  lineHeight: '20px'
                }}
                placeholder="结束语"
                value={conclusion}
                onChange={(e) => {
                  setConclusion(e.target.value);
                }}
                autosize />
            </div>

            <div style={{ textAlign: 'center', margin: '20px' }}>
              <p style={{ fontFamily: 'SimHei', fontSize: '18px', fontWeight: 'bold' }}>致 谢</p>
              <TextArea
                style={{
                  fontFamily: 'SimSun',
                  fontSize: '14px',
                  textAlign: 'center',
                  width: '70%',
                  lineHeight: '20px'
                }}
                value={acknowledgement}
                placeholder="致谢"
                onChange={(e) => {
                  setAcknowledgement(e.target.value);
                }}
                autosize />
            </div>

            <div style={{ textAlign: 'center', margin: '20px' }}>
              <div>
                <p style={{ fontFamily: 'SimHei', fontSize: '18px', fontWeight: 'bold', display: 'inline' }}>参考文献</p>
                <ButtonGroup style={{ display: 'inline', margin: '10px' }}>
                  <Button onClick={() => {
                    let newRefs: Reference[] = refs;
                    newRefs = newRefs.slice(0, newRefs.length - 1);
                    setRefs(newRefs);
                  }}>
                    <Icon type="minus" />
                  </Button>
                  <Button onClick={() => {
                    setIsModelShow(true)
                  }}>
                    <Icon type="plus" />
                  </Button>
                </ButtonGroup>
              </div>
              <div
                style={{
                  borderRadius: '4px',
                  backgroundColor: '#f5f5f5',
                  minHeight: '32px',
                  padding: '4px 11px',
                  fontSize: '14px',
                  lineHeight: '1.5',
                  border: '1px solid #d9d9d9',
                  margin: '10px',
                  marginLeft: '15%',
                  marginRight: '15%',
                }}>
                {refs.map(((ref, index) => (<p>【{index + 1}】{
                  ref.type === "published" ? ref.doi : ref.content
                }</p>)))}
              </div>
            </div>
            <div style={{ textAlign: 'center', margin: '20px' }}>
              <Button type="primary" size={"large"} onClick={() => {
                setStep(1)
              }}>
                下一步
                <Icon type="right" />
              </Button>
            </div>
          </div>) : null}

        {step == 1 ? (<div>
          <div
            style={{ fontFamily: 'SimHei', fontSize: '24px', textAlign: 'center' }}>{title}</div>
          <div style={{ margin: '20px' }}>
            <div style={{ marginLeft: '15%', marginRight: '15%' }}>
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
                    }}>{abstractContent}</div>
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
                  >{keywords}</div>
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
              }}>{introduction}</div>
          </div>

          <div style={{ textAlign: 'center', margin: '20px', marginLeft: '15%', marginRight: '15%' }}>
            <p style={{ fontFamily: 'SimHei', fontSize: '18px', fontWeight: 'bold' }}>正 文</p>
            <Latex
              style={{
                fontFamily: 'SimSun',
                fontSize: '14px',
                lineHeight: '20px'
              }}>{content}</Latex>
          </div>

          <div style={{ textAlign: 'center', margin: '20px', marginLeft: '15%', marginRight: '15%' }}>
            <p style={{ fontFamily: 'SimHei', fontSize: '18px', fontWeight: 'bold' }}>结束语</p>
            <div
              style={{
                fontFamily: 'SimSun',
                fontSize: '14px',
                textAlign: 'center',
                lineHeight: '20px'
              }}>{conclusion}</div>
          </div>

          <div style={{ textAlign: 'center', margin: '20px', marginLeft: '15%', marginRight: '15%' }}>
            <p style={{ fontFamily: 'SimHei', fontSize: '18px', fontWeight: 'bold' }}>致 谢</p>
            <div
              style={{
                fontFamily: 'SimSun',
                fontSize: '14px',
                textAlign: 'center',
                lineHeight: '20px'
              }}>{acknowledgement}</div>
          </div>

          <div style={{ textAlign: 'center', margin: '20px' }}>
            <p style={{ fontFamily: 'SimHei', fontSize: '18px', fontWeight: 'bold' }}>参考文献</p>
            {refs.map(((ref, index) => (<p style={{
              fontFamily: 'SimSun',
              fontSize: '14px',
              lineHeight: '20px'
            }}>【{index + 1}】{
                ref.type === "published" ? ref.doi : ref.content
              }</p>)))}
          </div>
          <div style={{ textAlign: 'center', margin: '20px' }}>
            <ButtonGroup>
              <Button type="primary" size={"large"} onClick={() => {
                setStep(0)
              }}>
                <Icon type="left" />
                上一步
              </Button>
              <Button type="primary" size={"large"} onClick={() => {
                setStep(2)
              }}>
                下一步
                <Icon type="right" />
              </Button>
            </ButtonGroup>
          </div>
        </div>) : null}

        {step == 2 ? (
          <div style={{ textAlign: 'center', paddingBottom: '50px' }}>
            <div
              style={{ fontFamily: 'SimHei', fontSize: '24px', textAlign: 'center', margin: '20px' }}>确定提交？
            </div>

            <Button type="default" size={"large"} style={{ margin: '10px' }} onClick={() => {
              setStep(1)
            }}>
              取消
            </Button>

            <Button type="primary" size={"large"} style={{ margin: '10px' }} onClick={() => onSubmit({
              title,
              abstractContent,
              keywords,
              introduction,
              content,
              conclusion,
              acknowledgement,
              refs
            })}>
              确定
            </Button>
          </div>
        ) : null}
      </FunctionLayout>
    </div>
  );
};

export default Wizard;
