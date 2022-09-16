import { Layout, Typography, Row } from 'antd';

const { Title } = Typography;
const { Footer } = Layout;

function Foot(): any
{
    return(
        <>
            <Footer>
                <Row align="middle" justify="center" className="copyright">
                    <Title level={4}>
                        ©2022 raissadev - All rights reserved
                    </Title>
                </Row>
            </Footer>
        </>
    );
}

export default Foot;