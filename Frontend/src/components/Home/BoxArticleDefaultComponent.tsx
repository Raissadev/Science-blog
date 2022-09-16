import { Row, Layout, Image, Col, Typography, Button } from 'antd';

const { Paragraph, Title } = Typography;

function BoxArticleDefault(): any
{
    return(
        <>
            <Layout className="box-article-default box">
                <Row align="top" justify-content="space-between">
                    <Col>
                        <Image
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                            preview={false}
                        />
                    </Col>
                    <Col>
                        <Button type="primary" className="target">
                            New
                        </Button>
                        <Title level={3}>
                            Science Blog
                        </Title>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie ut magna vitae eleifend. 
                        </Paragraph>
                        <Row className="box-article-user">
                            <Image
                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                            />
                            <Title level={5}>
                                By: Raissadev <br />
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