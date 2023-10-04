/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import fs from "fs"
import path from "path"
import matter from 'gray-matter'
import ProjectMetadata from './ProjectMetadata'

const PROJECTS_FOLDER = 'src/content/projects'
const PROJECTS_ABS_PATH = path.join(process.cwd(), PROJECTS_FOLDER)


function getProjects(){
    const files = fs.readdirSync(PROJECTS_ABS_PATH,'utf-8')
    const mdFiles = files.filter(file => file.endsWith(".md"))   
    return mdFiles 
}

function getMetadata(filename){

    const file = fs.readFileSync(path.join(PROJECTS_ABS_PATH,filename),'utf-8')
    const {data,content} = matter(file)
    return {
        id: data.id,
        title: data.title,
        cover: data.cover,
        github: data.github,
        external: data.external,
        tech: data.tech,
        showInProjects: data.showInProjects,
        description:content
    }
}

export default function HomeSection() {
    const projects = getProjects()
    let metadata = projects.map( p => getMetadata(p))
    metadata.sort((a,b) => a.id - b.id)

    return (
        <>
            <section id="projects" className="h-auto w-screen flex flex-col items-center">
                <div className="flex flex-col justify-center mx-auto m-auto w-10/12 bg-gray-500">
                    <h1 className='text-4xl font-extrabold'>Projects</h1>
                    <div>
                        {metadata.map( (data,index) => {
                            return (
                                <ProjectMetadata key={index} data={data}/>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}