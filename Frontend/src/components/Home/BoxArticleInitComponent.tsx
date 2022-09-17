import { Row, Layout, Image, Col, Typography, Button } from 'antd';

const { Paragraph, Title } = Typography;

function BoxArticleInit(): any
{
    return(
        <>
            <Layout className="box-article-init box">
                <Row align="top" justify="space-between">
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
                        <Button type="primary" className="target">
                            New
                        </Button>
                        <Title level={3}>
                            Science Blog
                        </Title>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie ut magna vitae eleifend. 
                            Donec a dictum ex, eget porta libero. Vivamus dapibus tellus vulputate augue consequat, feugiat 
                            pellentesque sapien egestas. Suspendisse tristique fermentum nibh, eget viverra neque fringilla a.
                        </Paragraph>
                        <Row className="box-article-user">
                            <Image
                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                preview={false}
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

export default BoxArticleInit;