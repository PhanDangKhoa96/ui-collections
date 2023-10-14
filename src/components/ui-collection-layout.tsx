import { seo } from "@/data"
import { ReactLenis } from "@studio-freight/react-lenis"
import gsap from "gsap"
import { NextSeo } from "next-seo"
import React, { useEffect, useRef } from "react"
import BackToCollection from "./BackToCollection"

const UICollectionLayout = ({
    children,
    metaTitle,
    metaDescription,
    keywords,
    horizontalScroll = false,
}: {
    children: React.ReactNode
    metaTitle: string
    metaDescription?: string
    keywords?: string
    horizontalScroll?: boolean
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
                canonical={
                    typeof window !== "undefined" ? window.location.href : ""
                }
                openGraph={{
                    url:
                        typeof window !== "undefined"
                            ? window.location.href
                            : "",
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

            <ReactLenis
                root
                ref={lenisRef}
                autoRaf={false}
                options={{
                    orientation: horizontalScroll ? "horizontal" : "vertical",
                }}
            >
                <BackToCollection />
                <div className="">{children}</div>
            </ReactLenis>
        </>
    )
}

export default UICollectionLayout
