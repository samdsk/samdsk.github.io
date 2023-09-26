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
            <div className='sticky w-full bg-gradient-to-b from-blue-500 to-trasnperate top-0 z-50 flex-wrap items-center justify-between'>
                <nav className='flex flex-row items-center justify-between px-2'>
                    <div className='text-white font-mono text-2xl'>
                        <Logo />
                    </div>
                    <div className='hidden sm:flex flex-row justify-between'>
                        <NavMenu/>
                    </div>
                    <div className='sm:hidden mx-1 mt-1'>
                        <button onClick={toggleNavMenu}>
                            {!isOpen ? <LuMenu size={30} color='white'/> : <LuX size={30} color='white'/>}
                        </button>
                    </div>
                </nav>
                {
                    isOpen && (
                        <div className='sm:hidden bg-gradient-to-l from-blue-500 to-trasnperate rounded-md backdrop-blur-sm w-1/2 h-screen right-0 absolute flex flex-col items-center justify-center'>
                            <NavMenu></NavMenu>
                        </div>
                    )
                }

            </div>
        </>
        
    )
}