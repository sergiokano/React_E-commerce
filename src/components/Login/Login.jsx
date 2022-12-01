import React, { useContext, useEffect } from "react";
import { Button, Form, Input } from "antd";
import { UserContext } from "../../context/UserContext/UserState";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const onFinish = (values) => {
    login(values);
  };

  useEffect(() => {
      const foundToken = JSON.parse(localStorage.getItem("token"));
      if (foundToken) {
      navigate("/profile")
    }
}, [login])

  return (
    <div className="container-login">
      <Form
        name="basic"
        labelCol={{
            span: 8,
        }}
        wrapperCol={{
            span: 16,
        }}
        initialValues={{
            remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
        >
        <p>Log in to see your account</p>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
          className="button-container"
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;