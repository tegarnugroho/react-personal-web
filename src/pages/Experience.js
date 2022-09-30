import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "../styles/Experience.css";
import { JSONExperience } from "../assets";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#242322">
        {
          JSONExperience.data.map((item) => {
            return (
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date={item.year}
                iconStyle={{
                  background:
                    item.type === "university" ? "#242322" : "#fab505",
                  color: "#fff",
                }}
                icon={
                  item.type === "university" ? <SchoolIcon /> : <WorkIcon />
                }
              >
                <h3 className="vertical-timeline-element-title">
                  {item.type == "university" ? item.companyName + ", " + item.subtitle : item.subtitle + " - " + item.companyName}
                </h3>

                <h4 className="vertical-timeline-element-subtitle">
                  {item.location}
                </h4>

                <p> {item.desc}</p>
              </VerticalTimelineElement>
            );
          })
        }
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
