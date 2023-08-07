import Credit from "@/components/Credit"
import UICollectionLayout from "@/components/ui-collection-layout"
import Image from "next/image"
import React, { MouseEvent, useEffect, useRef } from "react"

const tiles = [
    {
        image: "https://images.unsplash.com/photo-1523565543073-bf9608b265ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
        styles: {
            backgroundColor: "#E8A0BF",
            top: "22%",
            left: "28%",
            aspectRatio: 16 / 11,
            width: "15%",
        },
    },

    {
        image: "https://images.unsplash.com/photo-1688851497802-7b68e20f7a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
        styles: {
            backgroundColor: "#BA90C6",
            top: "19%",
            left: "50%",
            width: "8%",
            aspectRatio: 9 / 11,
        },
    },

    {
        image: "https://images.unsplash.com/photo-1656501094472-f54b1ed0bb03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
        styles: {
            backgroundColor: "#C0DBEA",
            top: "50%",
            left: "24%",
            width: "12%",
            aspectRatio: 4 / 3,
        },
    },
    {
        image: "https://images.unsplash.com/photo-1644204010323-da12ff5f5199?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
        styles: {
            backgroundColor: "#AAE3E2",
            top: "71%",
            left: "26%",
            width: "12%",
            aspectRatio: 4 / 3,
        },
    },

    {
        image: "https://images.unsplash.com/photo-1685514126702-da2f752017f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
        styles: {
            backgroundColor: "#D9ACF5",
            top: "63%",
            left: "46%",
            width: "15%",
            aspectRatio: 4 / 3,
        },
    },

    {
        image: "https://images.unsplash.com/photo-1687069414027-a55a9f7fbdca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
        styles: {
            backgroundColor: "#FFCEFE",
            top: "36%",
            left: "64%",
            width: "12%",
            aspectRatio: 4 / 6,
        },
    },

    {
        image: "https://images.unsplash.com/photo-1689081368592-1fd74be6dfbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
        styles: {
            backgroundColor: "#FDEBED",
            top: "71%",
            left: "73%",
            width: "6%",
            aspectRatio: 4 / 6,
        },
    },
    {
        image: "https://images.unsplash.com/photo-1688447769206-284797919b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
        styles: {
            backgroundColor: "#B1B2FF",
            top: "54%",
            left: "82%",
            width: "10%",
            aspectRatio: 16 / 14,
        },
    },
    {
        image: "https://images.unsplash.com/photo-1687518933362-b0180cdffe74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
        styles: {
            backgroundColor: "#AAC4FF",
            top: "9%",
            left: "74%",
            width: "8%",
            aspectRatio: 9 / 10,
        },
    },
    {
        image: "https://images.unsplash.com/photo-1685719730785-256ba3187893?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
        styles: {
            backgroundColor: "#D2DAFF",
            top: "12%",
            left: "15%",
            width: "6%",
            aspectRatio: 9 / 12,
        },
    },
    {
        image: "https://images.unsplash.com/photo-1689001225123-05b8eb4769c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
        styles: {
            backgroundColor: "#EEF1FF",
            top: "40%",
            left: "11%",
            width: "7%",
            aspectRatio: 10 / 16,
        },
    },

    {
        image: "https://images.unsplash.com/photo-1689414126346-b21dfbc308de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQxfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
        styles: {
            backgroundColor: "#898AA6",
            top: "69%",
            left: "5%",
            width: "15%",
            aspectRatio: 20 / 16,
        },
    },
    {
        image: "https://images.unsplash.com/photo-1678874968498-20e305bafc1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
        styles: {
            backgroundColor: "#C9BBCF",
            top: "10%",
            left: "4%",
            width: "10%",
            aspectRatio: 16 / 23,
        },
    },
    {
        image: "https://images.unsplash.com/photo-1593858737055-2b834690b853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
        styles: {
            backgroundColor: "#B7D3DF",
            top: "30%",
            left: "80%",
            width: "17%",
            aspectRatio: 16 / 9,
        },
    },
]

const CreativeImageGallery = () => {
    const $backdrop = useRef<HTMLDivElement>(null)
    const vw = useRef(0)
    const vh = useRef(0)

    const handleOnMouseMove = (e: MouseEvent) => {
        const mouseX = e.clientX
        const mouseY = e.clientY

        const percentageX = ((mouseX / vw.current - 0.5) * -100) / 4
        const percentageY = ((mouseY / vh.current - 0.5) * -100) / 4

        $backdrop.current?.animate(
            {
                transform: `translateX(${percentageX}%) translateY(${percentageY}%)`,
            },
            { fill: "forwards", duration: 4000, easing: "ease" }
        )
    }

    const updateViewDimension = () => {
        vw.current = window.innerWidth
        vh.current = window.innerHeight
    }
    useEffect(() => {
        vw.current = window.innerWidth
        vh.current = window.innerHeight

        window.addEventListener("resize", updateViewDimension)

        return () => {
            window.removeEventListener("resize", updateViewDimension)
        }
    }, [])

    return (
        <UICollectionLayout
            metaTitle="Creative Image Gallery"
            keywords="creative, image gallery, pallet.supply clone, pastel, animation, transform on mouse move, mouse move effect, pastel color, vanila javascript"
        >
            <div className="relative grid h-screen place-items-center overflow-hidden">
                <div className="absolute -bottom-[40vh] -left-[40vw] -right-[40vw] -top-[40vh] z-[-2] bg-[#FDF4F5]"></div>
                <div className="relative z-10 inline-block text-center text-gray-700">
                    <h1 className="text-gray-700 small-title">
                        creative gallery
                    </h1>

                    <Credit
                        inspiredLink="https://palette.supply/"
                        inspiredName="palette"
                        codeRefName="Hyperplexed"
                        codeRefLink="https://www.youtube.com/@Hyperplexed"
                        imgSrcLink="https://unsplash.com/"
                        imgSrcName="Unplash"
                    />
                </div>

                <div
                    className="absolute -bottom-[20vh] -left-[20vw] -right-[20vw] -top-[20vh]"
                    ref={$backdrop}
                >
                    <div
                        className="relative h-full w-full"
                        onMouseMove={handleOnMouseMove}
                    >
                        {tiles.map((tile, index) => {
                            return (
                                <div
                                    key={index}
                                    style={{ ...tile.styles }}
                                    className="absolute overflow-hidden rounded-2xl transition-transform duration-700 ease-out hover:scale-105"
                                >
                                    <div className="relative h-full w-full opacity-0 transition-all duration-700 ease-out hover:opacity-100">
                                        <Image
                                            src={tile.image}
                                            alt="tile image"
                                            fill
                                            priority
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </UICollectionLayout>
    )
}

export default CreativeImageGallery
