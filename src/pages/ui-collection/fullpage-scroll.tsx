import Credit from "@/components/Credit"
import UICollectionLayout from "@/components/ui-collection-layout"
import gsap from "gsap"
import React, { useEffect, useRef } from "react"

const screens = [
    {
        title: "Fullpage slider",
        image: "/fullpage-scroll/fullpage-scroll-1.jpg",

        id: 1,
    },
    {
        title: "Fullpage slider",
        image: "/fullpage-scroll/fullpage-scroll-2.jpg",

        id: 2,
    },
    {
        title: "Fullpage slider",
        image: "/fullpage-scroll/fullpage-scroll-3.jpg",

        id: 3,
    },
    {
        title: "Fullpage slider",
        image: "/fullpage-scroll/fullpage-scroll-4.jpg",

        id: 4,
    },
    {
        title: "Fullpage slider",
        image: "/fullpage-scroll/fullpage-scroll-5.jpg",
        id: 5,
    },
]

const tlDefaults = {
    ease: "slow.inOut",
    duration: 1.25,
}

const FullpageScroll = () => {
    const $wrapper = useRef<HTMLDivElement>(null)
    const $pagination = useRef<HTMLDivElement>(null)
    const listening = useRef(true)
    const direction = useRef("down")
    const currentSlide = useRef<number | undefined>(undefined)
    const next = useRef(0)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const sections = $wrapper?.current?.querySelectorAll("section")
            const images = $wrapper?.current?.querySelectorAll(".bg")
            const outerWrappers: HTMLDivElement[] = gsap.utils.toArray(".outer")
            const innerWrappers: HTMLDivElement[] = gsap.utils.toArray(".inner")
            const headings: HTMLHeadingElement[] =
                gsap.utils.toArray(".section-heading")

            gsap.set(outerWrappers, { yPercent: 100 })
            gsap.set(innerWrappers, { yPercent: -100 })

            // Slides a section in on scroll down
            function slideIn() {
                // The first time this function runs, current is undefined
                if (currentSlide?.current !== undefined) {
                    gsap.set(sections![currentSlide?.current], { zIndex: 0 })
                }

                gsap.set(sections![next?.current], {
                    autoAlpha: 1,
                    zIndex: 1,
                })
                gsap.set(images![next?.current], { yPercent: 0 })

                const tl = gsap.timeline({
                    paused: true,
                    defaults: tlDefaults,
                    onComplete: () => {
                        listening.current = false
                        currentSlide.current = next?.current
                    },
                })

                tl.to(
                    [
                        outerWrappers[next?.current],
                        innerWrappers[next?.current],
                    ],
                    { yPercent: 0 },
                    0
                )
                    .fromTo(
                        images![next?.current],
                        { yPercent: 15 },
                        { yPercent: 0 },
                        0
                    )
                    .to(
                        $pagination.current,
                        {
                            width: `${
                                ((next.current + 1) / screens.length) * 100
                            }%`,
                        },
                        0
                    )
                    .fromTo(
                        headings![next?.current],
                        { scale: 1.2, autoAlpha: 0, y: 40 },
                        { scale: 1, autoAlpha: 1, y: 0 },
                        "<0.25"
                    )

                if (currentSlide?.current !== undefined) {
                    images &&
                        tl.add(
                            gsap.to(images[currentSlide?.current], {
                                yPercent: -15,
                                ...tlDefaults,
                            }),
                            0
                        )

                    sections &&
                        images &&
                        tl.add(
                            gsap
                                .timeline()
                                .set(outerWrappers[currentSlide?.current], {
                                    yPercent: 100,
                                })
                                .set(innerWrappers[currentSlide?.current], {
                                    yPercent: -100,
                                })
                                .set(images[currentSlide?.current], {
                                    yPercent: 0,
                                })
                                .set(sections[currentSlide?.current], {
                                    autoAlpha: 0,
                                })
                        )
                }

                tl.play(0)
            }

            // Slides a section out on scroll up
            function slideOut() {
                gsap.set(sections![currentSlide.current!], { zIndex: 1 })
                gsap.set(sections![next.current], { autoAlpha: 1, zIndex: 0 })
                gsap.set(
                    [
                        outerWrappers[next?.current],
                        innerWrappers[next?.current],
                    ],
                    {
                        yPercent: 0,
                    }
                )
                gsap.set(images![next?.current], { yPercent: 0 })

                const tl = gsap.timeline({
                    paused: true,
                    defaults: tlDefaults,
                    onComplete: () => {
                        listening.current = false
                        currentSlide.current = next.current
                    },
                })

                tl.to(
                    outerWrappers[currentSlide?.current!],
                    { yPercent: 100 },
                    0
                )
                    .to(
                        innerWrappers[currentSlide?.current!],
                        { yPercent: -100 },
                        0
                    )
                    .to(images![currentSlide?.current!], { yPercent: 15 }, 0)
                    .fromTo(
                        images![next?.current],
                        { yPercent: -15, scale: 1.2 },
                        { yPercent: 0, scale: 1 },
                        0
                    )
                    .to(
                        $pagination.current,
                        {
                            width: currentSlide.current
                                ? `${
                                      (currentSlide.current / screens.length) *
                                      100
                                  }%`
                                : "100%",
                        },
                        0
                    )
                    .fromTo(
                        headings![next?.current],
                        { scale: 1.2, autoAlpha: 0, y: 40 },
                        { scale: 1, autoAlpha: 1, y: 0 },
                        "<0.25"
                    )
                    .set(images![currentSlide?.current!], { yPercent: 0 })

                tl.play(0)
            }

            function handleWheel(e: WheelEvent) {
                if (listening.current) return

                direction.current = e.deltaY > 0 ? "down" : "up"
                handleDirection()
            }

            function handleKeydown(e: KeyboardEvent) {
                if (listening.current) return

                if (e.code === "ArrowDown") {
                    // up arrow
                    direction.current = "down"
                } else if (e.code === "ArrowUp") {
                    // down arrow
                    direction.current = "up"
                } else {
                    return
                }
                handleDirection()
            }

            function handleDirection() {
                listening.current = true
                if (direction?.current === "down") {
                    next.current = currentSlide.current! + 1
                    if (next?.current >= sections!.length) next.current = 0
                    slideIn()
                }

                if (direction?.current === "up") {
                    next.current = currentSlide?.current! - 1

                    if (next?.current < 0) next.current = sections!.length - 1

                    slideOut()
                }
            }

            window.addEventListener("wheel", handleWheel)
            window.addEventListener("keydown", handleKeydown)

            slideIn()

            return () => {
                window.removeEventListener("wheel", handleWheel)
                window.removeEventListener("keydown", handleKeydown)
            }
        }, $wrapper)

        return () => {
            ctx.revert()
        }
    }, [])

    return (
        <UICollectionLayout
            metaTitle="Fullpage Slider"
            keywords="fullpage slider, fullpage scroll, fullpage slider gsap, fullpage slider scroll, gsap slider, slider parallax, slider animation, smooth fullpage scroll gsap"
        >
            <div className="fullpage-scroll relative h-screen" ref={$wrapper}>
                {screens.map((screen) => {
                    return (
                        <section
                            key={screen.id}
                            className={`invisible fixed top-0 h-full w-full will-change-transform `}
                        >
                            <div className="outer h-full w-full overflow-y-hidden will-change-transform">
                                <div className="inner h-full w-full overflow-hidden will-change-transform">
                                    <div
                                        className="bg absolute inset-0 flex items-center justify-center bg-cover bg-center"
                                        style={{
                                            backgroundImage: `linear-gradient(
                                        180deg,
                                        rgba(0, 0, 0, 0.6) 0%,
                                        rgba(0, 0, 0, 0.3) 100%
                                    ), url(${screen.image})`,
                                        }}
                                    >
                                        <div className="section-heading z-[2] w-[90%] max-w-6xl text-center text-seasalt will-change-transform">
                                            <h2 className="mb-3 tracking-[0.5em] small-title">
                                                {screen.title}
                                            </h2>

                                            <p>
                                                A fullpage slider triggered with
                                                mouse wheel and keyboard (up and
                                                down) events.
                                            </p>

                                            <Credit
                                                imgSrcName="Codrops"
                                                imgSrcLink="https://tympanus.net/codrops/2023/06/12/free-ai-generated-images-vol-1/"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                })}

                {/* Pagination */}
                <div
                    className="absolute bottom-0 left-0 z-20 h-1 bg-seasalt"
                    ref={$pagination}
                ></div>
            </div>
        </UICollectionLayout>
    )
}

export default FullpageScroll
