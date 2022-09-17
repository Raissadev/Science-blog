import { useMemo, useState } from 'react';
import { UngroupOutlined } from '@ant-design/icons';
import { Row, Layout, Typography, Button } from 'antd';
import { api } from '../../services/api';
import { AllCategoriesPattern, AllCategoriesProperty } from '../../@types/all-categories';

const { Title } = Typography;

function CategoriesList(): any
{
    const [categories, setCategories] = useState<AllCategoriesProperty>(AllCategoriesPattern);

    useMemo(async () => {
        const allCategories: any = await api.get("/categories");

        setCategories({
            data: allCategories?.data.data,
            inquiry: 0,
        });

    }, [categories?.inquiry]);

    return(
        <>
            <Layout className="box-categories">
                <Title level={3}>
                    <UngroupOutlined />
                    Surfing on Categories
                </Title>
                <Row align="middle" justify="center">
                    {categories?.data?.map((data: any) => {
                        return (
                            <Button
                                type="primary"
                                className="target"
                                key={"target-list-" + data?.id}
                            >
                                { data.name }
                            </Button>
                        );
                    })}
                </Row>
            </Layout>
        </>
    );
}

export default CategoriesList;