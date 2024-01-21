import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import React, { useEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

const TextClipPath = () => {
    const $content = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: $content.current,
                    markers: true,
                    start: "top bottom",
                    scrub: true,
                },
                defaults: {
                    ease: "none",
                },
            })
            $content?.current &&
                tl.fromTo(
                    $content.current.querySelector("svg clipPath"),
                    {
                        xPercent: 40,
                    },
                    {
                        xPercent: -40,
                    }
                )
        }, [])

        return () => ctx.revert()
    }, [])

    return (
        <div className="overflow-hidden">
            <div className="h-screen bg-purple-400"></div>

            <div className="content" ref={$content}>
                <svg>
                    <clipPath id="clip">
                        <text x="0ch" y="0.95em" className="text-[20vw]">
                            X
                        </text>
                        <text x="1ch" y="0.95em" className="text-[20vw]">
                            o
                        </text>
                        <text x="2ch" y="0.95em" className="text-[20vw]">
                            g
                        </text>
                        <text x="3ch" y="0.95em" className="text-[20vw]">
                            o
                        </text>
                        <text x="4ch" y="0.95em" className="text-[20vw]">
                            x
                        </text>
                        <text x="5ch" y="0.95em" className="text-[20vw]">
                            y
                        </text>
                    </clipPath>
                </svg>
                <div style={{ clipPath: "url(#clip)" }} className="h-[28vw]">
                    <div className="h-[120%] w-[120%] bg-[url('/grid-layout-effect/1.jpg')] bg-cover bg-no-repeat" />
                </div>
                <div style={{ clipPath: "url(#clip-0)" }}>
                    <div style={{ backgroundImage: "url(img/2.jpg)" }} />
                </div>
            </div>

            <div className="h-screen bg-purple-400"></div>
        </div>
    )
}

export default TextClipPath
