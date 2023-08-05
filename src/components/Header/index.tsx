import gsap from "gsap"
import ScrollToPlugin from "gsap/dist/ScrollToPlugin"
import { FC, useEffect, useRef, useState } from "react"
import styles from "./Header.module.scss"
import Link from "next/link"
import Image from "next/image"
import LogoWhite from "../../../public/logo-white.svg"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const anchorLinks = [
    {
        text: "Home",
        slug: "/",
    },
    {
        text: "UI Collections",
        slug: "/ui-collection",
    },
]

const Header: FC<any> = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isNavHidden, setIsNavHidden] = useState(false)
    const $header = useRef<HTMLElement>(null)
    const $linksWrapper = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const mm = gsap.matchMedia($header)

        mm.add("(max-width: 768px)", () => {})

        return () => mm.revert()
    }, [])

    const openNav = () => {
        setIsOpen(!isOpen)

        const links = $linksWrapper?.current?.querySelectorAll("a")

        links &&
            gsap.to(links, {
                y: isOpen ? 40 : 0,
                x: isOpen ? 20 : 0,
                opacity: isOpen ? 0 : 1,
                duration: 0.5,
                stagger: 0.2,
                ease: "power2",
            })
    }

    return (
        <header
            className={`header fixed z-10 w-full transition-transform duration-700 ease-out ${
                isNavHidden ? "-translate-y-full" : "translate-y-0"
            }`}
            ref={$header}
        >
            <span className="absolute inset-0 bg-seasalt/5 backdrop-blur backdrop-saturate-200"></span>
            <nav className="container relative z-10 flex items-center justify-between">
                <Link
                    href={"/"}
                    className="relative aspect-square w-10 lg:w-14"
                >
                    <Image
                        src={LogoWhite}
                        alt="Phan Khoa Logo"
                        fill
                        sizes="56px"
                    />
                </Link>
                <div
                    className={`inline-flex items-center gap-x-2 pb-5 pt-6 md:gap-x-5`}
                >
                    <div
                        className={`hidden items-center gap-x-5 md:flex ${
                            isOpen ? styles.navListOpen : styles.navListClose
                        }`}
                    >
                        {anchorLinks?.map((item, index) => {
                            return (
                                <Link
                                    href={item?.slug}
                                    className="group/nav-item relative cursor-pointer py-[0.25em] text-sm uppercase leading-none md:text-base"
                                    key={index}
                                >
                                    {item.text}
                                    <span className="absolute bottom-[0.1em] left-0 h-[1.5px] w-full origin-right scale-x-0 bg-seasalt transition-transform duration-300 group-hover/nav-item:origin-left group-hover/nav-item:scale-x-100"></span>
                                </Link>
                            )
                        })}
                    </div>

                    <div
                        className="burger group right-0 flex aspect-[3/2] w-5 cursor-pointer flex-col items-end justify-between md:w-[30px]"
                        onClick={openNav}
                    >
                        <div
                            className={`h-[2px] w-full bg-current transition-all duration-500 ${
                                isOpen
                                    ? "translate-x-1 translate-y-[4px] rotate-45 md:translate-x-[5px] md:translate-y-[9px]"
                                    : ""
                            }`}
                        ></div>
                        <div
                            className={`relative h-[2px] w-full items-end bg-current transition-all duration-500 ease-[cubic-bezier(0.7,0,0,1)] ${
                                isOpen
                                    ? "origin-right scale-x-0 md:block md:origin-center md:-translate-x-[400px]"
                                    : "group-hover:w-3/4"
                            }`}
                        ></div>
                        <div
                            className={`h-[2px] w-full bg-current transition-all duration-500 ${
                                isOpen
                                    ? "-translate-y-[7px] translate-x-1 -rotate-45 md:-translate-y-2 md:translate-x-[5px]"
                                    : "group-hover:w-1/2"
                            }`}
                        ></div>
                    </div>
                </div>
            </nav>
            <div
                className={`absolute left-0 top-[57px] h-[calc(100vh-57px)] w-full bg-eerie-black py-20 backdrop-blur backdrop-saturate-200 transition-transform duration-300 ease-out will-change-transform md:hidden ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="container">
                    <div
                        className={`flex flex-col items-start gap-y-5`}
                        ref={$linksWrapper}
                    >
                        {anchorLinks?.map((item, index) => {
                            return (
                                <Link
                                    href={item?.slug}
                                    className="group/nav-item relative translate-x-5 translate-y-10 cursor-pointer py-[0.25em] text-2xl leading-none tracking-wider opacity-0"
                                    key={index}
                                >
                                    {item.text}
                                    <span className="absolute bottom-[0.1em] left-0 h-[1.5px] w-full origin-right scale-x-0 bg-seasalt transition-transform duration-300 group-hover/nav-item:origin-left group-hover/nav-item:scale-x-100"></span>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
