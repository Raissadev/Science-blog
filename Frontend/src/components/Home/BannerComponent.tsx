import { Row, Layout, Typography, Input, Space } from 'antd';

const { Title, Paragraph } = Typography;
const { Search } = Input;

function BannerComponent(): any
{
    const onSearch = (value: string) => console.log(value);

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
                        <Search placeholder="input search text" onSearch={onSearch} enterButton />
                    </Space>
                </Row>
            </Layout>
        </>
    );
}

export default BannerComponent;