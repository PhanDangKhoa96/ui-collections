import UICollectionLayout from "@/components/ui-collection-layout"
import { cards } from "@/data"
import getGrid from "@/utils/getGrid"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import Image from "next/image"
import { forwardRef, useEffect, useRef } from "react"

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

const generateRandomImage = () => {
    return `/grid-layout-effect/${Math.floor(Math.random() * 19) + 1}.jpg`
}

const grids = [
    { perspective: 1000, gridColumns: 6, numberOfCards: 48, cardRatio: 3 / 4 },
    { perspective: 2000, gridColumns: 6, numberOfCards: 48, cardRatio: 0.8 },
    { perspective: 1500, gridColumns: 8, numberOfCards: 48, cardRatio: 1.2 },
    { perspective: 3000, gridColumns: 3, numberOfCards: 27, cardRatio: 0.8 },
    { perspective: 1200, gridColumns: 6, numberOfCards: 48, cardRatio: 1.5 },
]

const GridLayoutScroll = () => {
    return (
        <UICollectionLayout metaTitle="Grid Layout Scroll">
            <div className="overflow-hidden">
                <section className="h-screen"></section>
                {grids.map(
                    (
                        { perspective, gridColumns, numberOfCards, cardRatio },
                        index
                    ) => {
                        const type = `type-${index + 1}`
                        return (
                            <>
                                <GridWrapper
                                    key={index}
                                    perspective={perspective}
                                    type={type}
                                    gridColumns={gridColumns}
                                    numberOfCards={numberOfCards}
                                    cardRatio={cardRatio}
                                />
                                <div className="h-[50vh]"></div>
                            </>
                        )
                    }
                )}
                <div className="h-screen"></div>
            </div>
        </UICollectionLayout>
    )
}

