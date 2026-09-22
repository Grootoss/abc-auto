import { useDragScroll } from "../../hooks/useDragScroll";
import styles from "./Blog.module.css";

const posts = [
  {
    id: 1,
    image: "/images/blog/blog-mobile-slide-1.jpg",
    date: "25 октября",
    title: "Тест Skoda Karoq Scout - городской карлик или настоящий скаут",
  },
  {
    id: 2,
    image: "/images/blog/blog-mobile-slide-1.jpg",
    date: "25 октября",
    title: "Тест Skoda Karoq Scout - городской карлик или настоящий скаут",
  },
  {
    id: 3,
    image: "/images/blog/blog-mobile-slide-1.jpg",
    date: "25 октября",
    title: "Тест Skoda Karoq Scout - городской карлик или настоящий скаут",
  },
  {
    id: 4,
    image: "/images/blog/blog-mobile-slide-1.jpg",
    date: "25 октября",
    title: "Тест Skoda Karoq Scout - городской карлик или настоящий скаут",
  },
  {
    id: 5,
    image: "/images/blog/blog-mobile-slide-1.jpg",
    date: "25 октября",
    title: "Тест Skoda Karoq Scout - городской карлик или настоящий скаут",
  },
  {
    id: 6,
    image: "/images/blog/blog-mobile-slide-1.jpg",
    date: "25 октября",
    title: "Тест Skoda Karoq Scout - городской карлик или настоящий скаут",
  },
];

function Blog() {
  const trackRef = useDragScroll<HTMLDivElement>();

  function scrollBy(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(`.${styles.card}`);
    const step = card instanceof HTMLElement ? card.offsetWidth + 20 : 340;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  return (
    <section className={styles.section} aria-label="Блог">
      <div className={styles.header}>
        <div className={styles.headerMain}>
          <h2 className={styles.heading}>Блог</h2>
          <a className={styles.all} href="#blog">
            Все статьи
          </a>
        </div>

        <div className={styles.nav}>
          <button
            type="button"
            className={styles.navPrev}
            aria-label="Предыдущие статьи"
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
            aria-label="Следующие статьи"
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
        {posts.map((post) => (
          <article key={post.id} className={styles.card} role="listitem">
            <img
              className={styles.image}
              src={post.image}
              alt=""
              width={280}
              height={168}
              draggable={false}
            />
            <time className={styles.date}>{post.date}</time>
            <h3 className={styles.title}>{post.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Blog;
