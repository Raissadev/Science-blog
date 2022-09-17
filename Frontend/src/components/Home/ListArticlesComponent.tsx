import { useMemo, useState } from 'react';
import { Row, Layout } from 'antd';
import BoxArticleDefault from './BoxArticleDefaultComponent';
import BoxArticleInit from './BoxArticleInitComponent';
import CategoriesList from './CategoriesListComponent';

import { AllArticlesProperty, AllArticlesPattern } from '../../@types/all-articles';
import { api } from '../../services/api';

function ListArticles(): any
{
    const [articles, setArticles] = useState<AllArticlesProperty>(AllArticlesPattern);

    useMemo(async () => {
        const allArticles: any = await api.get("/posts");

        setArticles({
            data: allArticles?.data.data,
            inquiry: 0,
        });

    }, [articles?.inquiry]);

    return(
        <>
            <Layout className="list-articles">
                <Row align="middle" justify="center">
                    <BoxArticleInit
                        key={"init-" + articles?.data[0].id}
                        article={articles?.data[0]}
                    />
                </Row>
                <Row align="middle">
                    {articles?.data.map((data: any) => {
                        return (
                            <BoxArticleDefault
                                article={data}
                                key={"box-default-" + data?.id}
                            />
                        );
                    })}
                </Row>
                <Row>
                    <CategoriesList />
                </Row>
            </Layout>
        </>
    );
}

export default ListArticles;