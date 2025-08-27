import React from "react";

export default function About({ AboutTitle, AboutText }) {
  return (
    <>
      <section className="section_about">
        <h2 className="about">{AboutTitle}</h2>
        <p className="about__text">{AboutText}</p>
      </section>
    </>
  );
}
