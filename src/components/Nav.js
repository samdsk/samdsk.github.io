'use client'
import React from 'react';
import { Link } from "react-scroll";


export default function Nav() {
    return (
        <>
            <ul className="flex flex-row sticky top-0 z-50 p-2 justify-end pr-10" id="nav-bar">
                <li className="nav-item">
                    <Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link activeClass="active" to="aboutMe" spy={true} smooth={true} offset={-70} duration={500}>
                        About me
                    </Link>
                </li>
                <li className="nav-item">
                    <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className="nav-item">
                    <Link activeClass="active" to="contacts" spy={true} smooth={true} offset={-70} duration={500}>
                        Contacts
                    </Link>
                </li>
            </ul>
        </>
    )
}