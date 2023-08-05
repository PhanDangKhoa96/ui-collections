import UICollectionLayout from "@/components/ui-collection-layout"
import React, { MouseEvent, useEffect, useRef } from "react"
import Image from "next/image"
import Credit from "@/components/Credit"

const cardImages = [
    "https://images.unsplash.com/photo-1689332220015-24660b6319d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1689199784023-9aaad19418eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1689094628217-54318a9c98f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1688870550853-f5956b4c010d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1689101298178-4db5b7a8c49f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1688989680825-0790dc6488fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1688507383637-78f49f095269?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQxfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1688362809005-e1d27bf427ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=700&q=80",
]

const DraggableSlider = () => {
    const vw = useRef(0)
    const mouseDownX = useRef(0)
    const prePercentage = useRef(0)
    const nextPercentage = useRef(0)
    const $slider = useRef<HTMLDivElement>(null)
    const handleOnMouseDown = (event: MouseEvent) => {
        mouseDownX.current = event.clientX
    }

    const handleOnMouseMove = (event: MouseEvent) => {
        if (!mouseDownX.current) return

        const images = $slider.current!.querySelectorAll("img")
        // drag mouse 50vw will transfrom from 0 -> -100%
        const maxSlidingWidth = vw.current / 2
        const deltaX = mouseDownX.current - event.clientX

        const percentage = (deltaX / maxSlidingWidth) * -100

        nextPercentage.current = Math.max(
            Math.min(prePercentage.current + percentage, 0),
            -100
        )

        $slider.current!.animate(
            {
                transform: `translateX(${nextPercentage.current}%) translateY(-50%)`,
            },
            { duration: 2000, fill: "forwards" }
        )

        images.forEach((image) => {
            image.animate(
                {
                    objectPosition: `${nextPercentage.current + 100}% center`,
                },
                { duration: 2000, fill: "forwards" }
            )
        })
    }

    const handleOnMouseUp = () => {
        mouseDownX.current = 0
        prePercentage.current = nextPercentage.current
    }

    useEffect(() => {
        vw.current = window.innerWidth
        const updateViewWidth = () => {
            vw.current = window.innerWidth
        }

        window.addEventListener("resize", updateViewWidth)
        return () => {
            window.removeEventListener("resize", updateViewWidth)
        }
    }, [])

    return (
        <UICollectionLayout>
            <div className="grid h-screen place-items-center">
                <div className="container text-center">
                    <h1 className="mb-5 small-title">Draggable Slider</h1>
                    <p className="mx-auto max-w-lg">
                        Try to drag left and right inside the{" "}
                        <span className="text-amber-400">yellow</span> container
                        to see the effect
                    </p>

                    <Credit
                        inspiredLink="https://camillemormal.com/"
                        inspiredName="camillemormal"
                        codeRefName="Hyperplexed"
                        codeRefLink="https://www.youtube.com/@Hyperplexed"
                        imgSrcLink="https://unsplash.com/"
                        imgSrcName="Unplash"
                    />
                </div>
            </div>

            <div
                className="relative h-screen cursor-grab overflow-hidden bg-amber-400"
                onMouseDown={handleOnMouseDown}
                onMouseMove={handleOnMouseMove}
                onMouseUp={handleOnMouseUp}
            >
                <div
                    className="absolute left-1/2 top-1/2 -translate-y-1/2 transition-transform duration-1000 will-change-transform"
                    ref={$slider}
                >
                    {/* -mx-[10vw] is for the first and the last card in center */}
                    <div className="relative -mx-[10vw] flex gap-x-[2vw]">
                        {cardImages.map((image) => (
                            <div className="relative aspect-[9/12] w-[20vw]">
                                <Image
                                    className="pointer-events-none select-none object-cover object-[100%_50%]"
                                    src={image}
                                    fill
                                    sizes="20vw"
                                    priority
                                    alt="Draggable slider"
                                />
                                <div className="absolute inset-0 bg-black/20"></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-[2vw]"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                        />
                    </svg>
                </div>
            </div>
        </UICollectionLayout>
    )
}

export default DraggableSlider
