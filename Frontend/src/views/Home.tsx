import { Layout } from 'antd';
import BannerComponent from "../components/Home/BannerComponent";

function Home(): any
{
    return(
        <>
            <Layout>
                <BannerComponent />
            </Layout>
        </>
    );
}

export default Home;