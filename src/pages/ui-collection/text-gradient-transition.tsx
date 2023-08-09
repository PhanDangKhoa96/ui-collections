import UICollectionLayout from "@/components/ui-collection-layout"
import React from "react"
import Link from "next/link"
import styled, { keyframes } from "styled-components"
import Credit from "@/components/Credit"

// Mock data
const titleWords = [
    { text: "Develop.", startColor: "#0071f2", endColor: "#01dfd8" },
    { text: "Preview.", startColor: "#7d00d9", endColor: "#ff0080" },
    { text: "Ship.", startColor: "#ff4d4d", endColor: "#fbca00" },
]

// Keyframes
const fadeOut1 = keyframes`
    0%,16.667%,to {
        opacity: 1
    }

    33.333%,83.333% {
        opacity: 0
    }
`

const fadeOut2 = keyframes`
    0%,to {
        opacity: 0
    }

    33.333%,50% {
        opacity: 1
    }

    16.667%,66.667% {
        opacity: 0
    }
`

const fadeOut3 = keyframes`
    0%,50%,to {
        opacity: 0
    }

    66.667%,83.333% {
        opacity: 1
    }
`

const keyframesArray = [fadeOut1, fadeOut2, fadeOut3]

// Title styles
const WordGradient = styled.span<{
    $startColor: string
    $endColor: string
    $index: number
}>`
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(
        90deg,
        ${(props) => props.$startColor},
        ${(props) => props.$endColor}
    );
    position: relative;
    z-index: 1;
    animation: ${(props) => keyframesArray[props.$index]} 8s infinite;
`

const WordGrey = styled.span`
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(180deg, #fff, hsla(0, 0%, 100%, 0.75));
    z-index: 1;
`

// Button styles
const ButtonBg = styled.span<{
    $startColor: string
    $endColor: string
    $index: number
}>`
    background-image: linear-gradient(
        165deg,
        ${(props) => props.$startColor},
        ${(props) => props.$endColor}
    );
    position: absolute;
    inset: 0;
    animation: ${(props) => keyframesArray[props.$index]} 8s infinite;
    z-index: -2;
`

const ButtonBgInner = styled.span<{
    $startColor: string
    $endColor: string
    $index: number
}>`
    background-image: linear-gradient(
        165deg,
        ${(props) => props.$startColor},
        ${(props) => props.$endColor}
    );
    position: absolute;
    inset: 0;
    animation: ${(props) => keyframesArray[props.$index]} 8s infinite;
    z-index: -1;
    border: 16px solid transparent;
    background-clip: padding-box;
    filter: blur(36px);
`

const TextGradientTransition = () => {
    return (
        <UICollectionLayout
            metaTitle="Text Gradient Transition"
            keywords="text gradient animation, text gradient transition, vercel home clone, vercel animation, gradient animation, gradient effect, text gradient effect"
        >
            <div className="grid h-screen place-items-center">
                <div className="container text-center">
                    <h1 className="mb-10 flex select-none flex-col items-center text-center text-7xl font-bold tracking-tight md:text-8xl lg:flex-row lg:justify-center lg:tracking-tighter xl:tracking-tight">
                        {titleWords.map((word, index) => {
                            return (
                                <span className="relative" key={index}>
                                    {/* Grey text */}
                                    <WordGrey className="absolute inset-0">
                                        {word.text}
                                    </WordGrey>

                                    {/* Gradient text */}
                                    <WordGradient
                                        $startColor={word.startColor}
                                        $endColor={word.endColor}
                                        $index={index}
                                    >
                                        {word.text}
                                    </WordGradient>
                                </span>
                            )
                        })}
                    </h1>

                    <p className="mx-auto mb-5 max-w-3xl text-gray-400">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Alias, modi error aspernatur saepe eveniet non
                        tempore, ipsam, id repudiandae atque obcaecati sit ab
                        debitis corporis vitae dolor voluptatibus nam?
                        Reprehenderit?
                    </p>

                    <Credit
                        inspiredLink="https://vercel.com/"
                        inspiredName="Vercel"
                        githubLink="https://github.com/PhanDangKhoa96/ui-animations/blob/main/src/pages/ui-collection/text-gradient-transition.tsx"
                    />

                    <div className="mx-auto mt-10 flex max-w-sm flex-col items-stretch gap-y-5 sm:max-w-md sm:flex-row sm:gap-x-5">
                        <Link
                            className="inline-flex flex-1 items-center justify-center gap-x-3 rounded-lg bg-seasalt px-4 pb-2 pt-3 text-base font-bold text-vampire-black transition duration-300 hover:bg-seasalt/90"
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

                        <div className="group relative flex-1 text-center">
                            {titleWords.map((word, index) => {
                                return (
                                    <>
                                        <ButtonBg
                                            key={index}
                                            $startColor={word.startColor}
                                            $endColor={word.endColor}
                                            $index={index}
                                            className="rounded-lg"
                                        />

                                        <ButtonBgInner
                                            $startColor={word.startColor}
                                            $endColor={word.endColor}
                                            $index={index}
                                            className="rounded-lg"
                                        />
                                    </>
                                )
                            })}

                            <Link
                                className="inline-block w-full rounded-lg border border-solid border-transparent bg-vampire-black bg-clip-padding px-4 pb-2 pt-3 text-base font-bold text-seasalt transition-all duration-300 group-hover:bg-transparent group-hover:text-vampire-black"
                                href={"/ui-collection"}
                            >
                                Get A Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </UICollectionLayout>
    )
}

export default TextGradientTransition
