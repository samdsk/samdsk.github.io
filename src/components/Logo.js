import ExportedImage from "next-image-export-optimizer";
import logo from "../images/logo.png";
import { Link } from "react-scroll";

export default function Logo(){
    return (
        <div className="relative group w-10 h-10 flex-wrap justify-center items-center hover:outline-offset-1 hover:outline-primary-500 hover:outline outline-2 bg-white rounded-full" >
            <Link to="home" spy={true} smooth={true} offset={-80} duration={500}>
                <ExportedImage className="relative left-[7px] top-[2px]" src={logo} alt="logo" width={25} height={25}/>
            </Link>
        </div>
    )
    
}