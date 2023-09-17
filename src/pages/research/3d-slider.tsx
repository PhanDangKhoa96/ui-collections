import UICollectionLayout from "@/components/ui-collection-layout"
import { Canvas } from "@react-three/fiber"
import Carousel from "../../components/3DSlider/Carousel"

const Slider = () => {
    return (
        <UICollectionLayout metaTitle="3D Slider">
            <div className="relative h-screen">
                <div className="absolute left-1/2 top-0 h-full w-[1px] bg-seasalt"></div>
                <div className="absolute left-0 top-1/2 h-[1px] w-full bg-seasalt"></div>
                <Canvas>
                    <Carousel />
                </Canvas>
            </div>
        </UICollectionLayout>
    )
}

export default Slider
