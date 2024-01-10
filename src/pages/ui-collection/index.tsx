import Footer from "@/components/Footer"
import Header from "@/components/Header"
import React, { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import Layout from "@/components/layout"
import { cards } from "@/data"

interface ICard {
    title: string
    tags?: string[]
    slug: string
}

const UICollection = () => {
    return (
        <Layout metaTitle="UI Collections">
            <main className="mb-14 min-h-screen pt-20 lg:pt-32">
                <div className="container py-10">
                    <div className="mb-14 text-center lg:mb-20">
                        <h1 className="mb-5 lg:mb-8 medium-title">My Playground</h1>
                        <p className="max-w-xl mx-auto">
                            Hi this is my playground where i create or replicate
                            things on the Internet, i mostly use GSAP for the
                            animations as well as Tailwind CSS for the styling.
                            Feel free to explore! 😀
                        </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
                        {cards?.map((card, index) => {
                            return <Card {...card} key={index} />
                        })}
                    </div>
                </div>
            </main>
        </Layout>
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
