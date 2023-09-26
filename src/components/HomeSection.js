/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react';
import ActiveNavItem from './ActiveNavItem';


export default function HomeSection() {
    return (
        <>
            <section id="home" className="h-screen w-screen flex flex-col items-center">
                <div className="flex flex-col justify-center mx-auto m-auto w-10/12">
                    <div className='backdrop-blur-sm bg-white/30 rounded-lg bg-slate-500 p-5'>
                        <div className="my-2 ">
                            <h4 className="toUpAnimation anim-delay-200ms text-sm text-blue-800">Hello World! I am</h4>
                            <h1 className="toUpAnimation anim-delay-500ms text-4xl w-full sm:text-5xl md:text-6xl">Sam****. K*****.</h1>
                            <h4 className="toUpAnimation anim-delay-700ms text-xl sm:text-2xl md:text-3xl text-blue-800 w-auto ">I love exploring 🔍 and learning 📖 new things</h4>
                        </div>
                        <div className="text-sm toUpAnimation anim-delay-1000ms mt-2">
                            <p className="w-auto sm:w-3/4 ">
                                I’m a software developer from Italy 🇮🇹. I’m keen on back-end development 💻. 
                            </p>
                        </div>
                        <div className="text-sm toUpAnimation anim-delay-1000ms mt-2">
                            <p className="w-auto sm:w-3/4 ">
                                When I don’t code I like to hike 🥾, stargaze 🔭 and play video games 🎮. 
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className='p-2 mt-2 rounded-md border w-fit'>
                            <ActiveNavItem name="Contact" target="contacts"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}