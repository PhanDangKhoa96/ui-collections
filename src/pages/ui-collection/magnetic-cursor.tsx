import Credit from "@/components/Credit"
import UICollectionLayout from "@/components/ui-collection-layout"
import gsap from "gsap"
import React, { MouseEvent, useEffect, useRef } from "react"

const MagneticCursor = () => {
    const $wrapper = useRef<HTMLDivElement>(null)
    const $outerContainer = useRef<HTMLDivElement>(null)
    const containerWidth = useRef(0)
    const containerHeight = useRef(0)
    const $target = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const updateContainerSize = () => {
            containerWidth.current = $outerContainer.current!.offsetWidth
            containerHeight.current = $outerContainer.current!.offsetHeight
        }
        updateContainerSize()
        window.addEventListener("resize", updateContainerSize)

        return () => {
            window.removeEventListener("resize", updateContainerSize)
        }
    }, [])
    const handleMouseLeave = () => {
        gsap.to($target.current, {
            x: 0,
            y: 0,
            ease: "elastic.out",
            duration: 2,
        })
    }
    const handleMouseMove = (e: MouseEvent) => {
        const halfWidth = containerWidth.current / 2
        const halfHeight = containerHeight.current / 2

        const mouseX = e.clientX - $outerContainer.current!.offsetLeft
        const mouseY = e.clientY - $outerContainer.current!.offsetTop

        const x = gsap.utils.interpolate(
            -halfWidth,
            halfWidth,
            mouseX / containerWidth.current
        )

        const y = gsap.utils.interpolate(
            -halfHeight,
            halfHeight,
            mouseY / containerHeight.current
        )

        if (Math.abs(x) > halfWidth || Math.abs(y) > halfHeight) {
            handleMouseLeave()
        } else
            gsap.to($target.current, {
                x: x * 0.8,
                y: y * 0.8,
                ease: "power3.out",
                duration: 1.8,
            })
    }

    return (
        <UICollectionLayout
            metaTitle="Magnetic Cursor"
            keywords="magnetic cursor, gsap custom cursor, gsap magnetic cursor, custom cursor, gsap quickto, magnetic effect, mouse move cursor animation"
        >
            <div className="grid h-screen place-items-center" ref={$wrapper}>
                <div>
                    <div className="container mb-10 grid place-items-center">
                        <div className="relative z-10 text-center">
                            <h1 className="mb-3 small-title">
                                Magnetic Cursor
                            </h1>

                            <p>Hover within the container to see the effect.</p>

                            <Credit
                                inspiredLink="http://manifesto.clapat.com/"
                                inspiredName="manifesto.clapat"
                                githubLink="https://github.com/PhanDangKhoa96/ui-animations/blob/main/src/pages/ui-collection/magnetic-cursor.tsx"
                            />
                        </div>
                    </div>
                    <div
                        className="mx-auto grid aspect-square w-52 place-items-center border border-solid border-seasalt"
                        ref={$outerContainer}
                        onMouseLeave={handleMouseLeave}
                        onMouseMove={handleMouseMove}
                    >
                        <div
                            className="grid aspect-square w-1/2 cursor-pointer place-items-center rounded-full bg-seasalt text-vampire-black"
                            ref={$target}
                        >
                            Foo
                        </div>
                    </div>
                </div>
            </div>
        </UICollectionLayout>
    )
}

export default MagneticCursor
