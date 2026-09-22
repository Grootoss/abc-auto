import { useDragScroll } from "../../hooks/useDragScroll";
import styles from "./Partners.module.css";

const logos = [
  { src: "/images/banks/alpha-1.svg", alt: "Альфа Страхование" },
  { src: "/images/banks/vsk-2.svg", alt: "ВСК Страховой дом" },
  { src: "/images/banks/sovcom-3.svg", alt: "Совкомбанк Страхование" },
  { src: "/images/banks/rosgos-4.svg", alt: "Росгосстрах" },
];

const partners = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  ...logos[index % logos.length],
}));

function Partners() {
  const trackRef = useDragScroll<HTMLDivElement>();

  function scrollBy(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(`.${styles.card}`);
    const step = card instanceof HTMLElement ? card.offsetWidth + 20 : 340;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  return (
    <section className={styles.section} aria-label="Банки-партнеры">
      <div className={styles.head}>
        <h2 className={styles.heading}>Банки-партнеры</h2>

        <div className={styles.nav}>
          <button
            type="button"
            className={styles.navPrev}
            aria-label="Предыдущие партнеры"
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
            aria-label="Следующие партнеры"
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
        {partners.map((partner) => (
          <article key={partner.id} className={styles.card} role="listitem">
            <img
              className={styles.logo}
              src={partner.src}
              alt={partner.alt}
              draggable={false}
            />
          </article>
        ))}
      </div>
    </section>
  );
}

export default Partners;
