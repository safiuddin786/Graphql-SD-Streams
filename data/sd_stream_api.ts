import { RESTDataSource } from "apollo-datasource-rest";
import { AnimeModel, SearchModel } from "../models/models";

class SDStreamAPI extends RESTDataSource{
    constructor(){
        super()
        this.baseURL = "https://sdstreams.herokuapp.com/"
    }
    async getSearchResult({name}: {name:string}){
        const response = await this.get("search", {search: name})
        return Array.isArray(response)?response.map((anime)=>this.searchReducer(anime)): []
    }
    async getAnime({name}:{name: string}){
        const response = await this.get("anime", {anime: name})
        return Array.isArray(response)?this.animeReducer(response[0]): []
    }
    async getEpisodeInfo({link, episode}: {link: string, episode: number}){
        const response = await this.get("episode", {link, episode})
        return response
    }

    searchReducer(anime: SearchModel){
        return anime
    }
    animeReducer(anime: AnimeModel){
        return anime
    }
}

export default SDStreamAPI