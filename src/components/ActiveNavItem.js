import { Link } from "react-scroll";

export default function ActiveNavItem({name,target}){
    return (
        <div className="max-sm:pb-3 font-mono hover:text-slate-300 hover:transition-colors duration-500">
            <Link className="px-2" activeClass="active" to={target} spy={true} smooth={true} offset={-70} duration={500}>
                {name}
            </Link>
        </div>
    )
}
