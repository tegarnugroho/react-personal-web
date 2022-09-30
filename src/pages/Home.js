import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import { JSONSkills } from "../assets";

function Home() {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, I'm Tegar Nugroho</h2>
        <div className="prompt">
          <p>An experienced Mobile Developer with expertise in Flutter Framework.</p>
          <LinkedInIcon
            onClick={() => {
              openInNewTab("https://www.linkedin.com/in/tegaranugroho/");
            }}
          />
          <EmailIcon
            onClick={() => {
              openInNewTab(
                "mailto:tegaranugroho@gmail.com?subject=Subject&body=Hi%20Tegar"
              );
            }}
          />
          <GithubIcon
            onClick={() => {
              openInNewTab("https://github.com/tegarnugroho");
            }}
          />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          {
            JSONSkills.data.map((item) => {
              return (
                <li className="item-list">
                  <h2>{item.title}</h2>
                  <span>{item.content}</span>
                </li>
              );
            })
          }
        </ol>
      </div>
    </div>
  );
}

export default Home;
