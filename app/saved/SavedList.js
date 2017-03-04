import React from "react";

import SavedListItem from "./SavedListItem";

export default class SavedList extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
        <div>
            <div className="row">
                <div className="col-sm-12"><h4>Saved Articles</h4></div>
                
            </div>
            {this.props.saveArticles.map(savedArticle => {
                return <SavedListItem savedArticle={savedArticle}/>;
            })}
        </div>
        );
    }
}