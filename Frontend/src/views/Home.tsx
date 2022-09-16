import { Layout } from 'antd';
import BannerComponent from "../components/Home/BannerComponent";
import ListArticles from '../components/Home/ListArticlesComponent';

function Home(): any
{
    return(
        <>
            <Layout>
                <BannerComponent />

                <ListArticles />
            </Layout>
        </>
    );
}

export default Home;