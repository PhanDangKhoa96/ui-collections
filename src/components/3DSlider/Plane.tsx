import { useControls } from "leva"
import React, { useEffect, useMemo, useRef } from "react"
import type { Mesh, ShaderMaterial } from "three/src/Three"
import { useThree } from "@react-three/fiber"
import { useTexture } from "@react-three/drei"
import gsap from "gsap"

interface IPlane {
    isActiveZoom: boolean
    width: number
    height: number
    image: string
}

const Plane = ({ width, height, isActiveZoom, image }: IPlane) => {
    const $mesh = useRef<Mesh>(null)
    const { viewport } = useThree()
    const tex = useTexture(image)
    const shaderArgs = useMemo(
        () => ({
            uniforms: {
                uTex: { value: tex },
                uProgress: { value: 0 },
                uZoomScale: { value: { x: 0, y: 0 } },
                uRes: { value: { x: 1, y: 1 } },
                uImageRes: {
                    value: {
                        x: tex.source.data.width,
                        y: tex.source.data.height,
                    },
                },
            },
            vertexShader: /* glsl */ `
            varying vec2 vUv;
            uniform float uProgress;
            uniform vec2 uZoomScale;
    
            void main() {
              vUv = uv;
              vec3 pos = position;
              float angle = uProgress * 3.14159265 / 2.;
              float wave = cos(angle);
              float c = sin(length(uv - .5) * 15. + uProgress * 12.) * .5 + .5;
              pos.x *= mix(1., uZoomScale.x + wave * c, uProgress);
              pos.y *= mix(1., uZoomScale.y + wave * c, uProgress);
    
              gl_Position = projectionMatrix * modelViewMatrix * vec4( pos, 1.0 );
            }
          `,
            fragmentShader: /* glsl */ `
          uniform sampler2D uTex;
          uniform vec2 uRes;
          uniform vec2 uImageRes;
    
          /*------------------------------
          Background Cover UV
          --------------------------------
          u = basic UV
          s = screensize
          i = image size
          ------------------------------*/
          vec2 CoverUV(vec2 u, vec2 s, vec2 i) {
            float rs = s.x / s.y; // Aspect screen size
            float ri = i.x / i.y; // Aspect image size
            vec2 st = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x); // New st
            vec2 o = (rs < ri ? vec2((st.x - s.x) / 2.0, 0.0) : vec2(0.0, (st.y - s.y) / 2.0)) / st; // Offset
            return u * s / st + o;
          }
    
          varying vec2 vUv;
            void main() {
              vec2 uv = CoverUV(vUv, uRes, uImageRes);
              vec3 tex = texture2D(uTex, uv).rgb;
              gl_FragColor = vec4( tex, 1.0 );
            }
          `,
        }),
        [tex]
    )

    useEffect(() => {
        if ($mesh.current && $mesh.current.material) {
            ;(
                $mesh.current.material as ShaderMaterial
            ).uniforms.uZoomScale.value.x = viewport.width / width
            ;(
                $mesh.current.material as ShaderMaterial
            ).uniforms.uZoomScale.value.y = viewport.height / height

            gsap.to(
                ($mesh.current.material as ShaderMaterial).uniforms.uProgress,
                {
                    value: isActiveZoom ? 1 : 0,
                    duration: 2.5,
                    ease: "power3.out,",
                }
            )
            gsap.to(
                ($mesh.current.material as ShaderMaterial).uniforms.uRes.value,
                {
                    x: isActiveZoom ? viewport.width : width,
                    y: isActiveZoom ? viewport.height : height,
                }
            )
        }
    }, [viewport, width, height, isActiveZoom])
    return (
        <mesh ref={$mesh}>
            <planeGeometry args={[width, height, 30, 30]} />
            <shaderMaterial args={[shaderArgs]} />
        </mesh>
    )
}

export default Plane
