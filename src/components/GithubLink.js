import Link from "next/link"
import { FaGithub } from 'react-icons/fa';

const Github = ({classes,href}) => {
    return (
        <div className={classes} >
            <Link href={href}>
                <FaGithub className="hover:text-blue-300" size={25}></FaGithub>
            </Link>
        </div>
    )
}

export default Github