import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const minify = (s: string) => s.replace(/(\s{4}|\n)/g, '');

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

export default class MyDocument extends Document {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static async getInitialProps(ctx: any) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () => (
                originalRenderPage({
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    enhanceApp: (App: any) =>
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        (props: any) => sheet.collectStyles(<App {...props} />)
                    ,
                })
            );

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html lang='ja'>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet" />
                    <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: minify(`
                                if (window.location.hostname === "hideo54-172008.web.app" || window.location.hostname === "hideo54-172008.firebaseapp.com") {
                                    window.location.href = 'https://hideo54.com';
                                }
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${GA_TRACKING_ID}');
                            `),
                        }}
                        // https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_document.js
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
