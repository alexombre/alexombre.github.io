import React, { useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import $ from 'jquery';
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BackTop } from 'antd';
import messagesFr from './assets/translation/fr';
import Home from './pages/Home';
import CV from './pages/CV';
import Education from './components/CV/Education';
import Skills from './components/CV/Skills';
import Experiences from './components/CV/Experiences';
import Hobbies from './components/CV/Hobbies';
import Download from './components/CV/Download';
import Project from './pages/Project';
import Navbar from './components/App/Navbar';
import Footer from './components/App/Footer';
import {
  BrowserRouter as Router,
  Route,
  Routes, useHistory
} from "react-router-dom";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      fr: {
        translation: messagesFr
      }
    },
    lng: "fr", // if you're using a language detector, do not define the lng option
    fallbackLng: "fr",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });


const App = () => {
  
  const [language, setLanguage] = useState('fr');
  
  useEffect(() => {
    
    $("#navbar a").on('click', function(event) {
    
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
    
        // Prevent default anchor click behavior
        event.preventDefault();
    
        // Store hash
        var hash = this.hash;
    
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
    
        // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
    
      } // End if
    
    }); 
  },[])
  
  return (
    <>
      <Router>
        <div className="flex">            
          <Navbar /> 
          <Routes>
            <Route path="/" element={<Home />} />
              
            <Route path="cv" element={<CV />} >
              <Route path="skills" element={<Skills />} />
                    <Route path="experiences" element={<Experiences />} />
                    <Route path="education" element={<Education />} />
                    <Route path="hobbies" element={<Hobbies />} />
                    <Route path="download" element={<Download />} />
            </Route>
            <Route path="project" element={<Project />} />
            
          </Routes>
          
        </div>
      </Router>
      
      <BackTop>
        <div className="rounded badge-langage d-flex justify-content-center p-2"><FontAwesomeIcon icon={faArrowUp} /></div>
      </BackTop>
      <Footer />
    </>
      
    
  )
  
}



export default App;
