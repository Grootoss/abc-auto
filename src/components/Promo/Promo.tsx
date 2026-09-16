import { useState } from "react";
import styles from "./Promo.module.css";

const slides = [
  {
    id: 1,
    badge: "Осталось всего 10 авто!",
    title: "Грандиозная распродажа тестового парка!",
    subtitle: "Узнай свою цену!",
    imageMobile: "/images/promo/promo-mobile-slide-1.jpg",
    imageTablet: "/images/promo/promo-tablet-slide-1.png",
  },
  {
    id: 2,
    badge: "Осталось всего 10 авто!",
    title: "Грандиозная распродажа тестового парка!",
    subtitle: "Узнай свою цену!",
    imageMobile: "/images/promo/promo-mobile-slide-1.jpg",
    imageTablet: "/images/promo/promo-tablet-slide-1.png",
  },
  {
    id: 3,
    badge: "Осталось всего 10 авто!",
    title: "Грандиозная распродажа тестового парка!",
    subtitle: "Узнай свою цену!",
    imageMobile: "/images/promo/promo-mobile-slide-1.jpg",
    imageTablet: "/images/promo/promo-tablet-slide-1.png",
  },
  {
    id: 4,
    badge: "Осталось всего 10 авто!",
    title: "Грандиозная распродажа тестового парка!",
    subtitle: "Узнай свою цену!",
    imageMobile: "/images/promo/promo-mobile-slide-1.jpg",
    imageTablet: "/images/promo/promo-tablet-slide-1.png",
  },
  {
    id: 5,
    badge: "Осталось всего 10 авто!",
    title: "Грандиозная распродажа тестового парка!",
    subtitle: "Узнай свою цену!",
    imageMobile: "/images/promo/promo-mobile-slide-1.jpg",
    imageTablet: "/images/promo/promo-tablet-slide-1.png",
  },
  {
    id: 6,
    badge: "Осталось всего 10 авто!",
    title: "Грандиозная распродажа тестового парка!",
    subtitle: "Узнай свою цену!",
    imageMobile: "/images/promo/promo-mobile-slide-1.jpg",
    imageTablet: "/images/promo/promo-tablet-slide-1.png",
  },
];

function Promo() {
  const [active, setActive] = useState(0);
  const slide = slides[active];

  return (
    <section className={styles.promo} aria-label="Промо">
      <article className={styles.slide}>
        <picture className={styles.picture}>
          <source media="(min-width: 768px)" srcSet={slide.imageTablet} />
          <img
            className={styles.image}
            src={slide.imageMobile}
            alt=""
            width={728}
            height={300}
          />
        </picture>

        <div className={styles.content}>
          <span className={styles.badge}>{slide.badge}</span>
          <h2 className={styles.title}>{slide.title}</h2>
          <p className={styles.subtitle}>{slide.subtitle}</p>
        </div>

        <div className={styles.dots} role="tablist" aria-label="Слайды">
          {slides.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-label={`Слайд ${index + 1}`}
              className={index === active ? styles.dotActive : styles.dot}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      </article>
    </section>
  );
}

export default Promo;
