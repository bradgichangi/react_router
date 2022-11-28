import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import './header.css'

function Header() {

    return (
        <>
            <header id="header">
                <li>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='cohorts'>Cohorts</NavLink>
                </li>
            </header>
            <Outlet />
        </>
        
    )

}


export default Header
