import React from "react";

import SavedData from '../shared/data';
import SavedList from "./SavedList";

export default class SavedContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {savedArticles: []};
    }

    componentDidMount() {
        let api = new ArticleData();
        let self = this;
        api.getSavedArticles().then(data => {
            self.setState({savedArticles: data.data});
        });
    }

    render(){
        return(
            <SavedList savedArticles={this.state.savedArticles} />
        );
    }
}