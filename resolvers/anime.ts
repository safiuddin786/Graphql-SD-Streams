import { context } from "../models/resolvers_type";

export const Anime = {
    episode: (_parent: any, args: {link: string, episode: number}, context: context)=>{
        const {dataSources} = context
        const {link, episode} = args
        return dataSources.sdStreamAPI.getEpisodeInfo({link, episode})
    }
}