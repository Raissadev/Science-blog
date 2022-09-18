import { useState } from 'react';
import { Row, Layout, Typography, Input, Space, Menu } from 'antd';

import { AllArticlesProperty, AllArticlesPattern } from '../../@types/all-articles';
import { api } from '../../services/api';

const { Title, Paragraph } = Typography;
const { Search } = Input;

function BannerComponent(): any
{
    const [visible, setVisible] = useState<boolean>(false);
    const [articles, setArticles] = useState<AllArticlesProperty>(AllArticlesPattern);

    const onSearch = async (value: string) => {
        const data = new URLSearchParams({ title: value });
        const allArticles: any = await api.get("/posts?" + data);

        setArticles({
            data: allArticles?.data.data,
            inquiry: 0,
        });

        setVisible(true);
    }

    return(
        <>
            <Layout className="banner">
                <Row align="middle" justify="center">
                    <Title level={4}>
                        Search Article <br /> <span> "Blog" </span>
                    </Title>
                </Row>
                <Row align="middle" justify="center">
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Mauris blandit enim nec varius consectetur.
                    </Paragraph>
                </Row>
                <Row align="middle" justify="center">
                    <Space direction="vertical">
                        <Search
                            onClick={() => setVisible(!visible)}
                            placeholder="input search text"
                            onSearch={onSearch}
                            enterButton
                        />
                        <Menu mode="vertical" style={{ display: visible ? 'block' : 'none'  }}>
                            {articles?.data.map((data: any) => {
                                return (
                                    <Menu.Item key="home-search">
                                        <a href={`/article/${data.id}`}>{ data.title || '...' }</a>
                                    </Menu.Item>
                                );
                            })}
                        </Menu>
                    </Space>
                </Row>
            </Layout>
        </>
    );
}

export default BannerComponent;