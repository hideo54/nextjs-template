import styled from 'styled-components';
import Layout from '../components/Layout';

const H2 = styled.h1`
    text-align: center;
`;

const App: React.FC = () => {
    return (
        <Layout>
            <H2>Hello, world!</H2>
        </Layout>
    );
};

export default App;
