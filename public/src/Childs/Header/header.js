import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import './header.css';

export const Header = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#"><img src={require('../../images/logo.jpg')} alt="Logo"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink activeClassName="colorChange" className="nav-link" to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="colorChange" className="nav-link" to="/menu">Menu</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="colorChange" className="nav-link" to="/feedback">Feedback</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="colorChange" className="nav-link" to="/editmenu">Admin?</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}