import UICollectionLayout from "@/components/ui-collection-layout"
import React from "react"
import styled from "styled-components"

const HorizontalFullpageScroll = () => {
    return (
        <UICollectionLayout
            horizontalScroll
            metaTitle="Horizontal Fullpage Scroll"
        >
            <main className="horizontal-scroll grid grid-flow-col">
                <div className="h-screen w-screen bg-blue-400"></div>
                <div className="h-screen w-10 bg-purple-400"></div>
            </main>
        </UICollectionLayout>
    )
}

export default HorizontalFullpageScroll
