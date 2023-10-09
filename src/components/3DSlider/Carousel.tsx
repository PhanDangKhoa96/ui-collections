import getPiramidalIndex from "@/utils/getPiramidalIndex"
import lerp from "@/utils/lerp"
import { ThreeEvent, useFrame, useThree } from "@react-three/fiber"
import gsap from "gsap"
import { RefObject, useEffect, useMemo, useRef, useState } from "react"
import { Event, Object3D } from "three"
import { Group } from "three/src/Three"
import CarouselItem from "./CarouselItem"
import PostProcessing from "./PostProcessing"

const planeSetting = {
    width: 1,
    height: 2.5,
    gap: 0.15,
}

gsap.defaults({
    ease: "power3.out",
    duration: 2.5,
})

const images = [
    "/3d-slider/1.jpg",
    "/3d-slider/2.jpg",
    "/3d-slider/3.jpg",
    "/3d-slider/4.jpg",
    "/3d-slider/5.jpg",
    "/3d-slider/6.jpg",
    "/3d-slider/7.jpg",
    "/3d-slider/8.jpg",
    "/3d-slider/9.jpg",
]

const wheelSpeed = 0.05
const mouseMoveSpeed = 0.009

const Carousel = () => {
    const [$root, setRoot] = useState<Group | null>(null)

    const $postProcess = useRef<any>(null)
    const progress = useRef<number>(0)
    const isDown = useRef<boolean>(false)
    const startX = useRef<number>(0)
    const speed = useRef(0)
    const oldProgess = useRef(0)
    const [disableWheel, setDisableWheel] = useState<boolean>(false)
    const [activeIndex, setActiveIndex] = useState<number>(0)
    const $items = useMemo(() => {
        if ($root) return $root.children

        return null
    }, [$root])
    const { viewport } = useThree()
    const displayItem = (
        item: Object3D<Event>,
        index: number,
        activeIndex: number
    ) => {
        if (!$items) return
        const piramidalIndex = getPiramidalIndex($items, activeIndex)[index]
        gsap.to(item.position, {
            x: () =>
                (index - activeIndex) * (planeSetting.width + planeSetting.gap),
            y: () => $items.length * -0.1 + piramidalIndex * 0.1,
        })
    }

    //  =============
    // Handle Progress
    //  =============

    useFrame(() => {
        progress.current = Math.max(0, Math.min(progress.current, 100))

        const itemsLength = $items?.length || 0
        const active = Math.floor((progress.current / 100) * (itemsLength - 1))

        $items?.forEach((item, index) => {
            displayItem(item, index, active)
        })

        speed.current = lerp(
            speed.current,
            Math.abs(oldProgess.current - progress.current),
            0.1
        )

        oldProgess.current = lerp(oldProgess.current, progress.current, 0.1)

        if ($postProcess.current) {
            $postProcess.current.thickness = speed.current
        }
    })

    //  =============
    // Handle state update on click
    //  =============
    useEffect(() => {
        const itemsLength = $items?.length || 0
        progress.current = (activeIndex / (itemsLength - 1)) * 100
    }, [activeIndex, $items])

    const handleWheel = (e: ThreeEvent<WheelEvent>) => {
        if (disableWheel) return

        const isVerticalWheel = Math.abs(e.deltaY) > Math.abs(e.deltaX)
        const wheelProgress = isVerticalWheel ? e.deltaY : e.deltaX

        progress.current = progress.current + wheelProgress * wheelSpeed
    }

    const handleMouseDown = (e: ThreeEvent<PointerEvent>) => {
        isDown.current = true
        startX.current = e.clientX
    }

    const handleMouseUp = (e: ThreeEvent<PointerEvent>) => {
        isDown.current = false
        startX.current = e.clientX
    }

    const handleMouseMove = (e: ThreeEvent<PointerEvent>) => {
        if (!isDown.current) return

        const clientX = e.clientX

        const mouseProgress = -(clientX - startX.current) * mouseMoveSpeed

        progress.current = progress.current + mouseProgress
    }

    return (
        <>
            <mesh
                position={[0, 0, -0.01]}
                onWheel={handleWheel}
                onPointerDown={handleMouseDown}
                onPointerUp={handleMouseUp}
                onPointerMove={handleMouseMove}
            >
                <planeGeometry args={[viewport.width, viewport.height]} />
                <meshBasicMaterial transparent={true} opacity={0} />
            </mesh>
            <group ref={setRoot}>
                {images.map((image: string, index: number) => {
                    return (
                        <CarouselItem
                            index={index}
                            activeIndex={activeIndex}
                            setActiveIndex={setActiveIndex}
                            key={image}
                            image={image}
                            width={planeSetting.width}
                            height={planeSetting.height}
                            setDisableWheel={setDisableWheel}
                        />
                    )
                })}
            </group>
            {/* <PostProcessing ref={$postProcess} /> */}
        </>
    )
}

export default Carousel
