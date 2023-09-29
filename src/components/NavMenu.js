import React from 'react';
import ActiveNavItem from './ActiveNavItem';



export default function NavMenu() {
    return (
        <>
            <ActiveNavItem name="Home" target="home"/>
            <ActiveNavItem name="Projects" target="projects"/>
            <ActiveNavItem name="Contact" target="contacts"/>
        </>
    )
}