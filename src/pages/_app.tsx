import { seo } from "@/data"
import "@/styles/global.scss"
import { DefaultSeo, NextSeo } from "next-seo"
import type { AppProps } from "next/app"
import Head from "next/head"

export default function App({ Component, pageProps }: AppProps) {
    const { metaTitle, metaImage, metaDescription, canonicalURL, keywords } =
        seo || {}
    return (
        <>
            <Head>
                <meta name="robots" content="index,follow" />

                <link
                    rel="preload"
                    href="/fonts/AcuminPro-Bold.woff2"
                    as="font"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/fonts/AcuminPro-Bold.woff"
                    as="font"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/fonts/AcuminPro-Regular.woff2"
                    as="font"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/fonts/AcuminPro-Regular.woff"
                    as="font"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/fonts/AcuminProCond-Semibold.woff2"
                    as="font"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/fonts/AcuminProCond-Semibold.woff"
                    as="font"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/fonts/AcuminProCond-Bold.woff2"
                    as="font"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/fonts/AcuminProCond-Bold.woff"
                    as="font"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/fonts/AcuminProCond-Light.woff2"
                    as="font"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/fonts/AcuminProCond-Light.woff"
                    as="font"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/fonts/Baskerville-Italic.woff2"
                    as="font"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/fonts/Baskerville-Italic.woff"
                    as="font"
                    crossOrigin="anonymous"
                />
            </Head>

            <DefaultSeo
                title={metaTitle}
                description={metaDescription}
                canonical={canonicalURL || "https://www.pldkhoa.dev/"}
                openGraph={{
                    url: "https://www.pldkhoa.dev/",
                    title: metaTitle,
                    description: metaDescription,
                    images: [
                        {
                            url: metaImage,
                            alt: metaTitle,
                        },
                    ],
                    siteName: metaTitle,
                }}
                additionalLinkTags={[
                    {
                        rel: "icon",
                        href: "/logo-no-background.svg",
                    },
                    {
                        rel: "apple-touch-icon",
                        href: "/logo-no-background.svg",
                    },
                ]}
                additionalMetaTags={[
                    {
                        name: "keywords",
                        content: keywords,
                    },
                ]}
            />

            <Component {...pageProps} />
        </>
    )
}
