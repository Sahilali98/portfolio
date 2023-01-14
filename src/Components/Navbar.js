import React from 'react'
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { Link } from 'react-router-dom';


export default function Navbar() {
  let textColor = "#9C9C9C"
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg opacity-100" >
        <div className="container-fluid ">
          <a className="navbar-brand mx-5" href="/" style={{ color: textColor }}>Portfolio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-5">
                <Link className="nav-link active" aria-current="page" to="/" style={{ color: textColor }}>Home</Link>
              </li>
              <li className="nav-item mx-5">
                <Link className="nav-link active" aria-current="page" to="/studies" style={{ color: textColor }}>Studies</Link>
              </li>
              <li className="nav-item mx-5">
                <Link className="nav-link active" aria-current="page" to="/skills" style={{ color: textColor }}>Skills</Link>
              </li>
              <li className="nav-item mx-5">
                <Link className="nav-link active" aria-current="page" to="/recentWork" style={{ color: textColor }}>Recent Work</Link>
              </li>
              <li className="nav-item mx-5">
                <Link className="nav-link active" aria-current="page" to="/contactMe" style={{ color: textColor }}>Contact Me</Link>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link active" aria-current="page" href="https://www.linkedin.com/in/sk-sahil-ali-665248187/" style={{ color: textColor }}><AiFillLinkedin /></a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link active" aria-current="page" href="https://twitter.com/SKSAHIL68371298" style={{ color: textColor }}><AiOutlineTwitter /></a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link active" aria-current="page" href="https://github.com/Sahilali98" style={{ color: textColor }}><AiFillGithub /></a>
              </li>

            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}
