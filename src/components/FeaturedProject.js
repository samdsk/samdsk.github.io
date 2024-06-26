import ExportedImage from "next-image-export-optimizer";
import Github from "./GithubLink";
import Link from "next/link";
import { FaLink } from "react-icons/fa";

const FeaturedProject = ({ data }) => {
  return (
    <div
      key={data.id}
      className="container min-h-max group relative grid grid-cols-12 max-sm:grid-cols-1 gap-2 mb-10 mt-10"
    >
      <div className="relative max-sm:p-2 p-5 sm:col-start-1 sm:col-end-7 row-start-1 row-end-[-1] z-20 max-sm:col-start-1 max-sm:col-end-[-1]">
        <h5 className="text-secondary-500 text-sm mb-1 drop-shadow-lg">
          Featured Project
        </h5>
        <h1 className="font-extrabold text-2xl mb-5">{data.title}</h1>
        <p className=" text-black p-5 mb-2 drop-shadow-lg bg-white/50 backdrop-blur-md rounded-md">
          {data.description}
        </p>
        <ul className="flex flex-row flex-wrap">
          {data.tech.map((t, index) => {
            return (
              <li
                className="p-1 text-sm drop-shadow-md text-secondary-500 hover:text-accent-400 cursor-pointer"
                key={index}
              >
                {t}
              </li>
            );
          })}
        </ul>
        <div className="flex flex-row space-x-3 mt-2 items-center">
          <Github className="hover:text-accent-400" href={data.github}></Github>
          <Link
            className="hover:text-accent-400"
            href={data.external}
            target="_blank"
          >
            <FaLink size={20}></FaLink>
          </Link>
        </div>
      </div>
      <a
        className="relative group image-tint z-10 bg-cyan-400  max-h-[300px] rounded-xl  overflow-hidden sm:col-start-4 sm:col-end-[-1] max-sm:col-start-1 max-sm:col-end-[-1] row-start-1 row-end-[-1]"
        href={data.external}
        target="_blank"
      >
        <ExportedImage
          className="w-full object-cover grayscale group-hover:grayscale-0 h-full object-center"
          src={"images/" + data.cover}
          alt="cover-image"
          width={600}
          height={600}
        />
      </a>
    </div>
  );
};

export default FeaturedProject;
