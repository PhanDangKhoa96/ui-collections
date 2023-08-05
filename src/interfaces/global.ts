export interface IAnchor {
    __typename: string
    text: string
    id: string
    anchorId: string
}

export type IFooter = {
    footerHeader: string
    copyRight: string
    social_medias: {
        data: {
            id: string
            attributes: {
                socialLink: {
                    id: string
                    label: string
                    url: string
                    openInNewTab: boolean
                }
            }
        }[]
    }
}

export interface ILink {
    __typename: string
    id: string
    label: string
    url: string
    openInNewTab: boolean
}
