import React from "react";
import Banner from "../components/Banner";
import Question from "../components/Question";
import banner from "../assets/img/banner-faq.jpg";

const Faq = () => {
  return (
    <section>
      <Banner img={banner} title="Preguntas frecuentes" />
      <Question />
    </section>
  );
};

export default Faq;
