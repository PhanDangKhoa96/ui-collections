import Footer from "@/components/Footer"
import Header from "@/components/Header"
import React, { useRef } from "react"
import Link from "next/link"
import Image from "next/image"

const cards = [
    {
        title: "Custom Cursor",
        slug: "custom-cursor",
    },
    {
        title: "Card Wiggle",
        slug: "card-wiggle",
    },
    {
        title: "Full Image Page Scroll",
        slug: "fullpage-scroll",
    },
    {
        title: "Text Gradient Transition",
        slug: "text-gradient-transition",
    },
    {
        title: "Draggable Slider",
        slug: "draggable-slider",
    },
    {
        title: "Creative Image Gallery",
        slug: "creative-image-gallery",
    },
    {
        title: "List Rotator",
        slug: "list-rotator",
    },
    {
        title: "Magnetic Cursor",
        slug: "magnetic-cursor",
    },
    {
        title: "Zoom In Image",
        slug: "zoom-in-image",
    },
]

interface ICard {
    title: string
    tags?: string[]
    slug: string
}

const UICollection = () => {
    return (
        <>
            <Header />
            <main className="min-h-screen mb-14 pt-16 lg:pt-20">
                <div className="container py-10">
                    <div className="mb-10 max-w-sm md:max-w-md lg:mb-14 lg:max-w-xl">
                        <h1 className="mb-5 medium-title">UI Animations</h1>
                        <div className=" flex max-w-lg flex-col gap-y-5">
                            <h2>
                                UI elements made with GSAP, native Javascript
                                API, and some cool other animation libraries.
                            </h2>

                            <h2>
                                All the components are built with ReactJS
                                integrated with TypeScript as a UI Framework and
                                Tailwind CSS as a Style Framework
                            </h2>
                        </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
                        {cards?.map((card, index) => {
                            return <Card {...card} key={index} />
                        })}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

const Card = ({ title, tags, slug }: ICard) => {
    return (
        <Link
            href={`/ui-collection/${slug}`}
            className="group overflow-hidden rounded-lg border border-seasalt bg-eerie-black transition duration-300 hover:bg-seasalt hover:text-vampire-black"
        >
            <div className="relative aspect-[1.618] w-full">
                <Image
                    src={`/${slug}/thumb.png`}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="33vw"
                />
            </div>
            <div className="p-5 pt-7">
                {tags && (
                    <div className="mb-5 flex flex-wrap gap-2">
                        {tags.map((tag, index) => {
                            return (
                                <span
                                    className="rounded-full border border-solid border-seasalt px-3 pb-1 pt-2 text-sm group-hover:border-vampire-black"
                                    key={index}
                                >
                                    {tag}
                                </span>
                            )
                        })}
                    </div>
                )}
                {title && <h3 className="text-xl font-bold">{title}</h3>}
            </div>
        </Link>
    )
}

export default UICollection
