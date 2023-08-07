import { seo } from "@/data"
import { NextSeo } from "next-seo"
import React from "react"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({
    children,
    metaTitle,
    metaDescription,
    keywords,
}: {
    children: React.ReactNode
    metaTitle: string
    metaDescription?: string
    keywords?: string
}) => {
    const seoTitle = metaTitle + " | Khoa Phan"
    return (
        <>
            <NextSeo
                title={seoTitle}
                // description={metaDescription}
                // canonical={window.location.href}
                // openGraph={{
                //     url: window.location.href,
                //     title: seoTitle,
                //     description: metaDescription,
                //     images: [
                //         {
                //             url: "/og-image.svg",
                //             alt: seoTitle,
                //         },
                //     ],
                //     siteName: seoTitle,
                // }}
                // additionalMetaTags={[
                //     {
                //         name: "keywords",
                //         content: keywords || seo.keywords,
                //     },
                // ]}
            />
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout
