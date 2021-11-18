import { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

const ColoredHeaderDiv = styled.div<{ backgroundColor: string; }>`
    padding: 1em;
    font-weight: bold;
    text-align: center;
    color: white;
    ${props => `
        background-color: ${props.backgroundColor};
    `}
`;

const LogoH1 = styled.h1`
    max-width: 1200px;
    margin: 0.5em auto;
    position: relative;
`;

const NormalHeader = (
    <>
        <noscript>
            <ColoredHeaderDiv backgroundColor='red'>
                JavaScriptが無効化されています。
                <br />
                本サイトは、JavaScriptが有効化されていない場合、正常に動作しません。
            </ColoredHeaderDiv>
        </noscript>
        <LogoH1>
            <Link href='/'>
                <a>
                    hideo54/nextjs-template
                </a>
            </Link>
        </LogoH1>
    </>
);

const FooterDiv = styled.div`
    text-align: center;
`;

const NormalFooter = (
    <>
        <hr />
        <FooterDiv>hideo54</FooterDiv>
    </>
);

const Layout = ({
    children,
    title = 'hideo54/nextjs-template',
    description = 'ここに OGP の description を入れる',
    imageUrl = 'https://img.hideo54.com/icons/main.png',
    twitterCardType = 'summary',
    Header = NormalHeader,
    Footer = NormalFooter,
}: {
    children?: ReactNode;
    title?: string;
    description?: string;
    imageUrl?: string;
    twitterCardType?: 'summary' | 'summary_large_image' | 'app' | 'player';
    Header?: JSX.Element;
    Footer?: JSX.Element;
    isTopPage?: boolean;
}) => (
    <>
        <Head>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <meta name='description' content={description} />
            <meta key='og:site_name' property='og:site_name' content={title} />
            <meta key='og:title' property='og:title' content={title} />
            <meta key='og:description' property='og:description' content={description} />
            {imageUrl &&
                <meta property='og:image' content={imageUrl} />
            }
            <meta key='twitter:card' name='twitter:card' content={twitterCardType} />
            <meta key='twitter:site' name='twitter:site' content='@hideo54' />
            <title>{title}</title>
            <link rel='icon' type='image/svg+xml' href='/logo.svg' />
            <link rel='icon' type='image/png' href='/logo.png' />
            <link rel='apple-touch-icon' href='/logo.svg' />
        </Head>
        <header>
            {Header}
        </header>
        <main>
            {children}
        </main>
        <footer>
            {Footer}
        </footer>
    </>
);

export default Layout;
