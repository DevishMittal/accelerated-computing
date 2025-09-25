import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
import styles from './Teacher.module.css';

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  // autoslide, clearInterval = een cleanup functie noodzakelijk bij interval
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 2000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className={styles["section"]} id="faculty-profiles">\
      <div className={styles["title"]}>
        {/* <h2>
          <span>/</span>reviews
        </h2> */}
      </div>
      <div className={styles["section-center"]}>
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={id} className={styles[position]}>
              <img src={image} alt={name} className={styles["person-img"]} />
              <h4>{name}</h4>
              <p className={styles["title"]}>{title}</p>
              <p className={styles["text"]}>{quote}</p>
              {/* <FaQuoteRight className={styles["icon"]} /> */}
            </article>
          );
        })}
        <button className={styles["prev"]} onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className={styles["next"]} onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
