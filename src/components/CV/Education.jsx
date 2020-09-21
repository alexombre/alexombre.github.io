import React from 'react';
import { Timeline, Tag } from 'antd';
import moment from 'moment';
import { CheckOutlined } from '@ant-design/icons';

const Education = () => {
  
  
  return (
    <div className="card shadow">
      <div className="card-header bg-primary text-center">
        <h4 className="text-light">Formation</h4>
      </div>
      <div class="card-body">
        <Timeline className="" mode="alternate">
          <Timeline.Item label="2020"><strong>Développeur Front-End</strong>
          <br/>
          THE_HACKING_PROJECT
            <br/>
            <Tag color="geekblue">ReactJS</Tag>
            <Tag color="green">API</Tag>
            <Tag color="volcano">POO</Tag>
            <Tag color="geekblue">React Native</Tag>
            <Tag color="red">Jest</Tag>
          </Timeline.Item>
          <Timeline.Item label="2019">
            <strong>Développeur Full Stack</strong>
            <br/>
            THE_HACKING_PROJECT
              <br/>
            <div>
              <Tag color="orange">HTML</Tag>
              <Tag color="geekblue">CSS</Tag>
              <Tag color="purple">Bootstrap</Tag>
              <Tag >Git</Tag>
              <Tag color="red">Ruby on Rails</Tag>
              <Tag color="gold">Javascript</Tag>
              <Tag color="cyan">PostgreSQL</Tag>
              <Tag color="volcano">Rspec</Tag>
              <Tag color="purple">Heroku</Tag>
            </div>
              
          </Timeline.Item>
          <Timeline.Item label="2017-2019">
            <strong>DUT GEII</strong>, Génie Électriqueet Informatique Industrielle (Niveau)<br/> 
            <Tag color="geekblue">Langage C/C++</Tag><Tag color="gold">Python</Tag><Tag color="purple">Circuit imprimé</Tag><br/>
            IUT de Cachan (94) – Université Paris-Saclay
          </Timeline.Item>
          <Timeline.Item label="2017">
            <strong>Baccalauréat STI2D</strong>, Spécialité Innovation Technologique et
              Eco-Conception <br/> 
            <Tag color="geekblue">Mention Très Bien</Tag><br/>
            Lycée Nicolas-Joseph CUGNOT – Neuilly-sur-Marne
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  )
}

export default Education