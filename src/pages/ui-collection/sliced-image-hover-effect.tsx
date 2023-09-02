import Credit from "@/components/Credit"
import UICollectionLayout from "@/components/ui-collection-layout"
import lettersAndSymbols from "@/utils/letterAndSymbols"
import gsap from "gsap"
import Head from "next/head"
import Image from "next/image"
import React, { useEffect, useRef, type MouseEvent } from "react"

const cards = [
    {
        date: "15/07/2023",
        title: "Navigating the Digital Maze: A Guide to Network Security",
        buttonText: "+ Read the Article",
        image: "/sliced-image-hover-effect/1.jpg",
    },
    {
        date: "03/09/2023",
        title: "The Evolution of Wireless Networks: From 1G to 5G",
        buttonText: "+ Read the Article",
        image: "/sliced-image-hover-effect/2.webp",
    },
    {
        date: "08/10/2023",
        title: "Unraveling the Mysteries of Neural Networks in AI",
        buttonText: "+ Read the Article",
        image: "/sliced-image-hover-effect/3.webp",
    },
    {
        date: "21/08/2023",
        title: "The Power of Blockchain: Transforming Network Trust",
        buttonText: "+ Read the Article",
        image: "/sliced-image-hover-effect/4.jpg",
    },
    {
        date: "29/07/2023",
        title: "5 Tips for Optimizing Your Home Wi-Fi Network",
        buttonText: "+ Read the Article",
        image: "/sliced-image-hover-effect/5.jpg",
    },
    {
        date: "12/09/2023",
        title: "Cybersecurity Threats in the Modern Network Landscape",
        buttonText: "+ Read the Article",
        image: "/sliced-image-hover-effect/6.jpg",
    },
    {
        date: "17/10/2023",
        title: "The Future of 6G Networks: Beyond Lightning Speed",
        buttonText: "+ Read the Article",
        image: "/sliced-image-hover-effect/7.jpg",
    },
    {
        date: "05/08/2023",
        title: "Exploring Social Networks: Impact on Relationships",
        buttonText: "+ Read the Article",
        image: "/sliced-image-hover-effect/8.jpg",
    },
    {
        date: "22/07/2023",
        title: "The Role of IoT in Building Smart Cities",
        buttonText: "+ Read the Article",
        image: "/sliced-image-hover-effect/9.jpg",
    },
]

const numberOfSlices = 6

const SlicedImageHoverEffect = () => {
    return (
        <>
            <Head>
                <link
                    rel="preload"
                    href="https://use.typekit.net/izb2boj.css"
                />
                <link
                    rel="stylesheet"
                    href="https://use.typekit.net/izb2boj.css"
                />
            </Head>
            <UICollectionLayout
                metaTitle="Sliced Image Hover Effect"
                key="hover, animation, sliced image, technology, creative hover effect, hacker hover effect"
            >
                <div className="container mt-40 font-['ocr-a-std'] xl:max-w-none xl:p-0">
                    <div className="grid xl:grid-cols-3">
                        {cards.map((item, index) => {
                            return (
                                <Card key={index} index={index} item={item} />
                            )
                        })}
                    </div>

                    <div className="h-screen"></div>
                </div>
            </UICollectionLayout>
        </>
    )
}

export default SlicedImageHoverEffect

interface ICard {
    item: {
        date: string
        title: string
        buttonText: string
        image: string
    }
    index: number
}

