import React, { useState, useEffect } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import StackCard from '../Home/StackCard';
import { antd, aws, bash,c ,cplus,docker,github,heroku,html,js,postgresql,python,redis, redux, seo, sql, stripe, react, ror, bootstrap, css, ruby } from '../../assets'

import { useTranslation, initReactI18next } from "react-i18next";
const StackCards = () => {
    const { t } = useTranslation();
    const [src, setSrc] = useState({});
    const [stack, setStack]= useState([{
        "name": "React.JS",
        "tags": ["framework"],
        "src": "react",
        "color": "#00d8ff",
        "percent": "100"
    },
    {
        "name": "Ruby on Rails",
        "tags": ["framework"],
        "src": "ror",
        "color": "#cc0000",
        "percent": "100"
    },
    {
        "name": "Bootstrap",
        "tags": ["design"],
        "src": "bootstrap",
        "color": "#8b56d9",
        "percent": "100"
    },{
        "name": "Ruby",
        "tags": ["langage"],
        "src": "ruby",
        "color": "#cc0000",
        "percent": "100"
    },{
        "name": "JavaScript",
        "tags": ["langage"],
        "src": "js",
        "color": "#cc0000",
        "percent": "100"
    },{
        "name": "Python",
        "tags": ["langage"],
        "src": "python",
        "color": "#cc0000",
        "percent": "25"
    },{
        "name": "HTML5",
        "tags": ["langage"],
        "src": "html",
        "color": "#cc0000",
        "percent": "100"
    },{
        "name": "CSS3",
        "tags": ["langage","design"],
        "src": "css",
        "color": "#cc0000",
        "percent": "100"
    },{
        "name": "C",
        "tags": ["langage"],
        "src": "c",
        "color": "#cc0000",
        "percent": "25"
    },{
        "name": "C++",
        "tags": ["langage"],
        "src": "cplus",
        "color": "#cc0000",
        "percent": "50"
    },{
        "name": "Bash",
        "tags": ["langage"],
        "src": "bash",
        "color": "#cc0000",
        "percent": "75"
    },{
        "name": "SQL",
        "tags": ["langage"],
        "src": "sql",
        "color": "#cc0000",
        "percent": "75"
    },{
        "name": "PostgreSQL",
        "tags": ["database"],
        "src": "postgresql",
        "color": "#cc0000",
        "percent": "100"
    },{
        "name": "Redis",
        "tags": ["database","websocket"],
        "src": "redis",
        "color": "#cc0000",
        "percent": "75"
    },{
        "name": "Github",
        "tags": ["autre","versionning","SCRUM","deployment"],
        "src": "github",
        "color": "#cc0000",
        "percent": "100"
    },{
        "name": "Heroku",
        "tags": ["autre","deployment"],
        "src": "heroku",
        "color": "#cc0000",
        "percent": "100"
    },{
        "name": "Amazon Web Services",
        "tags": ["autre","deployment","development","test","stockage"],
        "src": "aws",
        "color": "#cc0000",
        "percent": "75"
    },{
        "name": "Docker",
        "tags": ["autre","conteneur","development"],
        "src": "docker",
        "color": "#cc0000",
        "percent": "25"
    },{
        "name": "Stripe",
        "tags": ["autre","paiement"],
        "src": "stripe",
        "color": "#cc0000",
        "percent": "100"
    },{
        "name": "Ant Design",
        "tags": ["autre","design"],
        "src": "antd",
        "color": "#cc0000",
        "percent": "100"
    },{
        "name": "SEO",
        "tags": ["autre","marketing digital"],
        "src": "seo",
        "color": "#cc0000",
        "percent": "75"
    },{
        "name": "Redux",
        "tags": ["autre","architecture"],
        "src": "redux",
        "color": "#cc0000",
        "percent": "100"
    }
    ]);
    const [tags, setTags]= useState(["framework","langage","design","database","autre"]);
    const [tagsCheck, setTagsCheck] = useState(["langage"])
    const [research, setResearch] = useState()
    
    useEffect(() => {
        setSrc({ "antd":antd,
        "ruby": ruby,
        "aws":aws,
        "bash":bash,
        "c":c ,
        "cplus":cplus,
        "docker":docker,
        "github":github,
        "heroku":heroku,
        "html":html,
        "js":js,
        "postgresql":postgresql,
        "python":python,
        "redis":redis,
        "redux":redux,
        "seo":seo,
        "sql":sql,
        "stripe":stripe,
        "react":react,
        "ror":ror,
        "bootstrap":bootstrap,
        "css":css })
        document.querySelectorAll(".form-check-input").forEach( 
          (currentValue) => { 
            tagsCheck.includes(currentValue.value) ? currentValue.checked = true : currentValue.checked = false; 
          }
        );
        
    },[])
      
    useEffect(() => {
        console.log(tagsCheck)
    },[tagsCheck])
    
    const handleCheckboxChange = () => {
        let tmp = [];
        document.querySelectorAll(".form-check-input").forEach( 
          (currentValue) => { 
            if (currentValue.checked) { tmp.push(currentValue.value) }
          }
        );
        setTagsCheck(tmp);
    }
    
    const stackFilter = (stack) => (
        (research &&
        stack['name'].toLowerCase().includes(research) ) ||
        stack['tags'].some((tag) => (tagsCheck.includes(tag) ))
        
    )
      
    
    return (
        <>  
            <div className="container mb-3 card shadow">
                <div className="form-group">
                    <label for="search">Rechercher</label>
                    <input type="text" className="form-control" id="search" placeholder={research || "rechercher des technologies (ex: JavaScript, Ruby, etc...)"} value={research} onChange={(e) => setResearch(e.target.value.toLowerCase())} />
                </div>
                <div className="d-flex flex-wrap" onChange={handleCheckboxChange}>
                {tags.map((tag) => ( 
                    <div className="form-check form-check-inline mb-2 mx-auto">
                      <input className="form-check-input" type="checkbox" id={tag} value={tag} />
                      <label className="form-check-label" for={tag}><span className={'badge badge-'+tag}>{tag}</span></label>
                    </div>
                    ))}
                </div>
                
            </div>
            
            <div className="card-columns">
                {stack.filter(stackFilter).map((stack, index) => (
                
                    <StackCard name={stack['name']} src={src[stack['src']]} color={stack['color']} percent={stack['percent']} tags={stack['tags']} />
                    ))
                }
             </div>
         </>
        )
        
}

export default StackCards