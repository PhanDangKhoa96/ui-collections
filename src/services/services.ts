import client from "@/api/apollo-client"
import { FOOTER } from "@/graphql/footer"
import { HEADER } from "@/graphql/header"
import { portfolioData } from "@/graphql/query"
import { gql } from "@apollo/client"

export async function getPortfolioData() {
    const { data }: any = await client.query({
        query: gql`
            query {
                ${portfolioData}
            }
        `,
    })

    return data?.pages?.data[0]?.attributes || null
}

export async function getHeader() {
    const { data }: any = await client.query({
        query: gql`
            query {
                ${HEADER}
            }
        `,
    })

    return data?.header?.data?.attributes || null
}

export async function getFooter() {
    const { data }: any = await client.query({
        query: gql`
            query {
                ${FOOTER}
            }
        `,
    })

    return data?.footer?.data?.attributes || null
}
