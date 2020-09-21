import React from 'react';
import { Descriptions, Image } from 'antd';
import moment from 'moment';
import { CheckOutlined } from '@ant-design/icons';
import me from 'assets/Selfie.jpeg'

const About = () => {
  
  
  return (
    <div class="card container shadow">
      <div class="card-body">
        <div className="text-center">
          <img
          width={100}
          height={100}
          src={me}
          className="img-fluid rounded-circle mb-3"
        />
        
        
        <Descriptions title="Alexandre Moutapam">
          <p>Développeur web Fullstack Junior, j'ai su apprendre la base du développement en autodidacte à travers plusieurs MOOC, formations et projets diverses et variés. Soif d'apprendre, je recherche désormais un CDI en tant que Fullstack, Frontend ou bien Backend développeur pour mettre en exergue les nombreux concepts théoriques que j'ai déjà assimilés.</p>
        </Descriptions>
        </div>
        <Descriptions title="Information personnelle">
          <Descriptions.Item label="Age">{moment().subtract(1998, 'years').format('YY') + ' ans'}</Descriptions.Item>
          <Descriptions.Item label="Adresse">1 Mail Federico Garcia Lorca, Noisy-le-Grand 93160, France</Descriptions.Item>
          <Descriptions.Item label="Telephone">+33 6.68.64.13.98</Descriptions.Item>
          <Descriptions.Item label="E-mail">moutapamalexandre@gmail.com</Descriptions.Item>
          <Descriptions.Item label="Permis B"><CheckOutlined style={{ color: 'green' }} /></Descriptions.Item>
          <Descriptions.Item label="LinkedIn"><a href="https://www.linkedin.com/in/alexandre-moutapam-524836151/" target="blank">linkedin.com/in/alexandre-moutapam-524836151</a></Descriptions.Item>
          <Descriptions.Item label="Malt">
            <a href="https://www.malt.fr/profile/alexandremoutapam" target="blank">malt.fr/profile/alexandremoutapam</a>
          </Descriptions.Item>
          <Descriptions.Item label="Stackoverflow">
            <a href="https://stackoverflow.com/users/14043062/alexandre-moutapam" target="blank">stackoverflow.com/users/14043062/alexandre-moutapam</a>
          </Descriptions.Item>
          <Descriptions.Item label="Github">
            <a href="https://github.com/alexombre/" target="blank">github.com/alexombre</a>
          </Descriptions.Item>
        </Descriptions>
      </div>
    </div>
  )
}

export default About