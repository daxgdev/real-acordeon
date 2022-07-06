import React from "react";
import "../styles/components/Banner.scss";

const Banner = ({ title, img }) => {
  return (
    <article className="banner">
      <img src={img} alt={title} className="banner__img" />
      <div className="title-container">
        <h1 className="banner__title">{title}</h1>
      </div>
    </article>
  );
};

export default Banner;
