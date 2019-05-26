import React, { useState, useCallback } from "react";
import { useStore } from "simstate";
import { UiStore } from "../../stores/UiStore";
import { Modal, Button, Form, Input, Icon, message } from "antd";
import { Link } from "@reach/router";
import { FormWrappedProps } from "antd/lib/form/interface";
import { WrappedFormUtils } from "antd/lib/form/Form";
import { getApiService } from "../../apis";
import { UserService } from "../../apis/user/UserService";
import { UserStore } from "../../stores/UserStore";

const LoginModal = Form.create({ name: "normal_login" })((props: { form: WrappedFormUtils }) => {

  const { getFieldDecorator, validateFields } = props.form;

  const uiStore = useStore(UiStore);
  const userStore = useStore(UserStore, []);

  const [loggingIn, setLoggingIn] = useState(false);

  const onOk = useCallback(async () => {
    setLoggingIn(true);
    validateFields(async (err, values) => {
      if (!err) {
        const { username, password } = values;
        const userService = getApiService(UserService);
        const res = await userService.login(username, password);
        if (res.token) {
          uiStore.toggleLoginModalShown();
          userStore.login(res.userId!!, username, res.token);
        } else {
          message.error(`登录错误，原因：${res.error}`);
        }

      }
    });
    setLoggingIn(false);
  }, []);

  return (
    <Modal
      visible={uiStore.state.loginModalShown}
      title={"登录"}
      onCancel={uiStore.toggleLoginModalShown}
      onOk={onOk}
      footer={[
        <Button key="register" onClick={() => {
          uiStore.toggleLoginModalShown();
          uiStore.toggleRegisterModalShown();
        }} style={{ float: "left" }}>
          <span>注册</span>
        </Button>,
        <Button key="back" onClick={uiStore.toggleLoginModalShown}>
          <span>取消</span>
        </Button>,
        <Button key="submit"
          type="primary"
          loading={loggingIn}
          onClick={onOk}>
          <span>登录</span>
        </Button>,
      ]}
    >
      <Form>
        <Form.Item label="用户名">
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item label="密码">
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
      </Form>
    </Modal>
  );
});

export default LoginModal;
