import React from "react"
import Link from "next/link"

interface ICredit {
    inspiredLink?: string
    inspiredName?: string
    codeRefName?: "Hyperplexed" | "Codrops"
    codeRefLink?:
        | "https://www.youtube.com/@Hyperplexed"
        | "https://tympanus.net/codrops/"
    imgSrcName?: "@ameth.broccoli" | "Codrops" | "Unplash"
    imgSrcLink?:
        | "https://www.instagram.com/ameth.broccoli/"
        | "https://tympanus.net/codrops/2023/06/12/free-ai-generated-images-vol-1/"
        | "https://unsplash.com/"
    githubLink: string
}

const Credit = ({
    inspiredLink,
    codeRefLink,
    inspiredName,
    codeRefName,
    imgSrcName,
    imgSrcLink,
    githubLink,
}: ICredit) => {
    return (
        <div className="mt-5">
            {inspiredLink && (
                <p>
                    Inspired by:{" "}
                    <Link
                        href={inspiredLink}
                        target="_blank"
                        className="text-gray-400 transition duration-300 hover:text-gray-300"
                    >
                        {inspiredName}
                    </Link>
                </p>
            )}
            {codeRefLink && (
                <p>
                    Code reference:{" "}
                    <Link
                        href={codeRefLink}
                        target="_blank"
                        className="text-gray-400 transition duration-300 hover:text-gray-300"
                    >
                        {codeRefName}
                    </Link>
                </p>
            )}
            {imgSrcLink && (
                <p>
                    Image source:{" "}
                    <Link
                        href={imgSrcLink}
                        target="_blank"
                        className="text-gray-400 transition duration-300 hover:text-gray-300"
                    >
                        {imgSrcName}
                    </Link>
                </p>
            )}
            {githubLink && (
                <Link
                    href={githubLink}
                    target="_blank"
                    className="text-white bg-blue-600 font-semibold transition duration-300 px-5 pt-3 pb-[8px] rounded-full hover:text-vampire-black hover:bg-seasalt mt-5 inline-block"
                >
                    Github
                </Link>
            )}
        </div>
    )
}

export default Credit
