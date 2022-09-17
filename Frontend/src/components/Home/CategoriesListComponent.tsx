import { UngroupOutlined } from '@ant-design/icons';
import { Row, Layout, Typography, Button } from 'antd';

const { Title } = Typography;

function CategoriesList(): any
{
    return(
        <>
            <Layout className="box-categories">
                <Title level={3}>
                    <UngroupOutlined />
                    Surfing on Categories
                </Title>
                <Row align="middle" justify="center">
                    <Button type="primary" className="target">
                        New
                    </Button>
                    <Button type="primary" className="target">
                        New
                    </Button>
                    <Button type="primary" className="target">
                        New
                    </Button>
                </Row>
            </Layout>
        </>
    );
}

export default CategoriesList;