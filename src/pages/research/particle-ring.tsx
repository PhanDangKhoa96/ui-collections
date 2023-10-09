import UICollectionLayout from "@/components/ui-collection-layout"
import { pointsInner, pointsOuter } from "@/utils/particleRing"
import { OrbitControls, Sphere } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import React, { useRef } from "react"
import { Group, Vector3 } from "three"

const ParticleRing = () => {
    return (
        <UICollectionLayout metaTitle="Particle Ring">
            <div className="h-screen">
                <Canvas camera={{ position: [-10, 2, -20] }}>
                    <OrbitControls maxDistance={50} minDistance={10} />

                    <directionalLight />
                    <pointLight position={[-30, 0, -30]} power={10.0} />
                    <Ring />
                </Canvas>
            </div>
        </UICollectionLayout>
    )
}

const Ring = () => {
    const $ring = useRef<Group>(null)

    useFrame(({ clock }) => {
        if ($ring.current?.rotation) {
            $ring.current.rotation.z = clock.getElapsedTime() * 0.05
        }
    })
    return (
        <group ref={$ring}>
            {pointsInner.map((point, index) => {
                return (
                    <Point
                        color={point.color}
                        position={point.position}
                        key={index}
                    />
                )
            })}
            {pointsOuter.map((point, index) => {
                return (
                    <Point
                        color={point.color}
                        position={point.position}
                        key={index}
                    />
                )
            })}
        </group>
    )
}

const Point = ({ position, color }: { color: string; position: any }) => (
    <Sphere position={position} args={[0.2, 10, 10]}>
        <meshStandardMaterial
            emissive={color}
            emissiveIntensity={0.5}
            color={color}
            roughness={0.5}
        />
    </Sphere>
)

export default ParticleRing
