import React, {useState} from "react";
import {Input, Row, Col} from 'antd';

import {Tex} from 'react-tex';

const Latex = require('react-latex');
const {TextArea} = Input;

const LatexEditor: React.FunctionComponent = (props) => {

  const [text, setText] = useState("");
//$$(3\div 4) \div (5-3)$$
  return (
    <Row style={{margin: '20px'}}>
      <Col span={12}>
        <div style={{display: 'inline', margin: '10px'}}>
          <TextArea placeholder="上传论文内容" onChange={(e) => {
            setText(e.target.value)
          }} autosize/>
        </div>
      </Col>
      <Col span={12}>
        <div
          style={{
            borderRadius: '4px',
            backgroundColor: '#f5f5f5',
            display: 'inline',
            minHeight: '32px',
            padding: '4px 11px',
            fontSize: '14px',
            lineHeight: '1.5',
            border: '1px solid #d9d9d9',
            margin: '10px'
          }}>
          <Tex texContent={text}/>
        </div>
      </Col>
    </Row>
  );
};

export default LatexEditor;
