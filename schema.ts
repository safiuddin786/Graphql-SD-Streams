import { gql } from "apollo-server";

export const typeDefs = gql`
    type Search{
        img: String
        link: String
        release: String
        title: String
    }
    scalar Episode
    type Anime{
        anime_type: String
        score: String
        title: String
        total_episodes: String
        episode(link: String!, episode: Int): Episode
    }
    type Query{
        search(name: String!): [Search!]!
        searchFirst(name: String!): Search
        anime(name: String!): Anime
    }
`