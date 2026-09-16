import { useDragScroll } from "../../hooks/useDragScroll";
import styles from "./Collections.module.css";

const items = [
  {
    id: 1,
    title: "Семейные автомобили",
    image: "/images/set/set-mobile-slide-1.jpg",
  },
  {
    id: 2,
    title: "Семейные автомобили",
    image: "/images/set/set-mobile-slide-1.jpg",
  },
  {
    id: 3,
    title: "Семейные автомобили",
    image: "/images/set/set-mobile-slide-1.jpg",
  },
];

function Collections() {
  const trackRef = useDragScroll<HTMLDivElement>();

  return (
    <section className={styles.section} aria-label="Наши подборки">
      <div className={styles.head}>
        <h2 className={styles.heading}>Наши подборки</h2>
        <a className={styles.allLink} href="#collections">
          Все подборки
        </a>
      </div>

      <div className={styles.track} role="list" ref={trackRef}>
        {items.map((item) => (
          <article key={item.id} className={styles.card} role="listitem">
            <img
              className={styles.image}
              src={item.image}
              alt=""
              width={280}
              height={200}
              draggable={false}
            />
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
