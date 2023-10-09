import UICollectionLayout from "@/components/ui-collection-layout"
import { OrbitControls } from "@react-three/drei"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import React, { useEffect, useMemo, useRef } from "react"
import * as THREE from "three"

const SEPARATION = 100,
    AMOUNTX = 50,
    AMOUNTY = 50

const ParticleWave = () => {
    return (
        <UICollectionLayout metaTitle="Particle Wave">
            <div className="h-screen">
                <Canvas
                    camera={{
                        fov: 100,
                        near: 1,
                        far: 10000,
                        position: [0, 0, 1000],
                    }}
                >
                    <OrbitControls />
                    <Points />
                </Canvas>
            </div>
        </UICollectionLayout>
    )
}

const Points = () => {
    const numParticles = AMOUNTX * AMOUNTY
    const positions = new Float32Array(numParticles * 3)
    const scales = new Float32Array(numParticles)

    const $points = useRef<THREE.Points>(null)
    const count = useRef<number>(0)

    const geometryAttrs = useMemo(() => {
        let i = 0,
            j = 0

        for (let ix = 0; ix < AMOUNTX; ix++) {
            for (let iy = 0; iy < AMOUNTY; iy++) {
                positions[i] = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2 // x
                positions[i + 1] = 0 // y
                positions[i + 2] = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2 // z

                scales[j] = 1

                i += 3
                j++
            }
        }
        return { positions, scales }
    }, [SEPARATION, AMOUNTX, AMOUNTY])

    const vertexShader = `
    attribute float scale;
    void main() {
        vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
        gl_PointSize = scale * ( 300.0 / - mvPosition.z );
        gl_Position = projectionMatrix * mvPosition;

    }`
    const fragmentShader = `
    uniform vec3 color;
    void main() {
        if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;
        gl_FragColor = vec4( color, 1.0 );
    }
    `

    useFrame(() => {
        const positions = $points.current!.geometry.attributes?.position?.array
        const scales = $points.current!.geometry.attributes?.scale?.array

        if (!positions || !scales) return null

        let i = 0,
            j = 0

        for (let ix = 0; ix < AMOUNTX; ix++) {
            for (let iy = 0; iy < AMOUNTY; iy++) {
                positions[i + 1] =
                    Math.sin((ix + count.current) * 0.3) * 50 +
                    Math.sin((iy + count.current) * 0.5) * 50

                scales[j] =
                    (Math.sin((ix + count.current) * 0.3) + 1) * 20 +
                    (Math.sin((iy + count.current) * 0.5) + 1) * 20

                i += 3
                j++
            }
        }

        $points.current!.geometry.attributes.position.needsUpdate = true
        $points.current!.geometry.attributes.scale.needsUpdate = true

        count.current += 0.03
    })

    return (
        <points ref={$points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[geometryAttrs.positions, 3]}
                />
                <bufferAttribute
                    attach="attributes-scale"
                    args={[geometryAttrs.scales, 1]}
                />
            </bufferGeometry>
            <shaderMaterial
                uniforms={{ color: { value: new THREE.Color(0xa020f0) } }}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
            />
        </points>
    )
}

export default ParticleWave
