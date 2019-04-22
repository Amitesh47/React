import React from 'react';
import { Route,BrowserRouter } from 'react-router-dom';

var HomePage = () => <div className="jumbotron">Home page!</div>;
var UserPage = () => <div className="jumbotron">User page!</div>;

var MainLayout = () => {
    return <div className="container">
        <Route path="/" exact component={HomePage} />
        <Route path="/users" exact component={UserPage} />
    </div>
};

export var RouterApp = () => {
    return <BrowserRouter>
        <MainLayout />
    </BrowserRouter>
}