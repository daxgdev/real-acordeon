import React from "react";
import Banner from "../components/Banner";
import Question from "../components/Question";
import banner from "../assets/img/banner-faq.jpg";
import "../styles/pages/Faq.scss";

const Faq = () => {
  return (
    <>
      <Banner img={banner} title="Preguntas frecuentes" />
      <section className="faq">
        <div className="questions">
          <Question
            question="¿Real Acordeón debe estár conectado para poder usarse?"
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ut illum quaerat delectus veritatis vel labore aut modi recusandae earum repudiandae voluptatum ducimus deserunt iusto amet deleniti iure, accusamus unde."
          />
          <Question question="Buenas, ¿coito?" answer="Sisas" />
          <Question question="Buenas, ¿coito?" answer="Sisas" />
          <Question question="Buenas, ¿coito?" answer="Sisas" />
          <Question question="Buenas, ¿coito?" answer="Sisas" />
          <Question question="Buenas, ¿coito?" answer="Sisas" />
          <Question question="Buenas, ¿coito?" answer="Sisas" />
          <Question question="Buenas, ¿coito?" answer="Sisas" />
          <Question question="Buenas, ¿coito?" answer="Sisas" />
        </div>
        <div className="questions">
          <Question
            question="¿Real Acordeón debe estár conectado para poder usarse?"
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ut illum quaerat delectus veritatis vel labore aut modi recusandae earum repudiandae voluptatum ducimus deserunt iusto amet deleniti iure, accusamus unde."
          />
          <Question question="Buenas, ¿coito?" answer="Sisas" />
          <Question question="Buenas, ¿coito?" answer="Sisas" />
          <Question question="Buenas, ¿coito?" answer="Sisas" />
          <Question question="Buenas, ¿coito?" answer="Sisas" />
          <Question question="Buenas, ¿coito?" answer="Sisas" />
          <Question question="Buenas, ¿coito?" answer="Sisas" />
          <Question question="Buenas, ¿coito?" answer="Sisas" />
          <Question question="Buenas, ¿coito?" answer="Sisas" />
        </div>
      </section>
    </>
  );
};

export default Faq;
