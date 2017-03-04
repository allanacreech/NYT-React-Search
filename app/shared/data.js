import axios from "axios";

export default class ArticleData {
    constructor(){

    }

        getArticles(){
        return axios.get("/api/articles/10");
    }
    
        getSavedArticles(){
        return axios.get("/api/savedArticles/");
    }
}