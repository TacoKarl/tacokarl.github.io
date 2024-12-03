import React from "react";
import {NavLink} from 'react-router-dom'
import './style/NavBar.css'
import '../assets/style.css'


const NavBar: React.FC = () => {
    return (
        <nav>
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/first" className="nav-link">1st Semester</NavLink>
            <NavLink to="/second" className="nav-link">2nd Semester</NavLink>
            <NavLink to="/third" className="nav-link">3rd Semester</NavLink>
            <NavLink to="/fourth" className="nav-link">4th Semester</NavLink>
            <NavLink to="/fifth" className="nav-link">5th Semester</NavLink>
            <NavLink to="/sixth" className="nav-link">6th Semester</NavLink>
            <NavLink to="/seventh" className="nav-link">7th Semester</NavLink>
        </nav>
    );
}

export default NavBar;