'use client'
import React, { useState } from 'react';
import NavMenu from './NavMenu';
import Logo from './Logo';
import {LuMenu, LuX} from "react-icons/lu"


export default function Nav() {
    const [isOpen,setIsOpen] = useState(false)

    const toggleNavMenu = ()=>{
        setIsOpen(!isOpen)
    }

    return (
        <>  
            <div className='sticky w-full top-0 z-50 flex-wrap items-center justify-between'>
                <nav className='flex flex-row items-center justify-between px-2'>
                    <div className='text-lime-500'>
                        <Logo />
                    </div>
                    <div className='hidden sm:flex flex-row justify-between'>
                        <NavMenu/>
                    </div>
                    <div className='sm:hidden'>
                        <button onClick={toggleNavMenu}>
                            {!isOpen ? <LuMenu size={20}/> : <LuX/>}
                        </button>
                    </div>
                </nav>
                {
                    isOpen && (
                        <div className='sm:hidden flex basis-full flex-col items-center'>
                            <NavMenu></NavMenu>
                        </div>
                    )
                }

            </div>
        </>
        
    )
}