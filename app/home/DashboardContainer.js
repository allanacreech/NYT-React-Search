import React from "react";

import ArticleData from '../shared/data';
import DashboardLayout from "./DashboardLayout";

export default class DashboardContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {articles: []};
    }

    componentDidMount() {
        let api = new ArticleData();
        let self = this;
        api.getArticles().then(data => {
            self.setState({articles: data.data});
            console.log(data);
        });
    }

    render(){
        return(
            <DashboardLayout />
        );
    }
}