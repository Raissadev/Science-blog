import { useState } from 'react';
import { Layout, Button, Form, Input, notification, Typography, Upload, Row } from 'antd';
import { PlusOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import readForm from '../utils/read-form';
import "../styles/login.less";

import { api } from "../services/api";
import { UserProperty, UserPattern } from "../@types/user";

const { Link } = Typography;

function Register(): any
{
    const [scheme]: any = Form.useForm();
    const [user, setUser]: any = useState<UserProperty>(UserPattern);
    const navigate: any = useNavigate();

    const signUp = async () => {
        // const data = readForm(user);
        const data = new FormData();
        data.append('name', user.name);
        data.append('email', user.email);
        data.append('password', user.password);
        data.append('avatar', user.avatar);
        await api.post("/users", data, {
            headers: { 'Content-Type': 'multipart/form-data;' }
        })
        .then( (response: any) => {
            navigate("/");
            notification.open({
                message: "Register successfully",
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
            <Layout className="box-signin">
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={signUp}
                    form={scheme}
                    autoComplete="off"
                >
                    <Form.Item
                        name="name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <Input
                            placeholder="Name"
                            onChange={(val: any) => setUser({ ...user, name: val.target.value })}
                        />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[{ type: 'email', required: true, message: 'Please input your email!' }]}
                    >
                        <Input
                            placeholder="E-mail"
                            onChange={(val: any) => setUser({ ...user, email: val.target.value })}
                        />
                    </Form.Item>
                    <Row align="middle" justify="space-between">
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password
                                placeholder="Senha"
                                type="password"
                                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                onChange={(val: any) => setUser({ ...user, password: val.target.value })}
                            />
                        </Form.Item>
                        <Form.Item valuePropName="fileList">
                            <Upload
                                onChange={(val: any) => setUser({ ...user, avatar: val.file.originFileObj })}
                                action="/upload.do" listType="picture-card"
                            >
                                <div>
                                <PlusOutlined />
                                <div style={{ marginTop: 8 }}>Upload</div>
                                </div>
                            </Upload>
                        </Form.Item>
                    </Row>
                    <Form.Item>
                        <Link href="/sign-up">
                            Already have an account?
                        </Link>
                        <Button type="primary" htmlType="submit">
                            Sign Up
                        </Button>
                    </Form.Item>
                </Form>
            </Layout>
        </>
    );
}

export default Register;