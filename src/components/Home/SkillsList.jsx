import React, { useState, useEffect } from 'react';
import {progressiveApp, progressTracking, devProductivity, peerProgramming} from '../../assets';
import { useTranslation, initReactI18next } from "react-i18next";



const SkillsList = ({ intl }) => {
  
  const { t } = useTranslation();
  const [src, setSrc] = useState({});
  const [skills, setSkills]= useState([{
    "title": "Site Web et application mobile",
    "src": "progressiveApp",
    "content": "Développer et maintenir une application web ou mobile n'a jamais été aussi simple. React, la nouvelle technologie créée par Facebook me permet de développer plusieurs types d'application qui pourront être disponible sur le web, Apple Store ou encore google Play en fonction de vos besoins."
},
{
    "title": "Gestion de projet",
    "src": "progressTracking",
    "content": "La gestion de projets est une seconde nature pour moi après avoir expérimenté la méthode agile. Sprint, user stories, collaboration et ponctualité sont autant de notion que je maitrise grâce aux outils que j'utilise tels que Trello ou encore Github project management."
},
{
    "title": "Productivité",
    "src": "devProductivity",
    "content": "Développeur productif, je sais automatiser les tâches rébarbatives que moi où un autre développeur a été amené à faire. Un temps précieux que je gagne me permettant d'en apprendre davantage sur le monde de l'informatique."
},{
    "title": "Travail d'équipe",
    "src": "peerProgramming",
    "content": "La collaboration étant une qualité indispensable, j'ai eu l'occasion d'expérimenter le pair programming à plusieurs reprises à distance ou en présentiel. Slack, Discord et Zoom font partie de la collection d'application que j'utilise en tant que développeur."
}]);
  
  useEffect(() => {
    setSrc({
      "progressiveApp": progressiveApp,
      "progressTracking": progressTracking,
      "devProductivity": devProductivity,
      "peerProgramming": peerProgramming
    })
    console.log(skills, "SkillsList")
    
  },[skills])
  

  return (
    <ul class="list-unstyled">
    {skills.map((skill, index) => (
            
            index%1 == 0 ? 
            
                <li class="media row">
                  <img class="mr-3 col-xl-5" src={src[skill["src"]]} alt="Progressive app image"/>
                  <div class="align-self-center media-body">
                    <h5 class="mt-0 mb-1">{skill["title"]}</h5>
                    {skill["content"]}
                  </div>
                </li>
                :
                <li class="media row">
                  <div class="align-self-center media-body d-none d-lg-block">
                    <h5 class="mt-0 mb-1">{skill["title"]}</h5>
                    {skill["content"]}
                  </div>
                  <img class="mr-3 col-xl-5" src={src[skill["src"]]} alt="Progressive app image"/>
                  <div class="align-self-center media-body d-block d-lg-none">
                    <h5 class="mt-0 mb-1">{skill["title"]}</h5>
                    {skill["content"]}
                  </div>
                </li>
            ))
        
        
        
    }
        
    </ul>
  )
}

export default SkillsList