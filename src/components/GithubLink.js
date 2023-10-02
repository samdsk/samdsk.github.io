import Link from "@next/Link"
import { FaGithub } from 'react-icons/fa';


export default ({href}) => {
    return <Link href={href}>
        <FaGithub></FaGithub>
    </Link>
}