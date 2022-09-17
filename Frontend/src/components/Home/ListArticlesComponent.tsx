import { Row, Layout } from 'antd';
import BoxArticleDefault from './BoxArticleDefaultComponent';
import BoxArticleInit from './BoxArticleInitComponent';
import CategoriesList from './CategoriesListComponent';

function ListArticles(): any
{
    return(
        <>
            <Layout className="list-articles">
                <Row align="middle" justify="center">
                    <BoxArticleInit />
                </Row>
                <Row align="middle">
                    <BoxArticleDefault />
                    <BoxArticleDefault />
                </Row>
                <Row>
                    <CategoriesList />
                </Row>
            </Layout>
        </>
    );
}

export default ListArticles;