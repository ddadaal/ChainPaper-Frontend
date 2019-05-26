import React, { useState } from "react";
import { PaperComment } from "../../models/paper";
import { getApiService } from "../../apis";
import { PaperService } from "../../apis/paper/PaperService";
import Query from "../../apis/Query";
import { List, Comment, Tooltip, Icon, Form, Button, Input, message } from "antd";
import { DEFAULT_AVATAR } from "../../utils";
import { useStore } from "simstate";
import { UserStore } from "../../stores/UserStore";

const TextArea = Input.TextArea;

interface Props {
  paperId: string;
}

const paperService = getApiService(PaperService);

const Editor = ({ paperId, reload, disabled }) => {

  const [content, setContent] = useState("");
  const [sending, setSending] = useState(false);

  return (
    <div>
      <Form.Item>
        <TextArea disabled={disabled} rows={4} onChange={(e) => setContent(e.target.value)} value={content} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" loading={sending} onClick={() => {
          setSending(true);
          paperService.commentPaper(paperId, content).then(() => {
            message.success("评论成功！");
            setSending(false);
            setContent("");
            reload();
          });
        }} type="primary">
          评论
      </Button>
      </Form.Item>
    </div>
  )
};

const CommentPanel: React.FC<Props> = (props) => {
  const userStore = useStore(UserStore);
  return (
    <Query call={() => paperService.getPaperComments(props.paperId)}>
      {(data, loading, _, refetch) => {
        return (
          <div>
            <List
              header={data ? `${data.comments.length} 评论` : "评论加载中..."}
              loading={loading}
              pagination={{ pageSize: 5 }}
              dataSource={data ? data.comments : []}
              renderItem={(comment) => (
                <Comment
                  author={comment.userId}
                  avatar={DEFAULT_AVATAR}
                  content={comment.content}
                  datetime={comment.time}
                />
              )}
            />
            <Comment avatar={DEFAULT_AVATAR} content={
              <Editor disabled={!userStore.state.loggedIn} paperId={props.paperId} reload={refetch} />
            } />
          </div>
        );
      }}
    </Query>
  )
}

export default CommentPanel;
