'use client'
import React from 'react';
import { Link } from "react-scroll";

function ActiveNavItem({name,target}){
    return (
        <li className="nav-item">
            <Link activeClass="active" to={target} spy={true} smooth={true} offset={-70} duration={500}>
                {name}
            </Link>
        </li>
    )
}


export default function Nav() {
    return (
        <ul className="flex flex-row sticky top-0 z-50 p-2 justify-end pr-10" id="nav-bar">
            <ActiveNavItem name="Home" target="home"/>
            <ActiveNavItem name="About" target="about"/>
            <ActiveNavItem name="Projects" target="projects"/>
            <ActiveNavItem name="Contact" target="contacts"/>
        </ul>
    )
}