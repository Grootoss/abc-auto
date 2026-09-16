import { useDragScroll } from "../../hooks/useDragScroll";
import styles from "./Reviews.module.css";

const reviewText =
  "«Я нахожусь в салоне ALTERA, всем советую, хороший коллектив, добрые люди, приветствуют, это не обман, вам гарантия 100 % точно, чисто от меня, приезжайте! Мы приехали приобрести автомобиль в салон ALTERA...»";

const reviews = [
  { id: 1, name: "Сергей Васильев", text: reviewText },
  { id: 2, name: "Сергей Васильев", text: reviewText },
  { id: 3, name: "Сергей Васильев", text: reviewText },
];

function PlayIcon() {
  return (
    <svg
      className={styles.playIcon}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="12" r="12" fill="#e30613" />
      <path d="M10 8.2v7.6L16.2 12 10 8.2z" fill="#fff" />
    </svg>
  );
}

function Reviews() {
  const trackRef = useDragScroll<HTMLDivElement>();

  return (
    <section className={styles.section} aria-label="Отзывы">
      <h2 className={styles.heading}>Отзывы</h2>

      <div className={styles.track} role="list" ref={trackRef}>
        {reviews.map((item) => (
          <article key={item.id} className={styles.card} role="listitem">
            <div className={styles.media}>
              <span className={styles.logoMark} aria-hidden="true">
                A
              </span>
              <button
                type="button"
                className={styles.play}
                aria-label={`Смотреть отзыв: ${item.name}`}
              >
                <PlayIcon />
              </button>
            </div>

            <div className={styles.body}>
              <h3 className={styles.name}>{item.name}</h3>
              <p className={styles.text}>{item.text}</p>
              <button type="button" className={styles.more}>
                Подробнее
                <span className={styles.chevron} aria-hidden="true" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
