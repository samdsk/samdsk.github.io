/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import fs from "fs"
import path from "path"

function getProjects(){
    let folder = path.join(process.cwd(), 'src/content/projects')
    const files = fs.readdirSync(folder)
    return files.filter(f => f.endsWith('.md')).map( f => f.replace(".md", ""))
}

export default function HomeSection() {
    const projects = getProjects()
    
    return (
        <>
            <section id="projects" className="h-screen w-screen flex flex-col items-center">
                <div className="flex flex-col justify-center mx-auto m-auto w-10/12 bg-gray-500">
                    <h1 className='text-4xl font-extrabold'>Projects</h1>
                    <ul>hello
                        {projects.map( p => <li>{p}</li>)}
                    </ul>
                </div>
            </section>
        </>
    )
}