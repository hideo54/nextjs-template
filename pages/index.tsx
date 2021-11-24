import styled from 'styled-components';
import { Sparkles } from '@styled-icons/ionicons-outline';
import { IconNextLink } from '@hideo54/reactor';
import Layout from '../components/Layout';

const H2 = styled.h1`
    text-align: center;
`;

const App: React.FC = () => {
    return (
        <Layout>
            <H2>Hello, world!</H2>
            <IconNextLink href='/' LeftIcon={Sparkles}>
                最高のテンプレート
            </IconNextLink>
            <p>こんにちは</p>
        </Layout>
    );
};

export default App;
