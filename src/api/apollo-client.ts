import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
    uri: "https://portfolio-w0u0.onrender.com/graphql",
    cache: new InMemoryCache(),
})

export default client
