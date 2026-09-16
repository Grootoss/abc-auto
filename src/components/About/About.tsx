import styles from "./About.module.css";

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

function About() {
  return (
    <section className={styles.section} aria-label="О компании">
      <h2 className={styles.heading}>О компании</h2>
      <p className={styles.text}>
        Мы располагаем огромной торговой площадкой более 5000 квадратных метров,
        у нас в наличии не менее 200 автомобилей как отечественного, так и
        иностранного производства. В штате автосалона «Альтера» работают
        настоящие профессионалы, которые знают особенности каждого конкретного
        автомобиля.
      </p>

      <div className={styles.media}>
        <img
          className={styles.image}
          src="/images/about-mobile.jpg"
          alt="Команда автосалона Альтера"
          width={296}
          height={180}
        />
        <button type="button" className={styles.play} aria-label="Смотреть видео о компании">
          <PlayIcon />
        </button>
      </div>
    </section>
  );
}

export default About;
