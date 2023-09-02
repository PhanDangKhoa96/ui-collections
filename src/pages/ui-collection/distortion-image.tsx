import UICollectionLayout from "@/components/ui-collection-layout"
import React, { useEffect, useRef } from "react"
// @ts-ignore
import { Renderer, Triangle, Program, Color, Mesh, Vec2, Geometry } from "ogl"
import { useLenis } from "@studio-freight/react-lenis"
import gsap from "gsap"

const vertex = /* glsl */ `
attribute vec2 uv;
            attribute vec2 position;

            varying vec2 vUv;

            void main() {
                vUv = uv;
                gl_Position = vec4(position, 0, 1);
            }
`

const fragment = /* glsl */ `
precision highp float;

uniform float uScroll;

varying vec2 vUv;

void main() {
    gl_FragColor.rgb = vec3(0.8, 0.7, 1.0) + 0.3 * cos(vUv.xyx + uScroll);

    gl_FragColor.a = 1.0;
}
`

const DistortionImage = () => {
    const $background = useRef<HTMLCanvasElement>(null)
    const lenis = useLenis()

    useEffect(() => {
        const w = window.innerWidth
        const h = window.innerHeight
        const renderer = new Renderer({
            dpr: Math.min(window.devicePixelRatio, 2),
            canvas: $background.current,
            width: window.innerWidth,
            height: window.innerHeight,
        })

        const { gl } = renderer || {}

        gl.clearColor(1, 1, 1, 1)

        renderer.setSize(w, h)

        // const geometry = new Triangle(gl)

        const geometry = new Geometry(gl, {
            position: {
                size: 2,
                data: new Float32Array([-1, -1, 3, -1, -1, 3]),
            },
            uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) },
        })

        const program = new Program(gl, {
            vertex,
            fragment,
            uniforms: {
                uScroll: { value: 0 },
            },
        })

        // program.uniforms.uResolution.value = new Vec2(w, h)

        const mesh = new Mesh(gl, { geometry, program })

        // gsap.ticker.add((time) => {
        //     if (!program || !renderer) return
        //     program.uniforms.uTime.value = time

        //     // Don't need a camera if camera uniforms aren't required
        // })

        lenis?.on("scroll", () => {
            program.uniforms.uScroll.value = lenis?.progress * 2
            renderer?.render({ scene: mesh })
        })

        renderer?.render({ scene: mesh })
    }, [lenis])
    return (
        <UICollectionLayout
            metaTitle="Distortion Image"
            keywords="distortion, webgl, animation, gsap"
        >
            <div className="fixed inset-0">
                <canvas ref={$background} className="h-full w-full"></canvas>
            </div>
            <div className="h-[500vh]"></div>
        </UICollectionLayout>
    )
}

export default DistortionImage
