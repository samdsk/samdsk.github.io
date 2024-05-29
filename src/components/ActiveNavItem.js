import { Link } from "react-scroll";

export default function ActiveNavItem({ name, target }) {
  return (
    <div className=" font-sans font-bold text-gray-400 hover:text-white hover:transition-colors duration-500">
      <Link
        className="px-2 cursor-pointer"
        activeClass="active"
        to={target}
        spy={true}
        smooth={true}
        offset={-90}
        duration={500}
      >
        {name}
      </Link>
    </div>
  );
}
