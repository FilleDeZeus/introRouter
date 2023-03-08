import React from 'react'
import { NavLink } from "react-router-dom";
import './public/css/navbar.css'
export const Navbar = () => {
    return (
        <div className='navbar'>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/liste">Liste</NavLink>
            {/* <NavLink to="/liste">Liste</NavLink> */}
            {/* <NavLink to="/connection">Connection</NavLink> */}
            {/* <NavLink to="*">Error</NavLink> */}

        </div>
    )
}
