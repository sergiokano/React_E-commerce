import React, { useContext } from 'react'
import { Button, Form, Input } from "antd";
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext/UserState'
import "./Register.scss"

const Register = () => {
  const { register } = useContext(UserContext)
  const navigate = useNavigate()
  const onFinish = (values) => {
    register(values)
    navigate("/login")
  }

  return (
    <div className="container-register">
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
        <p>REGISTER
          <br />
          To hear more about promotions, events and information on new products please register your e-mail address below</p>
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              type: "text",
              message: "Please input your name",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please input your email",
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
              type: "password",
              message: "Please input your password",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          rules={[
            {
              required: true,
              type: "text",
              message: "Please input your address",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Telephone"
          name="phone"
          rules={[
            {
              required: true,
              type: "phone",
              message: "Please input your telephone number",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
          className="button-container"
        >
          <Button
            style={{
              size: "small",
              border: "1px solid gray",
              background: "transparent",
              color: "#47311d",
            }}
            type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Register