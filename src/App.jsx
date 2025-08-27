import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  About  from './components/About';
import Info from './components/Info'
import Header from './components/Header';
import NavBar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { MasonryGrid } from "./components/MasonryGrid";
import { ProjectTile } from "./components/ProjectTile";
import { projects } from "./lib/data";

function App() {
  const [count, setCount] = useState(0)

  const {t, i18n: {changeLanguage, language}} = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "ukr" : "en";
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  };
  return (
    <Router>
    <div className="App">
      <NavBar />
      
      <MasonryGrid>
        {projects.map((p) => (
          <ProjectTile key={p.id} project={p} />
        ))}
      </MasonryGrid>
      <About AboutTitle={t('AboutTitle')} AboutText={t('AboutText')} />
      <Info />
     <h1>
       Our Translated Header: 
       {t('headerTitle', { appName: "App for Translations" })}
     </h1>
     <h3>
       Current Language: {currentLanguage}
     </h3>
     <button 
        type="button" 
        onClick={handleChangeLanguage}
     >
      Change Language
     </button>
   </div>
   </Router>
  )
}

export default App
