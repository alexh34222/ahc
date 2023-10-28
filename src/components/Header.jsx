import { Link } from "react-router-dom";

import "../assets/css/Header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="headerTitle">
        {" "}
        <h1>ALEX HALL CODING</h1>
      </div>
      <div className="headerNav">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}
