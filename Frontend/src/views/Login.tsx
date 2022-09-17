import { useState } from 'react';
import { Layout, Button, Form, Input, notification } from 'antd';
import { useNavigate } from 'react-router-dom';

import { api } from "../services/api";
import { UserProperty, UserPattern } from "../@types/user";

function Login(): any
{
    const [scheme]: any = Form.useForm();
    const [user, setUser]: any = useState<UserProperty>(UserPattern);
    const navigate: any = useNavigate();

    const signIn = async () => {
        await api.post("/auth", user)
        .then( (response: any) => {
            user.token = response.data.token;
            sessionStorage.setItem('token', response.data.token);
            navigate("/");
            notification.open({
                message: "Login successfully",
            });
        })
        .catch( (err: any) => {
            notification.open({
                message: "Invalid data",
            });
        })
    };

    return(
        <>
            <Layout>
            <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={signIn}
                    form={scheme}
                    autoComplete="off"
                >
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input
                            placeholder="E-mail"
                            className="mb-1"
                            onChange={(val: any) => setUser({ ...user, email: val.target.value })}
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input
                            placeholder="Senha"
                            type="password"
                            onChange={(val: any) => setUser({ ...user, password: val.target.value })}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Sign In
                        </Button>
                    </Form.Item>
                </Form>
            </Layout>
        </>
    );
}

export default Login;