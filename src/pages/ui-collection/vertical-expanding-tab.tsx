import UICollectionLayout from "@/components/ui-collection-layout"
import React, { useEffect, useRef, useState } from "react"
import parse from "html-react-parser"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

const cards = [
    {
        date: "09 Oct 2023",
        skills: ["UI", "UX", "Javascript", "Marketing"],
        title: "<h2>THE ART <strong>OF WEB ANIMATION</strong></h2>",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit deserunt esse eaque debitis ipsam accusantium asperiores error illum et. Quis magni officia aliquid dolorum.",
    },
    {
        date: "09 Oct 2023",
        skills: ["UI", "UX", "Javascript", "Marketing"],
        title: "<h2>THE ART <strong>OF WEB ANIMATION</strong></h2>",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit deserunt esse eaque debitis ipsam accusantium asperiores error illum et. Quis magni officia aliquid dolorum.",
    },
    {
        date: "09 Oct 2023",
        skills: ["UI", "UX", "Javascript", "Marketing"],
        title: "<h2>THE ART <strong>OF WEB ANIMATION</strong></h2>",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit deserunt esse eaque debitis ipsam accusantium asperiores error illum et. Quis magni officia aliquid dolorum.",
    },
    {
        date: "09 Oct 2023",
        skills: ["UI", "UX", "Javascript", "Marketing"],
        title: "<h2>THE ART <strong>OF WEB ANIMATION</strong></h2>",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit deserunt esse eaque debitis ipsam accusantium asperiores error illum et. Quis magni officia aliquid dolorum.",
    },
    {
        date: "09 Oct 2023",
        skills: ["UI", "UX", "Javascript", "Marketing"],
        title: "<h2>THE ART <strong>OF WEB ANIMATION</strong></h2>",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odit deserunt esse eaque debitis ipsam accusantium asperiores error illum et. Quis magni officia aliquid dolorum.",
    },
]

const VerticalExpandingTab = () => {
    return (
        <UICollectionLayout metaTitle="Vertical Expanding Tab">
            <div className="h-screen"></div>
            <div className="container">
                <div className="flex flex-col">
                    {cards.map((card, index) => {
                        return (
                            <Card
                                key={index}
                                lastItem={index + 1 === cards.length}
                                {...card}
                            />
                        )
                    })}
                </div>
            </div>
            <div className="h-screen"></div>
        </UICollectionLayout>
    )
}

const Card = ({
    date,
    skills,
    title,
    description,
    lastItem,
}: {
    date: string
    skills: string[]
    title: string
    description: string
    lastItem: boolean
}) => {
    const $description = useRef<HTMLParagraphElement>(null)
    const $article = useRef<HTMLDivElement>(null)

    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: $article.current,
                markers: true,
                start: () => "top center",
                end: () => `bottom center`,
                onToggle: (self) => {
                    ScrollTrigger.refresh()
                    if (lastItem && self.direction === 1 && !self.isActive)
                        return
                    setIsActive(self.isActive)
                },
            })
        }, $article)

        return () => {
            ctx.revert()
        }
    }, [])

    return (
        <article
            className="grid grid-cols-[2fr_3fr_5fr] gap-x-10 border-t border-solid border-seasalt py-10 text-[#777]"
            style={{ opacity: isActive ? 1 : 0.2 }}
            ref={$article}
        >
            <p>{date}</p>
            <p>
                {skills.map((skill, index) => {
                    return <span key={index}>{skill}, </span>
                })}
            </p>
            <div>
                <div className="mb-3 text-3xl text-seasalt">{parse(title)}</div>
                <p
                    style={
                        isActive
                            ? { height: $description.current?.scrollHeight }
                            : { height: "0px" }
                    }
                    className="overflow-hidden transition-all duration-500 ease-out"
                    ref={$description}
                >
                    {description}
                </p>
            </div>
        </article>
    )
}

export default VerticalExpandingTab