const Card = ({ item, index }: ICard) => {
    const $wrapper = useRef<HTMLDivElement>(null)
    const $imageWrapRoot = useRef<HTMLDivElement>(null)
    const $imageWrapChild = useRef<HTMLDivElement>(null)

    const randomNegativePercent = gsap.utils.random(-75, -25)
    const randomPositivePercent = gsap.utils.random(25, 75)

    useEffect(() => {
        const images = $wrapper.current!.querySelectorAll(".image")

        images.forEach((image, index) => {
            const left = (index * 100) / numberOfSlices
            const right = ((index + 1) * 100) / numberOfSlices

            if (image instanceof HTMLElement) {
                image.style.clipPath = `polygon(${left}% 0, ${right}% 0, ${right}% 100%, ${left}% 100%)`

                image.style.left = `${index * -1}px`
                image.style.width = `calc(100% + ${numberOfSlices - 1}px)`
            }
        })
    }, [])

    const handleMouseEnter = (e: MouseEvent, index: number) => {
        const title = (e.target as Element).querySelector(".title")
        const initialTitle = cards.at(index)!.title

        const button = (e.target as Element).querySelector(".button")
        const initialButton = cards.at(index)!.buttonText

        const date = (e.target as Element).querySelector(".date")
        const initialDate = cards.at(index)!.date

        if (title) shuffleCharaters(title, initialTitle)
        if (button) shuffleCharaters(button, initialButton)
        if (date) shuffleCharaters(date, initialDate)

        sliceImage()
    }

    const shuffleCharaters = (target: Element, initialValue: string) => {
        if (!target) return

        let count = 0

        const interval = setInterval(() => {
            target.innerHTML = initialValue
                .split("")
                .map((char, index) => {
                    if (index < count) {
                        return initialValue[index]
                    }
                    if (char !== " ") {
                        return lettersAndSymbols[
                            Math.floor(Math.random() * lettersAndSymbols.length)
                        ]
                    }

                    return char
                })
                .join("")

            if (count > initialValue.length) clearInterval(interval)

            count++

            // Animate everything within 800ms
        }, 800 / initialValue.length)
    }

    const sliceImage = () => {
        const images = $wrapper.current!.querySelectorAll(".image")

        const tl = gsap.timeline({
            defaults: { duration: 0.5, ease: "power3.inOut" },
            paused: true,
        })
        tl.fromTo(
            $imageWrapRoot.current,
            { opacity: 0, yPercent: 100 },
            { yPercent: 0, opacity: 1 },
            0
        )
            .fromTo(
                $imageWrapChild.current,
                { opacity: 0, yPercent: -100 },
                { opacity: 1, yPercent: 0 },
                0
            )
            .fromTo(
                images,
                {
                    yPercent: (position) => {
                        return position % 2
                            ? randomPositivePercent
                            : randomNegativePercent
                    },
                },
                { yPercent: 0 },
                0
            )

        tl.play(0)
    }

    const handleMouseLeave = () => {
        const images = $wrapper.current!.querySelectorAll(".image")

        const tl = gsap.timeline({
            defaults: { duration: 1, ease: "power3.inOut" },
            paused: true,
        })
        tl.to(
            $imageWrapRoot.current,
            { opacity: 0, yPercent: 100 },

            0
        )
            .to(
                $imageWrapChild.current,
                { opacity: 0, yPercent: -100 },

                0
            )
            .to(
                images,
                {
                    yPercent: (position) => {
                        return position % 2
                            ? randomPositivePercent
                            : randomNegativePercent
                    },
                },
                0
            )

        tl.play(0)
    }

    return (
        <div
            className="relative flex min-h-[60vh] flex-col justify-between overflow-hidden border border-b-0 border-solid border-white p-[clamp(20px,4vw,80px)] uppercase last:border-b xl:border-b"
            onMouseEnter={(e) => handleMouseEnter(e, index)}
            onMouseLeave={handleMouseLeave}
            ref={$wrapper}
        >
            {/* Image */}
            <div
                className="absolute inset-0 -z-10 overflow-hidden opacity-0"
                ref={$imageWrapRoot}
            >
                <div
                    className="relative h-full w-full overflow-hidden"
                    ref={$imageWrapChild}
                >
                    {[...Array(numberOfSlices).keys()].map((_, index) => {
                        return (
                            <div
                                className="image absolute inset-0 brightness-75"
                                key={index}
                            >
                                <div className="relative h-full w-full">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Main content */}
            <div className="">
                <div className="mb-7 flex items-center gap-x-3">
                    <div className="aspect-square w-4 rounded-sm border border-solid border-white bg-white/60"></div>
                    <span className="date pt-1 leading-none">{item.date}</span>
                </div>
                <h2
                    className="title min-24-max-32"
                    data-initial-value={item.title}
                >
                    {item.title}
                </h2>
            </div>
            <button
                className="button inline-block text-left text-lg uppercase transition duration-300 ease-out hover:text-white/70"
                type="button"
                aria-label={item.buttonText}
            >
                {item.buttonText}
            </button>
        </div>
    )
}
