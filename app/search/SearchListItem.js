import React from "react";

export default class ArticleListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="row">
            <div className="col-sm-7"><a href="{this.props.article.url}">{this.props.article.title}</a></div>
                <div className="col-sm-3">{this.props.article.date}</div>
                <div className="col-sm-2"><button className="btn btn-primary">Save</button></div>
                
        </div>
        );
    }
}
