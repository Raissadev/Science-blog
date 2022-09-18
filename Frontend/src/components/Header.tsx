import { useMemo, useState } from 'react';
import { Row, Layout, Menu, Typography, Button } from 'antd';
import { AllCategoriesPattern, AllCategoriesProperty } from '../@types/all-categories';
import { api } from '../services/api';

const { Header } = Layout;
const { Title } = Typography;

function Head(): any
{
    const [categories, setCategories] = useState<AllCategoriesProperty>(AllCategoriesPattern);

    useMemo(async () => {
        const allCategories: any = await api.get("/categories");

        setCategories({
            data: allCategories?.data.data,
            inquiry: 0,
        });

    }, [categories?.inquiry]);

    return(
        <>
            <Header>
                <Row align="middle" justify="center">
                    <Menu mode="horizontal">
                        <Menu.Item key="home-logo">
                            <Title level={4}>Science Blog</Title>
                        </Menu.Item>
                        <Menu.Item key="home">
                            <a href="/">Home</a>
                        </Menu.Item>
                        <Menu.Item key="contact">
                            <a href="https://raissadev.herokuapp.com">Contact</a>
                        </Menu.Item>
                        <Menu.Item key="github">
                            <a href="https://github.com/Raissadev">GitHub</a>
                        </Menu.Item>
                        <Menu.SubMenu title="Categories">
                            {categories?.data.map((data: any) => {
                                return (
                                    <Menu.Item
                                        key={"category-default-" + data?.id}
                                    >
                                        { data.name }
                                    </Menu.Item>
                                );
                            })}
                        </Menu.SubMenu>
                        <Menu.Item key="repository">
                            <a href="https://github.com/Raissadev/Science-Blog">Repository</a>
                        </Menu.Item>
                        <Menu.Item key="about">
                            <a href="https://raissadev.herokuapp.com">About</a>
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