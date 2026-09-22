import { useDragScroll } from "../../hooks/useDragScroll";
import styles from "./Offer.module.css";
import { asset } from "../../utils/asset";

const specials = [
  {
    id: 1,
    title: "Первый автомобиль",
    subtitle: "1,9% по льготной ставке",
    image: asset("/images/offer/offer-girl.png"),
  },
  {
    id: 2,
    title: "Семейный автомобиль",
    subtitle: "1,9% по льготной ставке",
    image: asset("/images/offer/offer-car.png"),
  },
  {
    id: 3,
    title: "Экспресс-кредит",
    subtitle: "1,9% по льготной ставке",
    image: asset("/images/offer/offer-family.png"),
  },
];

function Offer() {
  const trackRef = useDragScroll<HTMLDivElement>();

  function scrollBy(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.querySelector(`.${styles.slide}`);
    const step = slide instanceof HTMLElement ? slide.offsetWidth + 24 : 360;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  return (
    <section className={styles.section} aria-label="Специальные предложения">
      <div className={styles.card}>
        <img
          className={styles.hand}
          src={asset("/images/offer/offer-hand.png")}
          alt=""
          width={290}
          height={195}
        />

        <h2 className={styles.title}>ПЕРЕБЬЕМ ПРЕДЛОЖЕНИЯ ОТ КОНКУРЕНТОВ!</h2>

        <p className={styles.text}>
          Скидки <span>от 10 до 25%</span> на стоимость автомобиля
        </p>

        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label className={styles.field}>
            <span className={styles.visuallyHidden}>Ваш телефон</span>
            <input
              className={styles.input}
              type="tel"
              name="phone"
              placeholder="Ваш телефон"
              autoComplete="tel"
            />
          </label>

          <button className={styles.submit} type="submit">
            ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ
          </button>
        </form>

        <p className={styles.legal}>
          Нажимая кнопку &quot;Отправить&quot; Вы даете согласие на обработку своих{" "}
          <a href="#privacy">персональных данных</a>
        </p>
      </div>

      <div className={styles.specials}>
        <div className={styles.specialsHead}>
          <h2 className={styles.specialsHeading}>Спецпредложения</h2>

          <div className={styles.nav}>
            <button
              type="button"
              className={styles.navPrev}
              aria-label="Предыдущие спецпредложения"
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
              aria-label="Следующие спецпредложения"
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
          {specials.map((item) => (
            <article
              key={item.id}
              className={styles.slide}
              role="listitem"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className={styles.slideContent}>
                <h3 className={styles.slideTitle}>{item.title}</h3>
                <p className={styles.slideText}>{item.subtitle}</p>
                <a className={styles.slideBtn} href="#special">
                  Узнать больше
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Offer;
