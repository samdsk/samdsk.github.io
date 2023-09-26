import { Link } from "react-scroll";

export default function ActiveNavItem({name,target}){
    return (
        <Link className="px-2 max-sm:pb-1" activeClass="active" to={target} spy={true} smooth={true} offset={-70} duration={500}>
            {name}
        </Link>
    )
}
