import React from "react";

import ArticleData from '../shared/data';
import SalesList from "./ArticleList";

export default class ArticleContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {articles: []};
    }

    componentDidMount() {
        let api = new ArticleData();
        let self = this;
        api.getArticles().then(data => {
            self.setState({articles: data.data});
        });
    }

    render(){
        return(
            <ArticleList articles={this.state.articles} />
        );
    }
}