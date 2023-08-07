import { ReactLenis } from "@studio-freight/react-lenis"
import gsap from "gsap"
import React, { useEffect, useRef } from "react"
import BackToCollection from "./BackToCollection"
import { NextSeo } from "next-seo"
import { seo } from "@/data"

const UICollectionLayout = ({ children }: { children: React.ReactNode }) => {
    const { metaTitle, metaImage, metaDescription, canonicalURL, keywords } =
        seo || {}

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
    return (
        <>
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
            />

            <ReactLenis root ref={lenisRef} autoRaf={false}>
                <BackToCollection />
                <div className="">{children}</div>
            </ReactLenis>
        </>
    )
}

export default UICollectionLayout
