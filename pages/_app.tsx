import { useEffect } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import * as gtag from '@/lib/gtag';

const GlobalStyle = createGlobalStyle`
    body {
        -webkit-text-size-adjust: 100%;
    }
    body, select, button {
        font-family: -apple-system, BlinkMacSystemFont, 'Hiragino Sans', 'Noto Sans JP', sans-serif;
        margin: 0;
    }

    header, main, footer {
        display: block; /* for IE */
    }

    main {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1em;
    }

    footer {
        margin-top: 3em;
        margin-bottom: 1em;
        padding: 0 1em;
    }

    h1, h2, h3, h4, h5, h6, p, div, span {
        :not(a &) {
            color: #333333;
        }
    }

    span {
        line-height: 100%;
    }

    p {
        line-height: 1.5em;
    }

    a {
        color: #FF0000;
        text-decoration: none;
        cursor: pointer;
    }

    ul > li, ol > li {
        margin: 0.5em 0;
        line-height: 150%;
    }

    hr {
        border-bottom: none;
    }
`;

const App = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = (url: string) => {
            gtag.pageview(url);
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);
    // https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_app.js
    return (
        <>
            <Component {...pageProps} />
            <GlobalStyle />
        </>
    );
};

export default App;
