import { Row, Layout, Menu, Typography, Button } from 'antd';

const { Header } = Layout;
const { Title } = Typography;

function Head(): any
{
    return(
        <>
            <Header>
                <Row align="middle" justify="center">
                    <Menu mode="horizontal">
                        <Menu.Item key="home-logo">
                            <Title level={4}>Science Blog</Title>
                        </Menu.Item>
                        <Menu.Item key="home">
                            <a href="/home">Home</a>
                        </Menu.Item>
                        <Menu.Item key="contact">
                            <a href="/">Contact</a>
                        </Menu.Item>
                        <Menu.Item key="List">
                            <a href="/">List</a>
                        </Menu.Item>
                        <Menu.Item key="repository">
                            <a href="/">Repository</a>
                        </Menu.Item>
                        <Menu.Item key="about">
                            <a href="/">About</a>
                        </Menu.Item>
                        <Menu.Item key="login" className="button-menu">
                            <Button type="primary" size="large" href="/">
                                Login
                            </Button>
                        </Menu.Item>
                    </Menu>
                </Row>
            </Header>
        </>
    );
}

export default Head;