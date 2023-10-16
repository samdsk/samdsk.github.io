import React from 'react';
import ProjectMetadata from './FeaturedProject'

const FeaturedProjects = ({metadata}) => {
    return (
        <>
            <div className='static flex flex-col justify-between items-center'>
                {metadata.map( (data,index) => {
                    if(data.featured === true)
                        return (
                            <ProjectMetadata key={index} data={data}/>
                        )
                })}
            </div>
        </>
    )
}

export default FeaturedProjects