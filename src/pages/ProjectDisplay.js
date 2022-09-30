import React from "react";
import { useParams } from "react-router-dom";
import { AppStoreIcon, PlayStoreIcon } from "../assets";
import CarouselFade from "../components/Carousel";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="project">
      <h1> {project.name}</h1>
      <h2>{project.company}</h2>
      <CarouselFade images={project.preview} className="carousel" />
      <p>
        <b>Technology used:</b> {project.skills}
      </p>
      <div className="store-wrapper">
        <img src={PlayStoreIcon} alt="" className="store-icon" onClick={() => {openInNewTab(project.android)}} />
        <img src={AppStoreIcon} alt="" className="store-icon" onClick={() => {openInNewTab(project.ios)}}/>
      </div>
    </div>
  );
}

export default ProjectDisplay;
