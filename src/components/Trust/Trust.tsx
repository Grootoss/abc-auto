import { useDragScroll } from "../../hooks/useDragScroll";
import styles from "./Trust.module.css";

const reviews = [
  { id: 1, title: "Сайт отзовик" },
  { id: 2, title: "Сайт отзовик" },
  { id: 3, title: "Сайт отзовик" },
];

const maps = [
  { id: "yandex", logo: "/images/yandex-map.svg", alt: "Яндекс Карты" },
  { id: "google", logo: "/images/google-map.svg", alt: "Google Maps" },
];

function Stars() {
  return (
    <div className={styles.stars} aria-hidden="true">
      <span className={styles.starOn}>★</span>
      <span className={styles.starOn}>★</span>
      <span className={styles.starOn}>★</span>
      <span className={styles.starOn}>★</span>
      <span className={styles.starOff}>★</span>
    </div>
  );
}

function RatingRow({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? styles.ratingCompact : styles.rating}>
      <div className={styles.ratingLeft}>
        <span className={styles.recommend}>Рекомендуют 90%</span>
        <Stars />
      </div>
      <span className={compact ? styles.scoreSm : styles.score}>4.5</span>
    </div>
  );
}

function Trust() {
  const trackRef = useDragScroll<HTMLDivElement>();

  return (
    <section className={styles.section} aria-label="Нам доверяют">
      <h2 className={styles.heading}>Нам доверяют</h2>

      <div className={styles.track} role="list" ref={trackRef}>
        {reviews.map((item) => (
          <article key={item.id} className={styles.slide} role="listitem">
            <h3 className={styles.slideTitle}>{item.title}</h3>
            <p className={styles.salon}>Название автосалона</p>
            <RatingRow compact />
          </article>
        ))}
      </div>

      <div className={styles.maps}>
        {maps.map((item) => (
          <article key={item.id} className={styles.mapCard}>
            <img
              className={styles.brand}
              src={item.logo}
              alt={item.alt}
              width={296}
              height={46}
            />
            <p className={styles.salon}>Название автосалона</p>
            <RatingRow />
          </article>
        ))}
      </div>
    </section>
  );
}

export default Trust;
