import React, { Component } from 'react'
import navbarstyle from "./Navbar.module.css";
import { Link } from 'react-router-dom';
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light ps-3 pe-3">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">


                                <li className="nav-item">
                                    <Link to="/" className={`${navbarstyle.navlink}`}>Home</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/weather" className={`${navbarstyle.navlink}`}>Weather</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
