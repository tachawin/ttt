import React, {Component} from 'react';
import {Link,withRouter} from 'react-router-dom';

class Navbar extends Component {
    logOut(e){
        e.preventDefault();
        localStorage.removeItem('usertoken')
        this.props.history.push('/');
    }
    render(){
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">  
                        Login                  
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link"> 
                        Register                   
                    </Link>
                </li>
            </ul>
        )

        const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">  
                        User                  
                    </Link>
                </li>
                <li className="nav-item">
                    <a href="" onClick{this.logOut.bind(this)} className="nav-link">
                        logOut
                    </a>
                </li>
            </ul>
        )

        return (
            <nav className="navbar navbar-expand-lg navbar-dark rounded">
                <button className="nav-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar1"
                    aria-controls = "navbar1"
                    aria-label = "Toggle navigation">
                        <span className="navbar-toggle-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-md-center" id="navbar1">
                    
                </div>
            </nav>
        )
    }
}