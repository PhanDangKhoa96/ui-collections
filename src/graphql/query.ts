import {
    CONTACT_BLOCK,
    EXPERTISE_BLOCK,
    HERO_BLOCK,
    PROJECT_BLOCK,
} from "./blocks"
import SEO from "./seo"

const blocks = [EXPERTISE_BLOCK, HERO_BLOCK, PROJECT_BLOCK, CONTACT_BLOCK]

export const portfolioData = `
pages(filters: { slug: { eq: "portfolio" } }) {
    data {
        attributes {
           ${SEO}
            blocks {
                ${blocks?.map((block) => block)}
            }
        }
    }
}
`
