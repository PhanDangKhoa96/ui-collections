import { Image, Scroll, ScrollControls, useScroll } from "@react-three/drei"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import React, { Suspense, useRef } from "react"
import { Group, Material, MathUtils, Mesh } from "three"

const ParallaxEffect = () => {
    const data = useScroll()

    return (
        <main className="h-screen">
            <Canvas
                gl={{ antialias: false }}
                dpr={[1, 1.5]}
                className={"h-full"}
            >
                <Suspense fallback={null}>
                    <ScrollControls pages={3} damping={0.4}>
                        <Scroll>
                            <Images />
                        </Scroll>
                        {/* <Scroll html>
                        </Scroll> */}
                    </ScrollControls>
                </Suspense>
            </Canvas>
        </main>
    )
}

const Images = () => {
    const $images = useRef<Group>(null)
    const $singleImage = useRef<any>(null)
    const { width, height } = useThree((s) => s.viewport)
    const data = useScroll()

    useFrame((state, delta) => {
        // console.log("delta", delta)
        // $singleImage.current!.position.y = MathUtils.damp(
        //     $singleImage.current!.position.y,
        //     -height / 2 + 1,
        //     1,
        //     delta
        // )
        $singleImage.current!.material.zoom = 1 + data.range(0, 1 / 3) / 3
    })
    return (
        <group ref={$images}>
            <Image
                url="/research/1.jpg"
                position={[-2, 0, 0]}
                scale={[4, height]}
                ref={$singleImage}
            />
        </group>
    )
}

export default ParallaxEffect
