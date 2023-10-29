import Header from "./Header";
import Fitness from "../assets/images/intuitive.png";
import "../assets/css/Projects.css";

export default function Projects() {
  return (
    <div className="projects projectsBackground">
      <div className="projectsHeader">
        <Header />
      </div>
      <div className="projectsContent">
        <div className="projectPageTitle">
          <h1>MY PROJECTS</h1>
        </div>
        <div className="projectList">
          <a href="https://intuitive-fitness.vercel.app/" target="_blank">
            <div className="intuitiveFitProject projectItem">
              {" "}
              <img
                src={Fitness}
                alt="screenshot of Intuitive Fitness website"
              ></img>
              <div className="projectListText">
                {" "}
                <p>Intuitive Fitness</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
