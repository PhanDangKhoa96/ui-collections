import UICollectionLayout from "@/components/ui-collection-layout"
import gsap from "gsap"
import Flip from "gsap/dist/Flip"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Credit from "@/components/Credit"

if (typeof window !== "undefined") {
    gsap.registerPlugin(Flip, ScrollTrigger)
}

const ZoomInImage = () => {
    const $wrapper = useRef<HTMLDivElement>(null)
    const $target = useRef<HTMLDivElement>(null)
    const $targetWrapper = useRef<HTMLDivElement>(null)

    const [vw, setVw] = useState(0)

    const flipstate = useRef<any>(null)

    useEffect(() => {
        window.addEventListener("resize", () => {
            setVw(window.innerWidth)
        })

        return () => {
            window.removeEventListener("resize", () => {
                setVw(window.innerWidth)
            })
        }
    }, [])

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Add style for final state
            $target.current!.style.height = "100vh"
            $target.current!.style.width = "100%"
            $target.current!.style.aspectRatio = "auto"

            // Get the final state style
            flipstate.current = Flip.getState($target.current)

            // Remove the final state and add style for initial state
            $target.current!.style.height = "70vh"
            $target.current!.style.width = "auto"
            $target.current!.style.aspectRatio = "2/3"

            // Animate the state via Scrolltrigger
            Flip.to(flipstate.current, {
                ease: "none",
                absoluteOnLeave: true,
                simple: true,
                scrollTrigger: {
                    trigger: $targetWrapper.current,
                    start: "center center",
                    end: "+=300%",
                    pin: $targetWrapper.current,
                    scrub: true,
                    // markers: true,
                },
            })
        }, $wrapper)

        return () => {
            ctx.revert()
        }
    }, [vw])

    return (
        <UICollectionLayout>
            <div className="h-[500vh] overflow-hidden" ref={$wrapper}>
                <div className="grid h-screen place-items-center">
                    <div className="container mb-10 grid place-items-center">
                        <div className="relative z-10 text-center">
                            <h1 className="mb-3 small-title">Zoom in image</h1>

                            <p>Start scrolling to experience the effect.</p>

                            <Credit
                                inspiredLink="https://www.vrtlwrld.io/"
                                inspiredName="VRTL WORLD"
                                codeRefLink="https://tympanus.net/codrops/"
                                codeRefName="Codrops"
                                imgSrcName="@ameth.broccoli"
                                imgSrcLink="https://www.instagram.com/ameth.broccoli/"
                            />
                        </div>
                    </div>
                </div>
                <div
                    className="grid h-screen place-items-center"
                    ref={$targetWrapper}
                >
                    <div ref={$target} className="relative">
                        <Image
                            src={"/zoom-in-image/image.png"}
                            alt="image scroll zoom"
                            sizes="100vw"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </UICollectionLayout>
    )
}

export default ZoomInImage
