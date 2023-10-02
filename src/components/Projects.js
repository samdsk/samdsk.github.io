/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import fs from "fs"
import path from "path"
import matter from 'gray-matter'
import ProjectMetadata from './ProjectMetadata';

function getProjects(){
    const folder = path.join(process.cwd(), 'src/content/projects')
    const files = fs.readdirSync(folder,'utf-8')
    const projects = files.map( fileName => {
        const file = fs.readFileSync(path.join(folder,fileName),'utf-8')
        const metadata = matter(file)

        return {
            id: metadata.data.id,
            title: metadata.data.title,
            cover: metadata.data.cover,
            github: metadata.data.github,
            external: metadata.data.external,
            tech: metadata.data.tech,
            showInProjects: metadata.data.showInProjects
        }
    })

    return projects
}

export default function HomeSection() {
    const projects = getProjects()
    
    return (
        <>
            <section id="projects" className="h-screen w-screen flex flex-col items-center">
                <div className="flex flex-col justify-center mx-auto m-auto w-10/12 bg-gray-500">
                    <h1 className='text-4xl font-extrabold'>Projects</h1>
                    <div>
                        {projects.map( (p,index) => {
                            return <ProjectMetadata key={index} data={p}/>
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}