import "@/styles/global.scss"
import type { AppProps } from "next/app"
import Head from "next/head"
import { NextSeo } from "next-seo"
import { seo } from "@/data"

export default function App({ Component, pageProps }: AppProps) {
    const { metaTitle, metaImage, metaDescription, canonicalURL, keywords } =
        seo || {}
    return (
        <>
            <Head>
                <meta name="robots" content="index,follow" />
                <meta name="keywords" content={keywords} />
                <link rel="shortcut icon" href="/logo-no-background.svg" />

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
            <NextSeo
                title={metaTitle}
                description={metaDescription}
                canonical={canonicalURL || ""}
                openGraph={{
                    url: "https://www.pldkhoa.dev/",
                    title: metaTitle,
                    description: metaDescription,
                    images: [
                        {
                            url: metaImage?.data?.attributes?.url,
                            alt: "Og Image Alt",
                        },
                    ],
                    siteName: metaTitle,
                }}
            />
            <Component {...pageProps} />
        </>
    )
}
