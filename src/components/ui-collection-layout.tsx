import { ReactLenis } from "@studio-freight/react-lenis"
import gsap from "gsap"
import React, { useEffect, useRef } from "react"
import BackToCollection from "./BackToCollection"

const UICollectionLayout = ({ children }: { children: React.ReactNode }) => {
    const lenisRef = useRef<any>(null)
    useEffect(() => {
        function update(time: number) {
            lenisRef.current?.raf(time * 1000)
        }

        gsap.ticker.add(update)

        return () => {
            gsap.ticker.remove(update)
        }
    })
    return (
        <ReactLenis root ref={lenisRef} autoRaf={false}>
            <BackToCollection />
            <div className="">{children}</div>
        </ReactLenis>
    )
}

export default UICollectionLayout
