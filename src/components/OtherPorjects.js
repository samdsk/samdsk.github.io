import React from 'react';
import OtherProject from './OtherProject'

const OtherProjects = ({metadata}) => {
    return (
        <>
            <div className='static flex flex-col justify-between items-center'>
                <h1 className='text-2xl font-extrabold font-sans mb-3'>Other Projects</h1>
                {metadata.map( (data,index) => {
                    if(data.featured === false)
                        return (
                            <OtherProject key={index} data={data}/>
                        )
                })}
            </div>
        </>
    )
}

export default OtherProjects