"use client"
import React from "react"
import Link from 'next/link'
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoReact, BiLogoTailwindCss, BiLogoGithub  } from "react-icons/bi";

const Footer = () => {
    return (
        <footer className="flex-wrap mb-5">
            <p className="text-sm">Design inspired by <Link className="text-primary-500" href="https://v4.brittanychiang.com/" target="_blank">Brittany Chiang</Link> blog.</p>
            <div className="flex flex-row justify-center">
                <Link className="hover:text-accent-500" href="https://nextjs.org/" target="_blank">
                    <TbBrandNextjs size={20}/>
                </Link>
                <Link className="hover:text-accent-500" href="https://react.dev/" target="_blank">
                    <BiLogoReact size={20}/>
                </Link>
                <Link className="hover:text-accent-500" href="https://pages.github.com/" target="_blank">
                    <BiLogoGithub size={20}/>
                </Link>
                <Link className="hover:text-accent-500" href="https://tailwindcss.com/" target="_blank">
                    <BiLogoTailwindCss size={20}/>
                </Link>
            </div>
        </footer>
    )
}

export default Footer