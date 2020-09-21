import React, { useState} from 'react';
import { Avatar, Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, CarryOutOutlined, AimOutlined, BookOutlined, CoffeeOutlined } from '@ant-design/icons';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
  Link
} from "react-router-dom";
import About from 'components/CV/About';
import Education from 'components/CV/Education';
import Skills from 'components/CV/Skills';
import Experiences from 'components/CV/Experiences';
import Hobbies from 'components/CV/Hobbies';
import Download from 'components/CV/Download'
import me from 'assets/Selfie.jpeg'

const DownloadIcon = () => {
  
  return (
  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-earmark-arrow-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7 2l.5-2.5 3 3L10 5a1 1 0 0 1-1-1zm-.5 3.5a.5.5 0 0 0-1 0v3.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 11.293V7.5z"/>
  </svg>
  )
}

const CV = () => {
  const { Header, Content, Sider } = Layout;  
  const [displayer,setDisplayer] = useState('d-block');
  return (
    <>
      <Layout>
      <Sider breakpoint="lg" collapsedWidth="0" width={200} className="site-layout-background"
        onBreakpoint={broken => {
          if (!broken)
            setDisplayer('d-block')
      }}
      onCollapse={(collapsed, type) => {
        if (!collapsed)
          setDisplayer('d-none')
        else
          setDisplayer('d-block')
      }}
        >
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          
        >   
            <div className="p-2 d-flex justify-content-center">
              <Avatar size={64}  src={me} />
            </div>
            
            <Menu.Item icon={<UserOutlined />} key="1"><Link to="/cv">A propos</Link></Menu.Item>
            <Menu.Item icon={<CarryOutOutlined />} key="2"><Link to="/cv/experiences">Expériences</Link></Menu.Item>
            <Menu.Item icon={<AimOutlined />} key="3"><Link to="/cv/skills">Compétences</Link></Menu.Item>
            <Menu.Item icon={<BookOutlined />} key="4"><Link to="/cv/education">Formation</Link></Menu.Item>
            <Menu.Item icon={<CoffeeOutlined />} key="5"><Link to="/cv/hobbies">Centre d'intéret</Link></Menu.Item>
            <Menu.Item icon={<DownloadIcon />} key="6"><Link to="/cv/download">Télécharger</Link></Menu.Item>
        </Menu>
      </Sider>
      <Layout className="vh-100">
            <Content className={displayer} style={{ margin: '24px 16px 0' }}>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <Switch>
                    <Route path="/cv/skills">
                      <Skills />
                    </Route>
                    <Route path="/cv/experiences">
                      <Experiences />
                    </Route>
                    <Route path="/cv/education">
                     <Education />
                    </Route>
                    <Route path="/cv/hobbies">
                      <Hobbies />
                    </Route>
                    <Route path="/cv/download">
                      <Download />
                    </Route>
                    <Route exact path="/cv">
                      <About />
                    </Route>
                </Switch>
              </div>
            </Content>
          </Layout>
        </Layout>
    </>
  )
  
}

export default CV