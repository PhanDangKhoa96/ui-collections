import React from "react"
import Link from "next/link"

const BackToCollection = () => {
    return (
        <div className="fixed left-0 top-10 z-50 w-full">
            <div className="container">
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
            </div>
        </div>
    )
}

export default BackToCollection
