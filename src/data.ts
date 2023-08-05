export const blocks = [
    {
        __typename: "ComponentBlocksHeroBlock",
        title: "Creative Developer",
        name: "Khoa Phan",
        introText:
            "Hi, I'm Khoa – a dedicated front-end developer with 2 years of experience creating visually captivating and user-friendly websites.",
        description:
            "Always eager to learn and evolve, I'm passionate about embracing new technologies and techniques. Feel free to explore my portfolio showcasing my creativity and expertise. Let's connect if you're interested in working together or just want to chat!",
        buttonText: "Let's connect",
    },
    {
        __typename: "ComponentBlocksProjectBlock",
        projects: {
            __typename: "ProjectRelationResponseCollection",
            data: [
                {
                    __typename: "ProjectEntity",
                    attributes: {
                        __typename: "Project",
                        title: "Gremlin Works",
                        role: "Development",
                        link: {
                            __typename: "ComponentSharedButton",
                            id: "1",
                            label: "View project",
                            url: "https://gremlinworks.co.uk/",
                            openInNewTab: true,
                        },
                        featureImage: {
                            __typename: "UploadFileEntityResponse",
                            data: {
                                __typename: "UploadFileEntity",
                                attributes: {
                                    __typename: "UploadFile",
                                    alternativeText: null,
                                    url: "https://res.cloudinary.com/dfqbwwc1f/image/upload/v1687582042/Rectangle_1_u2hf33.png",
                                },
                            },
                        },
                    },
                },
                {
                    __typename: "ProjectEntity",
                    attributes: {
                        __typename: "Project",
                        title: "Future Platform",
                        role: "Development",
                        link: {
                            __typename: "ComponentSharedButton",
                            id: "3",
                            label: "View project",
                            url: "https://www.futureplatforms.com/",
                            openInNewTab: true,
                        },
                        featureImage: {
                            __typename: "UploadFileEntityResponse",
                            data: {
                                __typename: "UploadFileEntity",
                                attributes: {
                                    __typename: "UploadFile",
                                    alternativeText: null,
                                    url: "https://res.cloudinary.com/dfqbwwc1f/image/upload/v1685274583/FuturePlatforms_Logo_1_square_x2emxz.png",
                                },
                            },
                        },
                    },
                },
                {
                    __typename: "ProjectEntity",
                    attributes: {
                        __typename: "Project",
                        title: "Celerity",
                        role: "Development",
                        link: {
                            __typename: "ComponentSharedButton",
                            id: "2",
                            label: "View project",
                            url: "https://www.celerity-uk.com/",
                            openInNewTab: true,
                        },
                        featureImage: {
                            __typename: "UploadFileEntityResponse",
                            data: {
                                __typename: "UploadFileEntity",
                                attributes: {
                                    __typename: "UploadFile",
                                    alternativeText: null,
                                    url: "https://res.cloudinary.com/dfqbwwc1f/image/upload/v1685274584/Featured-Image_1_square_dwukve.png",
                                },
                            },
                        },
                    },
                },
                {
                    __typename: "ProjectEntity",
                    attributes: {
                        __typename: "Project",
                        title: "Saigon Digital",
                        role: "Development",
                        link: {
                            __typename: "ComponentSharedButton",
                            id: "4",
                            label: "View project",
                            url: "https://saigon.digital/",
                            openInNewTab: true,
                        },
                        featureImage: {
                            __typename: "UploadFileEntityResponse",
                            data: {
                                __typename: "UploadFileEntity",
                                attributes: {
                                    __typename: "UploadFile",
                                    alternativeText: null,
                                    url: "https://res.cloudinary.com/dfqbwwc1f/image/upload/v1685274582/image-og_1_square_jwu2qb.png",
                                },
                            },
                        },
                    },
                },
            ],
        },
        sectionHeader: {
            __typename: "ComponentSharedSectionHeader",
            name: "Work",
            order: 1,
        },
    },
    // {
    //     __typename: "ComponentBlocksExpertiseBlock",
    //     title: "HOW CAN 'I HELP'",
    //     description:
    //         "I specialise in offering bespoke web development services to small and big businesses alike.\n My aim is to help businesses establish a strong online presence and connect with their target audience effectively.",
    //     buttonText: "Contact",
    //     expertise: {
    //         __typename: "ExpertiseRelationResponseCollection",
    //         data: [
    //             {
    //                 __typename: "ExpertiseEntity",
    //                 attributes: {
    //                     __typename: "Expertise",
    //                     title: "Responsive Design",
    //                     tags: "#ResponsiveDesign, #MediaQueries, #MobileFirst",
    //                     description:
    //                         "Design and develop websites that automatically adapt their layout to different devices and screen sizes, ensuring a consistent and user-friendly experience across desktops, tablets, and smartphones.",
    //                     icon: {
    //                         __typename: "UploadFileEntityResponse",
    //                         data: {
    //                             __typename: "UploadFileEntity",
    //                             attributes: {
    //                                 __typename: "UploadFile",
    //                                 alternativeText: null,
    //                                 url: "https://res.cloudinary.com/dfqbwwc1f/image/upload/v1682847586/responsive_symbol_with_a_widescreen_monitor_a_cellphone_and_a_tablet_svgrepo_com_c946a72c0d.svg",
    //                             },
    //                         },
    //                     },
    //                 },
    //             },
    //             {
    //                 __typename: "ExpertiseEntity",
    //                 attributes: {
    //                     __typename: "Expertise",
    //                     title: "Modern JS Frameworks/Libraries",
    //                     tags: "#React, #Vue, #NextJS",
    //                     description:
    //                         "Stay up-to-date with popular JavaScript frameworks and libraries that offer powerful tools and components, making it easier to develop complex, high-performance, and maintainable front-end applications.",
    //                     icon: {
    //                         __typename: "UploadFileEntityResponse",
    //                         data: {
    //                             __typename: "UploadFileEntity",
    //                             attributes: {
    //                                 __typename: "UploadFile",
    //                                 alternativeText: null,
    //                                 url: "https://res.cloudinary.com/dfqbwwc1f/image/upload/v1682847586/reactjs_fill_svgrepo_com_71f9fdf6b7.svg",
    //                             },
    //                         },
    //                     },
    //                 },
    //             },
    //             {
    //                 __typename: "ExpertiseEntity",
    //                 attributes: {
    //                     __typename: "Expertise",
    //                     title: "Performance Optimization",
    //                     tags: " #CrossBrowser, #Compatibility, #BrowserTesting",
    //                     description:
    //                         "Develop websites and applications that work consistently across various browsers and platforms, addressing potential compatibility issues to provide a uniform experience for all users.",
    //                     icon: {
    //                         __typename: "UploadFileEntityResponse",
    //                         data: {
    //                             __typename: "UploadFileEntity",
    //                             attributes: {
    //                                 __typename: "UploadFile",
    //                                 alternativeText: null,
    //                                 url: "https://res.cloudinary.com/dfqbwwc1f/image/upload/v1682847586/performance_svgrepo_com_773b32e388.svg",
    //                             },
    //                         },
    //                     },
    //                 },
    //             },
    //             {
    //                 __typename: "ExpertiseEntity",
    //                 attributes: {
    //                     __typename: "Expertise",
    //                     title: "Collaboration & Communication",
    //                     tags: "#Teamwork, #Communication, #Agile, #Scrum",
    //                     description:
    //                         "Work effectively with cross-functional teams, communicate clearly with clients and translate project requirements into technical solutions, fostering a collaborative development environment.",
    //                     icon: {
    //                         __typename: "UploadFileEntityResponse",
    //                         data: {
    //                             __typename: "UploadFileEntity",
    //                             attributes: {
    //                                 __typename: "UploadFile",
    //                                 alternativeText: null,
    //                                 url: "https://res.cloudinary.com/dfqbwwc1f/image/upload/v1682847411/team_3_svgrepo_com_f710c486c3.svg",
    //                             },
    //                         },
    //                     },
    //                 },
    //             },
    //         ],
    //     },
    //     sectionHeader: {
    //         __typename: "ComponentSharedSectionHeader",
    //         name: "Expertise",
    //         order: 2,
    //     },
    // },
    {
        __typename: "ComponentBlocksContactBlock",
        title: "Let work together",
        sectionHeader: {
            __typename: "ComponentSharedSectionHeader",
            name: "Contact",
            order: 2,
        },
    },
]

