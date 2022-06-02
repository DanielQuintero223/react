import React from "reacto";
import { Form, Button, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./login.scss";

export default function SignIn() {
    return(
        <Form className="login-form">
            <Form.Item>
                <Input
                prefix={
                    <UserOutlined />
                }
                type="email"
                name="email"
                placeholder="Correo electronico"
                className="login-form__input"
                />
            </Form.Item>
            <Form.Item>
                <Input
                prefix={
                    <UserOutlined />
                }
                type="password"
                name="password"
                placeholder="Contraseña"
                className="login-form__input"
                />
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" className="login-form__button">
                    Entrar
                </Button>
            </Form.Item>
        </Form>
    );
}