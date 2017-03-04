import React from "react";
import {Router, Route, hashHistory, IndexRoute} from "react-router";
import Main from "../shared/Main";

import DashboardContainer from "../home/DashboardContainer";
import SavedContainer from "../saved/SavedContainer";
import SearchContainer from "../search/SearchContainer";
import ArticleContainer from "../articles/ArticleContainer";

const routeJsx = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="dashboard" component={DashboardContainer} />
            <Route path="saved" component={SavedContainer} />
            <Route path="search" component={SearchContainer} />
            <Route path="articles" component={ArticleContainer} />
            <IndexRoute component={DashboardContainer} />
        </Route>
    </Router>
    );

export {routeJsx};
