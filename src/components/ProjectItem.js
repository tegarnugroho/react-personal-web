import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      style={{ backgroundImage: `url(${image})` }}
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div className="project-title">
        <h2 className="label"> {name} </h2>
      </div>
    </div>
  );
}

export default ProjectItem;
 