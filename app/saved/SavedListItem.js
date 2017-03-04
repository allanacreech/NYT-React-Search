import React from "react";

export default class SavedListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="row">
            <div className="col-sm-7"><a href="{this.props.savedArticle.url}">{this.props.savedArticle.title}</a></div>
                <div className="col-sm-3">{this.props.savedArticle.date}</div>
                <div className="col-sm-2"><button className="btn btn-danger">Delete</button></div>
                
        </div>
        );
    }
}