const GridWrapper = ({
    perspective = 1000,
    type,
    numberOfCards,
    cardRatio,
    gridColumns,
}: {
    perspective: number
    type: string
    numberOfCards: number
    cardRatio: number
    gridColumns: number
}) => {
    const $grid = useRef<HTMLDivElement>(null)
    const $gridWrap = useRef<HTMLDivElement>(null)
    const $cards = useRef<Array<HTMLDivElement | null>>([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.config({ force3D: true })
            const tl = gsap.timeline({
                defaults: { ease: "none" },

                scrollTrigger: {
                    trigger: $grid.current,
                    // markers: true,
                    start: "top bottom+=5%",
                    end: "bottom top-=5%",
                    scrub: 0.6,
                },
            })
            switch (type) {
                case "type-1": {
                    tl.set($cards.current, {
                        z: () => gsap.utils.random(-1600, 200),
                        xPercent: () => gsap.utils.random(-1000, -500),
                        scale: 1.5,
                        immediateRender: true,
                    }).set($gridWrap.current, {
                        rotateY: 25,
                        immediateRender: true,
                    })

                    tl.to($cards.current, {
                        xPercent: () => gsap.utils.random(-500, 1000),
                        scale: 1,
                    })
                    break
                }

                case "type-2": {
                    tl.set($cards.current, {
                        z: () => gsap.utils.random(-3000, -1000),
                        yPercent: () => gsap.utils.random(100, 1000),

                        rotateY: -45,
                        filter: "brightness(200%)",
                        immediateRender: true,
                    }).set($gridWrap.current, {
                        rotateX: 20,
                        rotateZ: -5,
                        immediateRender: true,
                    })

                    tl.to($cards.current, {
                        yPercent: () => gsap.utils.random(-1000, 100),
                        rotateY: 45,
                        scale: 1,
                        filter: "brightness(0%)",
                    }).to(
                        $gridWrap.current,
                        {
                            rotateZ: 10,
                            rotateX: -20,
                            scale: 1.2,
                        },
                        0
                    )
                    break
                }

                case "type-3": {
                    tl.set($cards.current, {
                        z: () => gsap.utils.random(-5000, -2000),
                        rotationX: () => gsap.utils.random(-65, -25),
                        filter: "brightness(0%)",
                        transformOrigin: "50% 0%",
                        immediateRender: true,
                    })

                    tl.to($cards.current, {
                        xPercent: () => gsap.utils.random(-150, 150),
                        yPercent: () => gsap.utils.random(-300, 300),
                        rotationX: 0,
                        filter: "brightness(200%)",
                        scale: 1.5,
                    })

                    tl.to($gridWrap.current, { z: 6500 }, 0)

                    break
                }

                case "type-4": {
                    tl.set($cards.current, {
                        transformOrigin: "50% 0%",
                        immediateRender: true,
                        rotateX: -70,
                        filter: "brightness(120%)",
                    }).set($gridWrap.current, {
                        rotationY: 30,
                        width: "50%",
                        xPercent: -40,
                        transformOrigin: "0% 50%",
                        immediateRender: true,
                    })

                    tl.to(
                        $cards.current,
                        {
                            z: 500,
                            duration: 0.5,
                            stagger: 0.04,
                            ease: "power2",
                        },
                        0
                    )
                        .to(
                            $cards.current,
                            {
                                z: 0,
                                duration: 0.5,
                                stagger: 0.04,
                                ease: "power2.in",
                            },
                            0.5
                        )
                        .to(
                            $cards.current,
                            {
                                rotateX: 70,
                                stagger: 0.04,
                                duration: 1,
                                filter: "brightness(0%)",
                            },
                            0
                        )

                    break
                }

                case "type-5": {
                    tl.set($cards.current, {
                        immediateRender: true,
                        filter: "brightness(0%)",
                    }).set($gridWrap.current, {
                        rotateX: 50,
                        immediateRender: true,
                    })

                    const gridObj: any = getGrid([...$cards.current])

                    tl.to($gridWrap.current, { rotateX: 30 })
                        .to(
                            $cards.current,
                            {
                                filter: "brightness(120%)",
                            },
                            0
                        )
                        .to(
                            gridObj.rows("even"),
                            {
                                xPercent: -100,
                                ease: "power1",
                            },
                            0
                        )
                        .to(
                            gridObj.rows("odd"),
                            {
                                xPercent: 100,
                                ease: "power1",
                            },
                            0
                        )
                        .addLabel("translateItems", ">-=0.15")
                        .to(
                            $cards.current,
                            {
                                ease: "power1",
                                yPercent: () => gsap.utils.random(-100, 200),
                            },
                            "translateItems"
                        )

                    break
                }

                default:
                    break
            }
        }, $grid)
        return () => {
            ctx.revert()
        }
    }, [])

    return (
        <section ref={$grid}>
            <div
                className=""
                style={{
                    perspective: `${perspective}px`,
                    transformStyle: "preserve-3d",
                }}
            >
                <div
                    className="grid gap-10 px-10 py-[10vh]"
                    style={{
                        transformStyle: "preserve-3d",
                        gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
                    }}
                    ref={$gridWrap}
                >
                    {[...Array(numberOfCards).keys()].map((_, index) => {
                        return (
                            <Card
                                aspectRaito={cardRatio}
                                index={index}
                                key={index}
                                ref={$cards}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

const Card = forwardRef<
    Array<HTMLDivElement | null>,
    { index: number; aspectRaito: number }
>(function CardOne({ index, aspectRaito }, ref) {
    useEffect(() => {}, [])

    return (
        <div
            className="relative overflow-hidden rounded-lg"
            style={{ aspectRatio: aspectRaito }}
            ref={(el) => {
                if (ref && "current" in ref && ref.current)
                    return (ref.current[index] = el)
            }}
        >
            <Image
                src={generateRandomImage()}
                alt="Grid layout image"
                fill
                className="object-cover"
                sizes="16vw"
            />
        </div>
    )
})

export default GridLayoutScroll
