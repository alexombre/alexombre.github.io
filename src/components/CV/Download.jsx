import React from 'react';
import moment from 'moment';
import resume from '../../assets/cv-2.png';
import { Tooltip } from 'antd';
import cv from '../../assets/CV de Alexandre moutapam-1.pdf'

const Download = () => {
  
  
  return (
    <div className="container text-center">
      <Tooltip title="Cliquer pour télécharger">
        <a href={cv} download>
          <img
            width={400}
            src={resume}
            alt="resume insight"
          />
        </a>
      </Tooltip>
      
    </div>
      
      )
}

export default Download