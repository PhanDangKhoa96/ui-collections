import React from "react"
import Link from "next/link"

const pages = [
    "3d-slider",
    "grid-layout-scroll-effect",
    "particle-ring",
    "particle-wave",
    "periodic-table",
]

const makeTitle = (slug: string) => {
    var words = slug.split("-")

    for (var i = 0; i < words.length; i++) {
        var word = words[i]
        words[i] = word.charAt(0).toUpperCase() + word.slice(1)
    }

    return words.join(" ")
}

const ResearchPage = () => {
    return (
        <main>
            <div className="container flex flex-wrap items-start gap-10 py-[20vh]">
                {pages.map((slug) => {
                    return (
                        <Link
                            className="border border-solid border-seasalt px-4 py-2 transition duration-300 hover:brightness-75"
                            href={"research" + "/" + slug}
                            key={slug}
                        >
                            {makeTitle(slug)}
                        </Link>
                    )
                })}
            </div>
        </main>
    )
}

export default ResearchPage
