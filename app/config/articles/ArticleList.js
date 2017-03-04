import React from "react";

import ArticleListItem from "./ArticleListItem";

export default class ArticleList extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
        <div>
            <div className="row">
                <div className="col-sm-12"><h4>Results</h4></div>
                
            </div>
            {this.props.articles.map(article => {
                return <ArticleListItem article={article}/>;
            })}
        </div>
        );
    }
}