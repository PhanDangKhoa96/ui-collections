export const HERO_BLOCK = `
... on ComponentBlocksHeroBlock {
    title
    name
    introText
    description
    buttonText
}`

export const PROJECT_BLOCK = `
... on ComponentBlocksProjectBlock {
    projects {
        data {
            attributes {
                title
                role
                link {
                    id
                    label
                    url
                    openInNewTab
                }
                featureImage {
                    data {
                        attributes {
                            alternativeText
                            url
                        }
                    }
                }
            }
        }
    }
    sectionHeader {
        name
        order
    }
}`

export const EXPERTISE_BLOCK = `
... on ComponentBlocksExpertiseBlock {
    title
    description
    buttonText
    expertise {
        data {
            attributes {
                title
                tags
                description
                icon {
                    data {
                        attributes {
                            alternativeText
                            url
                        }
                    }
                }
            }
        }
    }
    sectionHeader {
        name
        order
    }
}`

export const CONTACT_BLOCK = `
... on ComponentBlocksContactBlock {
    title
    sectionHeader {
        name
        order
    }
}`
