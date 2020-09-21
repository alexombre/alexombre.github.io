import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  
  let locationChecker = useLocation().pathname.split('/')[1]!="";
  
  return (
    <nav id="navbar" class="navbar navbar-expand-lg navbar-light bg-primary shadow">
      <span class="navbar-brand mb-0 h1"><Link class="text-white" to="/">Alexandre MOUTAPAM</Link></span>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse align-self-start justify-content-start" id="navbarNav">
        <ul class="navbar-nav">
          { !locationChecker &&
            <>
            <li class="nav-item">
              <a class="nav-link text-white" href="#stack">Stack</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#competences">Compétences</a>
            </li>
            </>
          }
          
        </ul>     
      </div>
      <div class="collapse navbar-collapse align-self-end justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link text-white" to="/cv">CV</Link>
          </li>
          <li class="nav-item d-none">
            <Link class="nav-link text-white" to="/project">Demo</Link>
          </li>
          <li class="nav-item dropdown d-none">
            <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Langage
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">FR</a>
              <a class="dropdown-item" href="#">EN</a>
            </div>
          </li>          
        </ul>     
      </div>
    </nav>
  )
}

export default Navbar