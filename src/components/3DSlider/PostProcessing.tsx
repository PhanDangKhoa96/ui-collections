import { MeshTransmissionMaterial } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { forwardRef } from "react"

const PostProcessing = forwardRef((_, ref: any) => {
    const { viewport } = useThree()
    // const ref = useRef(null)
    return (
        <mesh position={[0, 0, 1]}>
            <planeGeometry args={[viewport.width, viewport.height]} />
            <MeshTransmissionMaterial
                ref={ref}
                ior={0.9}
                transmission={0.7}
                distortionScale={0.5}
                temporalDistortion={0}
                roughness={0}
                thickness={0}
                chromaticAberration={0.05}
                anisotropy={0}
                transparent={true}
                // opacity={0}
                // background={new Color("red")}
            />
        </mesh>
    )
})

PostProcessing.displayName = "PostProcessing"

export default PostProcessing
