import { useDragScroll } from "../../hooks/useDragScroll";
import styles from "./Partners.module.css";

const logos = [
  { src: "/images/banks/alpha-1.svg", alt: "Альфа Страхование" },
  { src: "/images/banks/vsk-2.svg", alt: "ВСК Страховой дом" },
  { src: "/images/banks/sovcom-3.svg", alt: "Совкомбанк Страхование" },
  { src: "/images/banks/rosgos-4.svg", alt: "Росгосстрах" },
];

const partners = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  ...logos[index % logos.length],
}));

function Partners() {
  const trackRef = useDragScroll<HTMLDivElement>();

  return (
    <section className={styles.section} aria-label="Банки-партнеры">
      <h2 className={styles.heading}>Банки-партнеры</h2>

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
