import React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';

var HomePage = () => <div className="jumbotron">Home page!</div>;
var UsersPage = () => <div className="jumbotron">User page!</div>;
var UserPage = (props) => {
    var { match: { params } } = props;
    console.log(params);
    return <div className="jumbotron">A Specific User page for {params.userid}</div>;
}

var MainLayout = () => {
    return <div className="container">


        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">Router Basics</Link>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><Link to="/">Home</Link></li>
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/users/10">A Specific User</Link></li>

                </ul>
            </div>
        </nav>

        <Route path="/" exact component={HomePage} />
        <Route path="/users" exact component={UsersPage} />
        <Route path="/users/:userid" exact component={UserPage} />
    </div>
};

export var RouterApp = () => {
    return <BrowserRouter>
        <MainLayout />
    </BrowserRouter>
}