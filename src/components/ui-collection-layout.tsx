import { ReactLenis } from "@studio-freight/react-lenis"
import gsap from "gsap"
import React, { useEffect, useRef } from "react"
import BackToCollection from "./BackToCollection"
import { NextSeo } from "next-seo"
import { seo } from "@/data"
import { myDomain } from "@/constansts"

const UICollectionLayout = ({
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
    const lenisRef = useRef<any>(null)
    useEffect(() => {
        function update(time: number) {
            lenisRef.current?.raf(time * 1000)
        }

        gsap.ticker.add(update)

        return () => {
            gsap.ticker.remove(update)
        }
    })

    const seoTitle = metaTitle + " | Khoa Phan"
    return (
        <>
            <NextSeo
                title={seoTitle}
                description={metaDescription}
                canonical={window.location.href}
                openGraph={{
                    url: window.location.href,
                    title: seoTitle,
                    description: metaDescription,
                    images: [
                        {
                            url: "/og-image.svg",
                            alt: seoTitle,
                        },
                    ],
                    siteName: seoTitle,
                }}
                additionalMetaTags={[
                    {
                        name: "keywords",
                        content: keywords || seo.keywords,
                    },
                ]}
            />

            <ReactLenis root ref={lenisRef} autoRaf={false}>
                <BackToCollection />
                <div className="">{children}</div>
            </ReactLenis>
        </>
    )
}

export default UICollectionLayout
