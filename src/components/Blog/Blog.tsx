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
];

function Blog() {
  const trackRef = useDragScroll<HTMLDivElement>();

  return (
    <section className={styles.section} aria-label="Блог">
      <div className={styles.header}>
        <h2 className={styles.heading}>Блог</h2>
        <a className={styles.all} href="#blog">
          Все статьи
        </a>
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
