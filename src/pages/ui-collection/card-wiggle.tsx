import UICollectionLayout from "@/components/ui-collection-layout"
import { matchMediaScreen } from "@/utils/gsapConfig"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import Link from "next/link"
import React, {
    type Dispatch,
    type SetStateAction,
    useEffect,
    useRef,
    useState,
} from "react"
import Image from "next/image"
import Credit from "@/components/Credit"

gsap.registerPlugin(ScrollTrigger)

interface ICardProps {
    title: string
    description: string
    isReversed: boolean
    setActiveCase: Dispatch<SetStateAction<number>>
    id: number
    targetEl: HTMLDivElement | null
    image: string
}

const cards = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet.",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, aspernatur placeat? Assumenda modi, veritatis voluptatum aliquam optio quasi accusantium commodi dolor illo omnis eius. Vitae reprehenderit officiis velit nobis, iste, exercitationem facilis aperiam molestiae enim nisi fugiat illo? Eaque inventore corrupti, illum similique facilis quibusdam temporibus nulla quaerat sunt in!",
        isReversed: false,
        image: "/card-wiggle/card-wiggle-1.png",
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit amet.",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, aspernatur placeat? Assumenda modi, veritatis voluptatum aliquam optio quasi accusantium commodi dolor illo omnis eius. Vitae reprehenderit officiis velit nobis, iste, exercitationem facilis aperiam molestiae enim nisi fugiat illo? Eaque inventore corrupti, illum similique facilis quibusdam temporibus nulla quaerat sunt in!",
        isReversed: true,
        image: "/card-wiggle/card-wiggle-2.jpg",
    },
    {
        id: 3,
        title: "Lorem ipsum dolor sit amet.",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, aspernatur placeat? Assumenda modi, veritatis voluptatum aliquam optio quasi accusantium commodi dolor illo omnis eius. Vitae reprehenderit officiis velit nobis, iste, exercitationem facilis aperiam molestiae enim nisi fugiat illo? Eaque inventore corrupti, illum similique facilis quibusdam temporibus nulla quaerat sunt in!",
        isReversed: false,
        image: "/card-wiggle/card-wiggle-3.jpg",
    },
    {
        id: 4,
        title: "Lorem ipsum dolor sit amet.",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, aspernatur placeat? Assumenda modi, veritatis voluptatum aliquam optio quasi accusantium commodi dolor illo omnis eius. Vitae reprehenderit officiis velit nobis, iste, exercitationem facilis aperiam molestiae enim nisi fugiat illo? Eaque inventore corrupti, illum similique facilis quibusdam temporibus nulla quaerat sunt in!",
        isReversed: true,
        image: "/card-wiggle/card-wiggle-4.jpg",
    },
]

