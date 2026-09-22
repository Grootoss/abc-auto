import { useDragScroll } from "../../hooks/useDragScroll";
import styles from "./Trust.module.css";

const reviews = [
  { id: 1, title: "Сайт отзовик" },
  { id: 2, title: "Сайт отзовик" },
  { id: 3, title: "Сайт отзовик" },
  { id: 4, title: "Сайт отзовик" },
  { id: 5, title: "Сайт отзовик" },
  { id: 6, title: "Сайт отзовик" },
];

const maps = [
  {
    id: "yandex",
    logo: "/images/yandex-map.svg",
    alt: "Яндекс Карты",
    score: "4.5",
  },
  {
    id: "google",
    logo: "/images/google-map.svg",
    alt: "Google Maps",
    score: "4.1",
  },
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

function RatingRow({
  compact = false,
  score = "4.5",
}: {
  compact?: boolean;
  score?: string;
}) {
  return (
    <div className={compact ? styles.ratingCompact : styles.rating}>
      <div className={styles.ratingLeft}>
        <span className={styles.recommend}>Рекомендуют 90%</span>
        <Stars />
      </div>
      <span className={compact ? styles.scoreSm : styles.score}>{score}</span>
    </div>
  );
}

function Trust() {
  const trackRef = useDragScroll<HTMLDivElement>();

  function scrollBy(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(`.${styles.slide}`);
    const step = card instanceof HTMLElement ? card.offsetWidth + 20 : 320;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  return (
    <section className={styles.section} aria-label="Нам доверяют">
      <div className={styles.head}>
        <h2 className={styles.heading}>Нам доверяют</h2>

        <div className={styles.nav}>
          <button
            type="button"
            className={styles.navPrev}
            aria-label="Предыдущие отзывы"
            onClick={() => scrollBy(-1)}
          >
            <svg viewBox="0 0 12 20" aria-hidden="true" focusable="false">
              <path
                d="M10 2 2 10l8 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            className={styles.navNext}
            aria-label="Следующие отзывы"
            onClick={() => scrollBy(1)}
          >
            <svg viewBox="0 0 12 20" aria-hidden="true" focusable="false">
              <path
                d="M2 2l8 8-8 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

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
            <div className={styles.mapInfo}>
              <img
                className={styles.brand}
                src={item.logo}
                alt={item.alt}
                width={296}
                height={46}
              />
              <p className={styles.salon}>Название автосалона</p>
            </div>
            <RatingRow score={item.score} />
          </article>
        ))}
      </div>
    </section>
  );
}

export default Trust;
