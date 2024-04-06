import Credit from "@/components/Credit"
import UICollectionLayout from "@/components/ui-collection-layout"
import Image from "next/image"
import React from "react"

const cards = [
    {
        name: "Fashion",
        card_image: "/polygon-cards/image-1.jpg",
        card_description:
            "We are driven by our partnership-centric approach, attracting top design professionals across diverse asset classes within the Architectural Industry. This approach ensures that we deliver real-time data while maintaining consistency and clarity in our communication. In turn, it empowers our clients to make well-informed decisions when it comes to hiring. ",
    },
    {
        name: "Fashion",
        card_image: "/polygon-cards/image-2.jpg",

        card_description:
            "We are driven by our partnership-centric approach, attracting top design professionals across diverse asset classes within the Architectural Industry. This approach ensures that we deliver real-time data while maintaining consistency and clarity in our communication. In turn, it empowers our clients to make well-informed decisions when it comes to hiring. ",
    },
    {
        name: "Fashion",
        card_image: "/polygon-cards/image-3.jpg",

        card_description:
            "We are driven by our partnership-centric approach, attracting top design professionals across diverse asset classes within the Architectural Industry. This approach ensures that we deliver real-time data while maintaining consistency and clarity in our communication. In turn, it empowers our clients to make well-informed decisions when it comes to hiring. ",
    },
    {
        name: "Fashion",
        card_image: "/polygon-cards/image-4.jpg",

        card_description:
            "We are driven by our partnership-centric approach, attracting top design professionals across diverse asset classes within the Architectural Industry. This approach ensures that we deliver real-time data while maintaining consistency and clarity in our communication. In turn, it empowers our clients to make well-informed decisions when it comes to hiring. ",
    },
    {
        name: "Fashion",
        card_image: "/polygon-cards/image-5.jpg",

        card_description:
            "We are driven by our partnership-centric approach, attracting top design professionals across diverse asset classes within the Architectural Industry. This approach ensures that we deliver real-time data while maintaining consistency and clarity in our communication. In turn, it empowers our clients to make well-informed decisions when it comes to hiring. ",
    },
    {
        name: "Fashion",
        card_image: "/polygon-cards/image-6.jpg",
        card_description:
            "We are driven by our partnership-centric approach, attracting top design professionals across diverse asset classes within the Architectural Industry. This approach ensures that we deliver real-time data while maintaining consistency and clarity in our communication. In turn, it empowers our clients to make well-informed decisions when it comes to hiring. ",
    },
]

const PolygonCardIndex = () => {
    return (
        <UICollectionLayout metaTitle="Polygon Cards">
            <div className="grid h-screen place-items-center">
                <div className="container text-center">
                    <h1 className="mb-5 small-title">
                        Polygon cards on hovering
                    </h1>
                    <p className="mx-auto max-w-lg">
                        Hover the card to see the effect
                    </p>

                    <Credit githubLink="https://github.com/PhanDangKhoa96/ui-animations/blob/main/src/pages/ui-collection/polygon-cards.tsx" />
                </div>
            </div>
            <section>
                <div className="px-4">
                    <div className="relative pb-12 xl:pb-[75px]">
                        <div className="mx-auto grid justify-items-center gap-3 overflow-x-clip md:grid-cols-2 md:gap-x-0 xl:absolute xl:inset-0 xl:flex xl:h-full xl:w-full xl:gap-x-0">
                            {cards?.map((card, index) => {
                                const {
                                    name = "",
                                    card_image = "",
                                    card_description = "",
                                } = card || {}

                                return (
                                    <div
                                        key={index}
                                        className="group min-h-[600px] w-full transition-all duration-300 hover:flex-[3.9] xl:flex-1"
                                    >
                                        <div className="relative h-full w-full transition-[width] duration-300 xl:mx-auto xl:group-hover:w-[95%]">
                                            <div className="absolute inset-0 h-full w-full pt-12 transition-all duration-300  group-hover:pt-0">
                                                <div className="relative grid h-full w-full bg-black px-6 pb-5 transition-all duration-300 [clip-path:polygon(100%_0,_100%_100%,_0_100%,_0_100%,_0_0)] group-hover:[clip-path:polygon(100%_0,_100%_100%,_50px_100%,_0_calc(100%-60px),_0_48px)]">
                                                    {name && (
                                                        <h3 className="mr-auto mt-auto max-h-[320px] rotate-180 text-4xl font-semibold uppercase text-white transition-opacity duration-300 [writing-mode:vertical-rl] group-hover:opacity-0 lg:max-h-[400px] xl:leading-[1.2]">
                                                            {name}
                                                        </h3>
                                                    )}

                                                    <Image
                                                        src={
                                                            card_image ||
                                                            "/images/placeholders/img-placeholder.jpg"
                                                        }
                                                        alt={name}
                                                        fill
                                                        className="-z-10 h-full w-full object-cover brightness-50 transition-all duration-300 group-hover:opacity-0 group-hover:brightness-75 xl:group-hover:w-[30%] xl:group-hover:opacity-100"
                                                    />
                                                </div>
                                            </div>
                                            <div className="h-full w-full opacity-0 transition-all duration-0 group-hover:opacity-100 group-hover:duration-500 xl:absolute xl:right-0 xl:w-[70%] xl:delay-0 xl:group-hover:delay-200">
                                                <div className="pointer-events-none relative flex h-full w-full items-start gap-x-5 pb-14 pl-8 pr-5 pt-24 group-hover:pointer-events-auto xl:flex-col xl:gap-x-5 xl:px-10 xl:pt-20">
                                                    {name && (
                                                        <h3 className="max-h-80 rotate-180 text-end text-3xl font-semibold uppercase text-amber-400 transition-all delay-300 duration-100 [writing-mode:vertical-rl] xl:mb-7 xl:rotate-0 xl:text-left xl:leading-[1.2] xl:[writing-mode:inherit]">
                                                            {name}
                                                        </h3>
                                                    )}
                                                    {card_description && (
                                                        <p className="text-lg font-light text-white xl:text-xl">
                                                            {card_description}
                                                        </p>
                                                    )}

                                                    <span className="absolute bottom-0 right-0 block">
                                                        <svg
                                                            width={50}
                                                            height={50}
                                                            viewBox="0 0 50 50"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <rect
                                                                width={50}
                                                                height={50}
                                                                fill="#FFB703"
                                                            />
                                                            <g clipPath="url(#clip0_859_80)">
                                                                <path
                                                                    d="M34.6108 25.8056L26.5571 39.7539H19.2297L27.2735 25.8056L19.2297 11.8574H26.5571L34.6108 25.8056Z"
                                                                    fill="#093046"
                                                                />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_859_80">
                                                                    <rect
                                                                        width="31.8408"
                                                                        height="39.801"
                                                                        fill="white"
                                                                        transform="translate(11 5.22388)"
                                                                    />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </UICollectionLayout>
    )
}

export default PolygonCardIndex
