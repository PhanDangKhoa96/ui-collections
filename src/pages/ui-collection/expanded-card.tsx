import Credit from "@/components/Credit"
import UICollectionLayout from "@/components/ui-collection-layout"
import clsx from "clsx"
import Image from "next/image"
import React, { useState } from "react"

const items = [
    {
        title: "Renewable Energy Hero",
        description:
            "Celebrate the power of renewable energy with this card, featuring vibrant illustrations of wind turbines, solar panels, and hydroelectric dams.",
        image: "/expanded-card/renewable.jpg",
    },
    {
        title: "Green Garden Greetings",
        description:
            "Send a breath of fresh air with this card adorned with lush greenery and blooming flowers. ",
        image: "/expanded-card/garden.jpg",
    },
    {
        title: "Ocean Guardians",
        description:
            "Dive into conservation efforts with this marine-themed card, showcasing majestic whales, playful dolphins, and colorful coral reefs.",
        image: "/expanded-card/ocean.jpg",
    },
    {
        title: "Tree Hugger Tribute",
        description:
            "Embrace the beauty of forests and woodlands with this card featuring towering trees and woodland creatures. ",
        image: "/expanded-card/tree.jpg",
    },
    {
        title: "Waste Warriors",
        description:
            "Champion the cause of waste reduction and recycling with this card depicting recycling bins, compost heaps, and eco-conscious individuals.",
        image: "/expanded-card/waste.jpg",
    },
]

const ExpandedCard = () => {
    const [activeId, setActiveId] = useState(0)
    return (
        <UICollectionLayout metaTitle="Expanded Card">
            <div className="grid h-screen place-items-center">
                <div className="container text-center">
                    <h1 className="mb-5 small-title">Expanded Card</h1>
                    <p className="mx-auto max-w-lg">
                        Click the tile to see the effect
                    </p>

                    <Credit
                        imgSrcLink="https://unsplash.com/"
                        imgSrcName="Unplash"
                        githubLink="https://github.com/PhanDangKhoa96/ui-animations/blob/main/src/pages/ui-collection/expanded-card.tsx"
                    />
                </div>
            </div>
            <div className="container pb-40">
                <div className="flex h-[50vh] w-full gap-x-5">
                    {items.map((item, index) => {
                        const isActive = index === activeId
                        const { description, title, image } = item || {}
                        return (
                            <div
                                key={index}
                                className={clsx(
                                    "relative grid cursor-pointer grid-cols-2 rounded-2xl bg-amber-500 p-5 transition-all ease-out",
                                    isActive
                                        ? "flex-[10] duration-300"
                                        : "flex-1 duration-500"
                                )}
                                onClick={() => setActiveId(index)}
                            >
                                <div
                                    className={clsx(
                                        "relative overflow-hidden rounded-xl transition-all duration-300",
                                        isActive
                                            ? "w-full"
                                            : "w-0 scale-90 opacity-0"
                                    )}
                                >
                                    <Image
                                        src={image}
                                        alt={title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative">
                                    <div
                                        className={clsx(
                                            "absolute inset-0 flex h-full flex-col justify-center text-green-900 transition-all duration-300",
                                            isActive ? "w-full pl-5" : "w-0"
                                        )}
                                    >
                                        <h2
                                            className={clsx(
                                                "mb-4 text-4xl font-bold transition-opacity",
                                                isActive
                                                    ? "delay-300 duration-500"
                                                    : "opacity-0 duration-0"
                                            )}
                                        >
                                            {title}
                                        </h2>
                                        <p
                                            className={clsx(
                                                "transition-opacity",
                                                isActive
                                                    ? "delay-[0.4s] duration-500"
                                                    : "opacity-0 duration-0"
                                            )}
                                        >
                                            {description}
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className={clsx(
                                        "absolute inset-0 flex rotate-180 flex-col justify-center p-5 text-3xl font-bold text-green-900 transition-opacity duration-300 [writing-mode:vertical-lr]",
                                        isActive ? "opacity-0" : ""
                                    )}
                                >
                                    {title}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </UICollectionLayout>
    )
}

export default ExpandedCard
