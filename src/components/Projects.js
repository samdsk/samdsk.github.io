/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import fs from "fs"
import path from "path"
import matter from 'gray-matter'
import FeaturedProjects from './FeaturedProjects.js'
import OtherProjects from './OtherPorjects.js'

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
        description:content,
        featured:data.featured
    }
}

const Projects = () => {
    const projects = getProjects()
    let metadata = projects.map( p => getMetadata(p))
    metadata.sort((a,b) => a.id - b.id)
    metadata = metadata.filter(file => file.showInProjects) 
    return (
        <>
            <section id="projects" className="w-screen mb-10 flex flex-row items-center md:px-5 xl:px-10 2xl:px-20">
                <div id="featured-projects" className="flex flex-col justify-center m-auto w-10/12 lg:w-2/3">
                    <h1 className='text-4xl font-sans font-bold sm:text-5xl md:text-6xl mb-7'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-secondary-500 to-primary-500'>Projects</span></h1>
                    <FeaturedProjects metadata={metadata}></FeaturedProjects>
                    <OtherProjects metadata={metadata}></OtherProjects>
                </div>
            </section>
        </>
    )
}

export default Projects