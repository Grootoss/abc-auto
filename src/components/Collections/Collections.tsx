import { useDragScroll } from "../../hooks/useDragScroll";
import styles from "./Collections.module.css";
import { asset } from "../../utils/asset";

const items = [
  {
    id: 1,
    title: "Семейные автомобили",
    imageMobile: asset("/images/set/set-mobile-slide-1.jpg"),
    imageTablet: asset("/images/set/set-mobile-slide-1.jpg"),
  },
  {
    id: 2,
    title: "Автомобили для путешествий",
    imageMobile: asset("/images/set/set-mobile-slide-1.jpg"),
    imageTablet: asset("/images/set/set-tablet-slide-2.jpg"),
    imageDesktop: asset("/images/set/set-desktop-slide-2.jpg"),
  },
  {
    id: 3,
    title: "Городские автомобили",
    imageMobile: asset("/images/set/set-mobile-slide-1.jpg"),
    imageTablet: asset("/images/set/set-tablet-slide-2.jpg"),
    imageDesktop: asset("/images/set/set-desktop-slide-3.jpg"),
  },
];

function Collections() {
  const trackRef = useDragScroll<HTMLDivElement>();

  function scrollBy(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(`.${styles.card}`);
    const step = card instanceof HTMLElement ? card.offsetWidth + 24 : 360;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  return (
    <section className={styles.section} aria-label="Наши подборки">
      <div className={styles.head}>
        <div className={styles.headMain}>
          <h2 className={styles.heading}>Наши подборки</h2>
          <a className={styles.allLink} href="#collections">
            Все подборки
          </a>
        </div>

        <div className={styles.nav}>
          <button
            type="button"
            className={styles.navPrev}
            aria-label="Предыдущие подборки"
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
            aria-label="Следующие подборки"
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
        {items.map((item) => (
          <article key={item.id} className={styles.card} role="listitem">
            <picture>
              {"imageDesktop" in item && item.imageDesktop ? (
                <source media="(min-width: 1920px)" srcSet={item.imageDesktop} />
              ) : null}
              <source media="(min-width: 768px)" srcSet={item.imageTablet} />
              <img
                className={styles.image}
                src={item.imageMobile}
                alt=""
                width={340}
                height={240}
                draggable={false}
              />
            </picture>
            <div className={styles.overlay}>
              <h3 className={styles.title}>{item.title}</h3>
              <a className={styles.view} href="#collection">
                Посмотреть
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Collections;
