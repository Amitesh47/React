import React from 'react';

 export default class Navbar extends React.Component{
     render(){
         return (
            <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">My Cart</a>
              </div>
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>

              </ul>
            </div>
          </nav>
         )
     }
 }