import React, { useState, useCallback } from "react";
import { useStore } from "simstate";
import { UiStore } from "../../stores/UiStore";
import { Modal, Button, Form, Input, Icon, message, Select } from "antd";
import { Link } from "@reach/router";
import { FormWrappedProps } from "antd/lib/form/interface";
import { WrappedFormUtils } from "antd/lib/form/Form";
import { useApiService } from "../../apis";
import { UserService } from "../../apis/user/UserService";
import { UserStore } from "../../stores/UserStore";
const { Option } = Select;

const RegisterModal = Form.create({ name: "normal_register" })((props: { form: WrappedFormUtils }) => {

  const { getFieldDecorator, validateFields } = props.form;

  const uiStore = useStore(UiStore);
  const userStore = useStore(UserStore, []);

  const [registering, setRegistering] = useState(false);

  const onOk = useCallback(async () => {
    setRegistering(true);
    validateFields(async (err, values) => {
      if (!err) {
        const { username, password, role } = values;
        const userService = useApiService(UserService);
        const res = await userService.register(username, password, role);
        if (res.token) {
          uiStore.toggleRegisterModalShown();
          userStore.login(username, res.token);
        } else {
          message.error(`登录错误，原因：${res.error}`);
        }

      }
    });
    setRegistering(false);
  }, []);

  return (
    <Modal
      visible={uiStore.state.registerModalShown}
      title={"注册"}
      onCancel={uiStore.toggleRegisterModalShown}
      onOk={onOk}
      footer={[
        <Button key="register" onClick={() => {
          uiStore.toggleRegisterModalShown();
          uiStore.toggleLoginModalShown();
        }} style={{ float: "left" }}>
          <span>回到登录</span>
        </Button>,
        <Button key="back" onClick={uiStore.toggleRegisterModalShown}>
          <span>取消</span>
        </Button>,
        <Button key="submit"
          type="primary"
          loading={registering}
          onClick={onOk}>
          <span>注册</span>
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
        <Form.Item label="角色">
          {getFieldDecorator('role', {
            initialValue: 'student',
          })(
            <Select>
              <Option value="student">学生</Option>
              <Option value="teacher">老师</Option>
            </Select>,
          )}
        </Form.Item>
      </Form>
    </Modal>
  );
});

export default RegisterModal;
