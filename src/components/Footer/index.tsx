import React from "react"
import Link from "next/link"

export const footer = {
    footerHeader: "LET'S CONNECT",
    copyRight: "© Khoa Phan",
    social_medias: {
        __typename: "SocialMediaRelationResponseCollection",
        data: [
            {
                __typename: "SocialMediaEntity",
                id: "1",
                attributes: {
                    __typename: "SocialMedia",
                    socialLink: {
                        __typename: "ComponentSharedButton",
                        id: "5",
                        label: "Email",
                        url: "mailto:pldkhoa96.work@gmail.com",
                        openInNewTab: false,
                    },
                },
            },
            {
                __typename: "SocialMediaEntity",
                id: "2",
                attributes: {
                    __typename: "SocialMedia",
                    socialLink: {
                        __typename: "ComponentSharedButton",
                        id: "6",
                        label: "Github",
                        url: "https://github.com/PhanDangKhoa96",
                        openInNewTab: true,
                    },
                },
            },
            {
                __typename: "SocialMediaEntity",
                id: "3",
                attributes: {
                    __typename: "SocialMedia",
                    socialLink: {
                        __typename: "ComponentSharedButton",
                        id: "7",
                        label: "Linkedin",
                        url: "https://www.linkedin.com/in/phan-khoa-b5820311a/",
                        openInNewTab: true,
                    },
                },
            },
        ],
    },
}

const Footer = () => {
    const { footerHeader, social_medias, copyRight } = footer
    const currentYear = new Date().getFullYear()
    return (
        <footer className="relative z-50 mb-12">
            <div className="container font-acumin-condensed text-sm font-semibold uppercase tracking-widest md:text-base">
                <h2 className="relative mb-5 pb-3">
                    <span className="title">{footerHeader}</span>

                    <span className="bar absolute bottom-0 left-0 h-[1px] w-full bg-current"></span>
                </h2>

                <div className="flex items-end justify-between">
                    <ul className="flex flex-col gap-y-1">
                        {social_medias.data.map((item) => {
                            const { label, url, openInNewTab, id } =
                                item.attributes.socialLink || {}
                            return (
                                <li key={id}>
                                    <Link
                                        href={url}
                                        target={openInNewTab ? "_blank" : ""}
                                        rel="noopener noreferrer"
                                        className="social-link"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>

                    <p className="font-acumin text-sm font-normal normal-case tracking-normal">
                        {currentYear} Copyright {copyRight} 
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
