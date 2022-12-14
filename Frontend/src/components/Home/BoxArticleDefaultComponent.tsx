import { Row, Layout, Image, Col, Typography, Button } from 'antd';
import { url } from '../../services/api';

const { Paragraph, Title } = Typography;

function BoxArticleDefault(property: any): any
{
    return(
        <>
            <Layout className="box-article-default box">
                <Row align="top" justify="space-between">
                    <Col>
                        <Image
                            src={ url + "/" + property.article?.thumb }
                            preview={false}
                        />
                    </Col>
                    <Col>
                        {property?.article?.categories?.map((data: any) => {
                            return (
                                <Button type="primary" className="target">
                                    { data.name }
                                </Button>
                            );
                        })}
                        <Title level={3}>
                            { property?.article?.title }
                        </Title>
                        <Paragraph>
                            { property?.article?.short_description }
                        </Paragraph>
                        <Row className="box-article-user">
                            <Image
                                src={url + "/" + (property.article?.owner_id?.avatar || 'public/storage/root.jpg') }
                            />
                            <Title level={5}>
                                By: { property.article?.owner_id?.name || 'nobody' } <br />
                                <span>Just now</span>
                            </Title>
                        </Row>
                    </Col>
                </Row>
            </Layout>
        </>
    );
}

export default BoxArticleDefault;