export const header = {
    __typename: "Header",
    anchorLinks: [
        {
            __typename: "ComponentSharedAnchorLink",
            text: "about",
            id: "2",
            anchorId: "about",
        },
        {
            __typename: "ComponentSharedAnchorLink",
            text: "projects",
            id: "3",
            anchorId: "projects",
        },
        {
            __typename: "ComponentSharedAnchorLink",
            text: "expertise",
            id: "1",
            anchorId: "expertise",
        },
        {
            __typename: "ComponentSharedAnchorLink",
            text: "contact",
            id: "4",
            anchorId: "contact",
        },
    ],
}

export const footer = {
    __typename: "Footer",
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

export const seo = {
    metaTitle: "Khoa Phan | Front-End Developer Portfolio",
    metaDescription:
        "Discover the innovative front-end portfolio of Khoa Phan, showcasing expertise in HTML, CSS, JavaScript, responsive design, and modern frameworks to create visually stunning and user-friendly websites and applications.",
    metaImage: {
        data: {
            attributes: {
                alternativeText: null,
                url: "https://res.cloudinary.com/dfqbwwc1f/image/upload/v1683023035/profile_pic_2_90ab874928.png",
            },
        },
    },
    keywords:
        "front-end developer, HTML, CSS, JavaScript, React, Angular, Vue.js, responsive design, web accessibility, UI/UX design, portfolio, Khoa Phan",
    metaRobots: null,
    structuredData: null,
    canonicalURL: null,
}
