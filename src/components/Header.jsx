import React from "react";
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function About({ HeaderText}) {

    const [count, setCount] = useState(0)

    const {t, i18n: {changeLanguage, language}} = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(language);

    const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "ukr" : "en";
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
    };
  return (
    <>
      <section className="header">
        <img src="https://scontent.fcdg2-1.fna.fbcdn.net/v/t39.30808-1/337731333_1445034712569112_6189706550461322050_n.jpg?stp=cp0_dst-jpg_s80x80_tt6&_nc_cat=101&ccb=1-7&_nc_sid=9a2c5d&_nc_ohc=KIDg8Nb-Kz8Q7kNvwGy69yp&_nc_oc=AdmNRwyHjGAU9ZaGu15nCHz6q3k0gCo1fMz0oYYteO3s3SXGbJxGYHB1X3jyezABWH4vkFt-i1aygm1De_SpQA7r&_nc_zt=24&_nc_ht=scontent.fcdg2-1.fna&_nc_gid=MQryCMnOj_VHjl9nG9q4UA&oh=00_AfWNk0j8Z-pYydpgoLPb3g3_61BrLr5JHmglsQtaC3K4JA&oe=68B21EE7"/>
        <h2 className="header__title">{HeaderText}</h2>
    
      </section>
    </>
  );
}