import SDStreamAPI from "../data/sd_stream_api";
import { context } from "../models/resolvers_type";

export const Query={
    search: (_parent: any, args: {name: string}, context: context)=>{
        const {dataSources} = context
        const {name} = args
        return dataSources.sdStreamAPI.getSearchResult({name: name})
    },
    anime: (_parent: any, args: {name: string}, context: context)=>{
        const {dataSources} = context
        const {name} = args
        return dataSources.sdStreamAPI.getAnime({name: name})
    },
    searchFirst: (_parent: any, args: {name: string}, context: context)=>{
        const {dataSources} = context
        const {name} = args
        const result = dataSources.sdStreamAPI.getSearchResult({name: name})
        return result.then((res)=>res[0])
    }
}