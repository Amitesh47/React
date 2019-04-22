import React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import axios from 'axios';
import UserList from './UserList';
import UserDetails from './UserDetails';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link className="navbar-brand" to="/">Router App</Link>
                        </div>
                        <ul className="nav navbar-nav">
                            <li className="active"><Link to="/">Home</Link></li>
                            <li><Link to="/users">Users</Link></li>

                        </ul>
                    </div>
                </nav>
                
                <Route path="/users" exact component={UserList} />
                <Route path="/users/:login" exact component={UserDetails} />
            </div>
        )
    }
}

export var RouterApp = () => {
    return <BrowserRouter>
        <Home />
    </BrowserRouter>
}