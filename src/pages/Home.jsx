import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import '../App.css'
import  About  from '../components/About';
import Info from '../components/Info'
import NavBar from '../components/Navbar';
import { MasonryGrid } from "../components/MasonryGrid";
import { ProjectTile } from "../components/ProjectTile";
import { projects } from "../lib/data";

function Home() {
  const [count, setCount] = useState(0)

  const {t, i18n: {changeLanguage, language}} = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "ukr" : "en";
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  };
  return (
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

  )
}

export default Home;
