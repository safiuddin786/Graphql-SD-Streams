import { ApolloServer, gql } from "apollo-server";
import SDStreamAPI from "./data/sd_stream_api";
import { Anime } from "./resolvers/anime";
import { Query } from "./resolvers/Query";
import { typeDefs } from "./schema";

const resolvers = {
    Query: Query,
    Anime: Anime
}

const restAPIs = {
    sdStreamAPI: new SDStreamAPI()
}

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    dataSources: ()=>(restAPIs)
})

server.listen().then((response)=>{
    const {url} = response
    console.log(`Server is Running on `+ url)
})