const CardToggle = () => {
    const $target = useRef<HTMLDivElement>(null)
    const $case = useRef<HTMLDivElement>(null)

    const [activeCase, setActiveCase] = useState(1)
    const [targetEl, setTargetEl] = useState<HTMLDivElement | null>(null)

    useEffect(() => {
        const mm = gsap.matchMedia()
        mm.add(
            matchMediaScreen.large,
            () => {
                gsap.set($target.current, {
                    rotateX: 10,
                    rotateY: 15,
                    // imageRendering: true,
                })
            },
            $case
        )

        $target.current && setTargetEl($target.current)

        return () => mm.revert()
    }, [])
    return (
        <UICollectionLayout>
            <div className="mt-40" ref={$case}>
                <div className="container">
                    <div className="relative z-10 mb-10 text-center lg:mb-20">
                        <h1 className="mb-5 small-title">
                            Card Wiggle Animation
                        </h1>

                        <p>Card will wiggle upon scrolling</p>

                        <Credit
                            inspiredLink="https://strapi.io/"
                            inspiredName="Strapi"
                            imgSrcLink="https://www.instagram.com/ameth.broccoli/"
                            imgSrcName="@ameth.broccoli"
                        />
                    </div>

                    <div className="relative">
                        <div className="invisible absolute inset-0 top-[-25vh] z-[1] lg:visible">
                            <div className="sticky top-0 h-screen">
                                {/* Width equal to the card image */}
                                <div
                                    className="grid h-full w-1/2 place-items-center"
                                    style={{ perspective: "1800px" }}
                                >
                                    <div
                                        ref={$target}
                                        className="aspect-[16/12] w-full origin-top rounded-[20px]"
                                    >
                                        <div className="boder-solid relative h-full w-full overflow-hidden rounded-[20px]">
                                            {cards?.map(
                                                ({ title, image, id }) => {
                                                    return (
                                                        <Image
                                                            key={id}
                                                            src={image}
                                                            fill
                                                            sizes="50vw"
                                                            className={`object-cover ${
                                                                id ===
                                                                activeCase
                                                                    ? "z-10"
                                                                    : ""
                                                            }`}
                                                            priority
                                                            alt={
                                                                title ||
                                                                "Card wiggle image"
                                                            }
                                                        />
                                                    )
                                                }
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-16 lg:gap-y-32">
                            {cards.map((card, index) => {
                                return (
                                    <Card
                                        {...card}
                                        setActiveCase={setActiveCase}
                                        targetEl={targetEl}
                                        key={index}
                                    />
                                )
                            })}
                        </div>
                        <div className="hidden h-[30vh] lg:block"></div>
                    </div>
                </div>
            </div>
        </UICollectionLayout>
    )
}

const Card = (props: ICardProps) => {
    const $card = useRef<HTMLDivElement>(null)
    const {
        title,
        description,
        isReversed,
        setActiveCase,
        id,
        targetEl,
        image,
    } = props || {}

    useEffect(() => {
        const mm = gsap.matchMedia()
        mm.add(
            matchMediaScreen.large,
            () => {
                const title = $card?.current?.querySelector(".title")
                const description =
                    $card?.current?.querySelector(".description")
                const btn = $card?.current?.querySelector(".btn-for-gsap")

                const tl = gsap.timeline()

                const moveTarget = () => {
                    setActiveCase(id)
                    gsap.to(targetEl, {
                        xPercent: isReversed ? 100 : 0,
                        rotateY: isReversed ? -15 : 15,
                        ease: "elastic.out",
                        overwrite: true,
                        duration: 1.3,
                    })
                }

                ScrollTrigger.create({
                    trigger: $card.current,
                    // markers: true,
                    start: "top-=400 top",
                    end: "bottom-=250 top",
                    animation: tl,
                    toggleActions: "play none none reverse",
                    onEnter: () => {
                        moveTarget()
                    },

                    onEnterBack: () => {
                        moveTarget()
                    },
                })

                tl.from([title, description, btn], {
                    opacity: 0,
                    y: 20,
                    stagger: 0.2,
                })
            },
            $card
        )

        return () => mm.revert()
    }, [targetEl])
    return (
        <div
            className={`relative flex flex-col gap-y-8 lg:items-center lg:gap-x-5 ${
                isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
            ref={$card}
        >
            {/* Main content */}

            <div className="relative z-10 w-full lg:pointer-events-none lg:invisible lg:flex-[calc(600/390)]">
                <div className="aspect-video w-full">
                    <div className="relative h-full w-full overflow-hidden rounded-[20px]">
                        <Image
                            src={image}
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover"
                            alt={"card wiggle image"}
                        />
                    </div>
                </div>
            </div>
            <div className="relative z-10 flex flex-col items-start lg:flex-1">
                {title && (
                    <h3 className="title mb-5 text-xl font-bold lg:text-2xl">
                        {title}
                    </h3>
                )}
                {description && (
                    <p className="description mb-4 max-w-md text-base leading-7 md:max-w-lg lg:max-w-none lg:text-lg">
                        {description}
                    </p>
                )}
                <span className="btn-for-gsap">
                    <Link
                        className="inline-flex items-center gap-x-3 rounded-full bg-seasalt px-4 pb-2 pt-3 text-base font-bold text-vampire-black transition duration-300 hover:animate-wiggle"
                        href={"/ui-collection"}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="mb-1 h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                            />
                        </svg>
                        Back to UI Collections
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default CardToggle
