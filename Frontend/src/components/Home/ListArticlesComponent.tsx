import { Row, Layout } from 'antd';
import BoxArticleDefault from './BoxArticleDefaultComponent';
import BoxArticleInit from './BoxArticleInitComponent';

function ListArticles(): any
{
    return(
        <>
            <Layout className="list-articles">
                <Row align="middle" justify-content="center">
                    <BoxArticleInit />
                </Row>
                <Row align="middle" justify-content="center">
                    <BoxArticleDefault />
                    <BoxArticleDefault />
                </Row>
            </Layout>
        </>
    );
}

export default ListArticles;