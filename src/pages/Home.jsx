import React from 'react';
import { Row, Col, Divider, Progress } from 'antd';
import { FormattedMessage } from 'react-intl';
import StackCards from '../components/Home/StackCards';
import SkillsList from '../components/Home/SkillsList';
import { wavyTop, wavyBottom, webDev } from '../assets';
import Wave from 'react-wavify'
import { useTranslation, initReactI18next } from "react-i18next";

const Home = () => {
  
  const {t} = useTranslation();

  return (
    <div data-spy="scroll" data-target="#navbar">
      
        <div class="container pt-5">
          <div class="media">
            
            <div class="media-body">
              <h1 className="h2">Developpeur <strong className="text-primary">react</strong>if pour vous mettre sur de bons <strong className="text-danger">rails</strong> !</h1>
              <br/>
              <p>{t("home.intro") }</p>   
              <button className="btn btn-outline-primary">En savoir plus</button>
            </div>
            <img
                  src={webDev}
                  alt="web developper"
                  className="img-fluid d-none d-md-block"
                  width="450"
                  heigth="300"
                />
          </div>
          
        </div>
        
      
      <div id="stack" className="jumbottron jumbottron-fluid ">
        
        <div className="m-0 bg-blue">
          <Wave className="bg-white" fill="url(#gradient)">
            <defs>
              <linearGradient id="gradient" gradientTransform="rotate(90)">
                <stop offset="10%"  stopColor="#00c6a6" />
                <stop offset="90%" stopColor="#1488CC" />
              </linearGradient>
            </defs>
          </Wave>
          <div className="container">
            <Divider><h3  className="text-white">Stack Technique</h3> </Divider>

              <StackCards />

          </div>
          <Wave className="bg-white reverse" fill="url(#gradient)">
            <defs>
              <linearGradient id="gradient" gradientTransform="rotate(90)">
                <stop offset="10%"  stopColor="#00c6a6" />
                <stop offset="90%" stopColor="#1488CC" />
              </linearGradient>
            </defs>
          </Wave>
        </div>
      </div>
      
    <div id="competences" className="jumbottron jumbottron-fluid bg-transparent">
      
        <div className="container mt-5">
          <h3  className="text-center text-dark">{t("home.skills.title") }</h3>
          <div class="dropdown-divider"></div>
          <SkillsList />
        </div>
      </div>

      
    </div>
  )
  
}



export default Home;