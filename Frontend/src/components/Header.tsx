import { Col, Row, Layout, Menu, Typography } from 'antd';

const { Header } = Layout;
const { Title } = Typography;

function Head(): any
{
    return(
        <>
            <Layout>
                <Header>
                    <Row align="middle" justify="space-between">
                        <Col>
                            <Menu mode="horizontal">
                                <Menu.Item key="initial">
                                    <a href="">Initial</a>
                                </Menu.Item>
                                <Menu.Item key="recents">
                                    <a href="">Recents</a>
                                </Menu.Item>
                            </Menu>
                        </Col>
                        <Col span={6} offset={6}>
                            <Title level={4}>Science Blog</Title>
                        </Col>
                        <Col span={6} offset={6}>
                            <Menu mode="horizontal">
                                <Menu.Item key="my-account">
                                    <a href="">My account</a>
                                </Menu.Item>
                                <Menu.Item key="Repository">
                                    <a href="">Repository</a>
                                </Menu.Item>
                            </Menu>
                        </Col>
                    </Row>
                </Header>
            </Layout>
        </>
    );
}

export default Head;