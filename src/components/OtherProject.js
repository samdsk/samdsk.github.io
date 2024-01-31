import Github from "./GithubLink";
import Link from "next/link";
import {FaLink,FaFolder} from "react-icons/fa"

const FeaturedProject = ({data}) => {
    
    return (
        <div key={data.id} className="container bg-slate-800 p-5 flex flex-col rounded-xl justify-between min-h-[300px] hover:bg-indigo-950">
            <div className="">
                <div className="flex flex-row justify-between items-center mb-2">
                    <FaFolder size={30}></FaFolder>
                    <div className="flex flex-row justify-start space-x-5">
                        {data.github != null && 
                                <Github className="hover:text-accent-400" href={data.github}></Github>
                        }

                        {data.external != null &&
                            <Link className="hover:text-accent-400" href={data.external}>
                                <FaLink size={20}></FaLink>
                            </Link>
                        }
                    </div>
                </div>
                <h1 className="font-extrabold text-2xl text-primary-500 font-sans">{data.title}</h1>
                <p className="mt-2">{data.description}</p>
            </div>
            <ul className="flex flex-row flex-wra mt-5">
                {
                    data.tech.map( (t,index) => {
                        return <li className="mr-2 text-secondary-300 hover:text-accent-400" key={index}>{t}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default FeaturedProject