import React, { Dispatch, useEffect, useRef, useState } from "react"
import Plane from "./Plane"
import { Group } from "three/src/Three"
import gsap from "gsap"
import { ThreeEvent, useThree } from "@react-three/fiber"
import { DomEvent } from "@react-three/fiber/dist/declarations/src/core/events"

interface ICarouselItem {
    width: number
    height: number
    image: string
    index: number
    setActiveIndex: Dispatch<number>
    activeIndex: number
    setDisableWheel: Dispatch<boolean>
}

const CarouselItem = ({
    width,
    height,
    image,
    index,
    setActiveIndex,
    activeIndex,
    setDisableWheel,
}: ICarouselItem) => {
    const $root = useRef<Group>(null)
    const [isHover, setIsHover] = useState(false)
    const [isActiveZoom, setIsActiveZoom] = useState(false)
    const { viewport } = useThree()

    useEffect(() => {
        gsap.killTweensOf($root.current!.position)
        gsap.to($root.current!.position, {
            z: isActiveZoom ? 0 : -0.01,
            duration: 0.2,
            ease: "power3.out",
            delay: isActiveZoom ? 0 : 2,
        })
    }, [isActiveZoom])

    useEffect(() => {
        const hoverState = isHover && !isActiveZoom ? 1.1 : 1

        gsap.to($root.current!.scale, {
            x: hoverState,
            y: hoverState,
            duration: 0.5,
            ease: "power3.out",
        })
    }, [isHover, isActiveZoom, activeIndex])

    const handleClose = (e: ThreeEvent<MouseEvent>) => {
        e.stopPropagation()

        if (!isActiveZoom) return
        setIsActiveZoom(false)
        setIsHover(false)
        setDisableWheel(false)
    }

    return (
        <group
            ref={$root}
            onClick={() => {
                setIsActiveZoom(true)
                setActiveIndex(index)
                setDisableWheel(true)
            }}
            onPointerEnter={() => {
                setIsHover(true)
            }}
            onPointerLeave={() => {
                setIsHover(false)
            }}
        >
            <Plane
                width={width}
                image={image}
                height={height}
                isActiveZoom={isActiveZoom}
            />

            {isActiveZoom ? (
                <mesh position={[0, 0, 0.01]} onClick={handleClose}>
                    <planeGeometry args={[viewport.width, viewport.height]} />
                    <meshBasicMaterial
                        transparent={true}
                        opacity={0}
                        color={"red"}
                    />
                </mesh>
            ) : null}
        </group>
    )
}

export default CarouselItem
