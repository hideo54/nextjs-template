import Link from 'next/link';
import styled from 'styled-components';
import { Sparkles } from '@styled-icons/ionicons-outline';
import { IconLink } from '@hideo54/reactor';
import Layout from '../components/Layout';

const H2 = styled.h1`
    text-align: center;
`;

const App: React.FC = () => {
    return (
        <Layout>
            <H2>Hello, world!</H2>
            <Link href='/' passHref>
                <IconLink LeftIcon={Sparkles}>最高のテンプレート</IconLink>
            </Link>
            <p>こんにちは</p>
        </Layout>
    );
};

export default App;
