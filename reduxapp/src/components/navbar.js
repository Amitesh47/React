import React from 'react';
import {Link} from 'react-router-dom';

 export default class Navbar extends React.Component{
     render(){
         return (
            <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <Link className="navbar-brand" to="/">My Cart</Link>
              </div>
              <ul className="nav navbar-nav">
                <li className="active"><Link to="/">Home</Link></li>
                <li>< Link to="/newproduct">Add New Product</Link></li>

              </ul>
            </div>
          </nav>
         )
     }
 }