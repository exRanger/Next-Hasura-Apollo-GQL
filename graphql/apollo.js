import {ApolloClient, InMemoryCache} from "@apollo/client"

const client = new ApolloClient({
    uri: "", // from process.env
    cache: new InMemoryCache(),
    headers: {
        "", // from process.env
    }
})

export default client
