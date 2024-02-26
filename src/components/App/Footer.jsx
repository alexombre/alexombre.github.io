import React from 'react';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => (
        <nav className="navbar navbar-light bg-primary justify-content-center">
          <span className="text-white">Made by <a className="text-white" href="https://github.com/alexombre">Alexandre Moutapam</a> with <FontAwesomeIcon icon={faHeart} /></span>
        </nav>
)

export default Footer
