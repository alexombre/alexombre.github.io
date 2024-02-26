import React, { useState } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import { Progress } from 'antd';
import { useTranslation, initReactI18next } from "react-i18next";


const StackCard = ({tags, name, src, color, percent, rotate = "false"}) => {
  
  const gradient = {
            from: '#108ee9',
            to: color,
          }
          const { t } = useTranslation();
  const [homeTags, setHomeTags]= useState(t("home.tags"));        
  const label = (percent) => {
    let result = ""
    switch (percent) {
      case '25':
        result = "debutant"
        break;
      case '50':
        result = "intermédiaire"
        break;
      case '75':
        result = "avancé"
        break;
      case '100':
        result = "99.9 %"
        break;
      default:
        break;
    }
    return result
  }
  
  return (
    <div class="card">
      <div class="card-header bg-transparent">
        <h1 className="h4 text-center">{name}</h1>
        {tags.map((tag, index) => (
            
                <span className={ homeTags.includes(tag) ? "badge badge-pill badge-"+tag+" mx-1" : "badge badge-pill badge-light mx-1"  }>{tag}</span>
                ))
             }
      </div>
      <div class="card-body">
        <img
          src={src}
          alt="web developper"
          className={rotate == "true" ? "img-fluid rotate" : "img-fluid"}
        />
        
      </div>
      <div className="card-footer">
        <Progress strokeColor={gradient} percent={percent} status="active"   />
      </div>
     </div>
  )
}

export default StackCard