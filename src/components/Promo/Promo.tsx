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
    imageDesktop: "/images/promo/promo-desktop-slide-1.jpg",
  },
  {
    id: 2,
    badge: "Осталось всего 10 авто!",
    title: "Грандиозная распродажа тестового парка!",
    subtitle: "Узнай свою цену!",
    imageMobile: "/images/promo/promo-mobile-slide-1.jpg",
    imageTablet: "/images/promo/promo-tablet-slide-1.png",
    imageDesktop: "/images/promo/promo-desktop-slide-1.jpg",
  },
  {
    id: 3,
    badge: "Осталось всего 10 авто!",
    title: "Грандиозная распродажа тестового парка!",
    subtitle: "Узнай свою цену!",
    imageMobile: "/images/promo/promo-mobile-slide-1.jpg",
    imageTablet: "/images/promo/promo-tablet-slide-1.png",
    imageDesktop: "/images/promo/promo-desktop-slide-1.jpg",
  },
  {
    id: 4,
    badge: "Осталось всего 10 авто!",
    title: "Грандиозная распродажа тестового парка!",
    subtitle: "Узнай свою цену!",
    imageMobile: "/images/promo/promo-mobile-slide-1.jpg",
    imageTablet: "/images/promo/promo-tablet-slide-1.png",
    imageDesktop: "/images/promo/promo-desktop-slide-1.jpg",
  },
  {
    id: 5,
    badge: "Осталось всего 10 авто!",
    title: "Грандиозная распродажа тестового парка!",
    subtitle: "Узнай свою цену!",
    imageMobile: "/images/promo/promo-mobile-slide-1.jpg",
    imageTablet: "/images/promo/promo-tablet-slide-1.png",
    imageDesktop: "/images/promo/promo-desktop-slide-1.jpg",
  },
  {
    id: 6,
    badge: "Осталось всего 10 авто!",
    title: "Грандиозная распродажа тестового парка!",
    subtitle: "Узнай свою цену!",
    imageMobile: "/images/promo/promo-mobile-slide-1.jpg",
    imageTablet: "/images/promo/promo-tablet-slide-1.png",
    imageDesktop: "/images/promo/promo-desktop-slide-1.jpg",
  },
];

function ArrowIcon({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg viewBox="0 0 12 20" aria-hidden="true" focusable="false">
      <path
        d={direction === "prev" ? "M10 2 2 10l8 8" : "M2 2l8 8-8 8"}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Promo() {
  const [active, setActive] = useState(0);
  const slide = slides[active];
  const last = slides.length - 1;

  const goPrev = () => setActive((current) => (current === 0 ? last : current - 1));
  const goNext = () => setActive((current) => (current === last ? 0 : current + 1));

  return (
    <section className={styles.promo} aria-label="Промо">
      <article className={styles.slide}>
        <picture className={styles.picture}>
          <source media="(min-width: 1920px)" srcSet={slide.imageDesktop} />
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
          <h2 className={styles.title}>
            Грандиозная распродажа
            <br />
            тестового парка!
          </h2>
          <p className={styles.subtitle}>{slide.subtitle}</p>
        </div>

        <button
          type="button"
          className={styles.arrowPrev}
          aria-label="Предыдущий слайд"
          onClick={goPrev}
        >
          <ArrowIcon direction="prev" />
        </button>
        <button
          type="button"
          className={styles.arrowNext}
          aria-label="Следующий слайд"
          onClick={goNext}
        >
          <ArrowIcon direction="next" />
        </button>

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
