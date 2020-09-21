import React from 'react';
import { Descriptions, Tag, Divider } from 'antd';
import moment from 'moment';
import { CheckOutlined } from '@ant-design/icons';

const Skills = () => {
  
  
  return (
    <div className="card shadow">
      <div className="card-header bg-primary text-center">
        <h4 className="text-light">Compétences</h4>
      </div>
      <div className="card-body">
      <Descriptions title="Informatique">
        <Descriptions.Item label="language">
            <div className="d-flex flex-wrap">
            <Tag className="m-1" color="red">Ruby</Tag>
            <Tag className="m-1"color="gold">JavaScript</Tag>
            <Tag className="m-1"color="blue">CSS3</Tag>
            <Tag className="m-1"color="gold">Python</Tag>
            <Tag className="m-1"color="geekblue">C</Tag>
            <Tag className="m-1"color="geekblue">C++</Tag>
            <Tag className="m-1"color="black">Bash</Tag>
            <Tag className="m-1"color="cyan">SQL</Tag>
            </div>
          </Descriptions.Item>
        <Descriptions.Item label="framework">
            <div className="d-flex flex-wrap">
            <Tag className="m-1" color="volcano">Ruby On Rails</Tag>
            <Tag className="m-1"color="geekblue">ReactJS</Tag>
            <Tag className="m-1"color="purple">Bootstrap</Tag>
            <Tag className="m-1"color="geekblue">React Native</Tag>
            <Tag className="m-1"color="green">Pygame</Tag>
            </div>
          </Descriptions.Item>
          <Descriptions.Item label="autre">
            <div className="d-flex flex-wrap">
            <Tag className="m-1" color="volcano">Redis</Tag>
            <Tag className="m-1"color="cyan">PostgreSQL</Tag>
            <Tag className="m-1"color="purple">Redux</Tag>
            <Tag className="m-1"color="orange">AWS</Tag>
            <Tag className="m-1"color="blue">Docker</Tag>
            <Tag className="m-1"color="purple">STRIPE</Tag>
            <Tag className="m-1"color="black">Git</Tag>
            <Tag className="m-1"color="grey">SEO</Tag>
            <Tag className="m-1"color="green">Linux</Tag>
            </div>
          </Descriptions.Item>
      </Descriptions>
      <Descriptions title="Linguistique">
        <Descriptions.Item label="Français"><Tag color="blue">C2</Tag>  </Descriptions.Item>
        <Descriptions.Item label="Anglais"><Tag color="green">B1</Tag></Descriptions.Item>
        <Descriptions.Item label="Espagnol"><Tag color="volcano">A1</Tag></Descriptions.Item>
      </Descriptions>       
      </div>
    </div>
  )
}

export default Skills