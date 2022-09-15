import { Col, Row, Layout, Menu, Typography, Button } from 'antd';

const { Header } = Layout;
const { Title } = Typography;

function Head(): any
{
    return(
        <>
            <Layout>
                <Header>
                    <Row align="middle" justify="center">
                        <Menu mode="horizontal">
                            <Menu.Item key="home">
                                <Title level={4}>Science Blog</Title>
                            </Menu.Item>
                            <Menu.Item key="home">
                                <a href="/home">Home</a>
                            </Menu.Item>
                            <Menu.Item key="repository">
                                <a href="/">Repository</a>
                            </Menu.Item>
                            <Menu.Item key="repository">
                                <a href="/">Repository</a>
                            </Menu.Item>
                            <Menu.Item key="repository">
                                <a href="/">Repository</a>
                            </Menu.Item>
                            <Menu.Item key="repository">
                                <a href="/">Repository</a>
                            </Menu.Item>
                            <Menu.Item key="repository" className="button-menu">
                                <Button type="primary" size="large" href="/">
                                    Login
                                </Button>
                            </Menu.Item>
                        </Menu>
                    </Row>
                </Header>
            </Layout>
        </>
    );
}

export default Head;