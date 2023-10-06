import Link from "next/link"
import { FaGithub } from 'react-icons/fa';

const Github = ({className,href}) => {
    return (
        <Link className={className} href={href}>
            <FaGithub size={25}></FaGithub>
        </Link>
    )
}

export default Github