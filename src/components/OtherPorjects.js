import React from "react";
import OtherProject from "./OtherProject";

const OtherProjects = ({ metadata }) => {
  return (
    <>
      <h1 className="text-2xl font-extrabold font-sans mb-3">Other Projects</h1>
      <div className="static grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {metadata.map((data, index) => {
          if (data.featured === false)
            return <OtherProject key={index} data={data} />;
        })}
      </div>
    </>
  );
};

export default OtherProjects;
