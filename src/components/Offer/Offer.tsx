import { useDragScroll } from "../../hooks/useDragScroll";
import styles from "./Offer.module.css";

const specials = [
  {
    id: 1,
    title: "Первый автомобиль",
    subtitle: "1,9% по льготной ставке",
    image: "/images/offer/offer-girl.png",
  },
  {
    id: 2,
    title: "Первый автомобиль",
    subtitle: "1,9% по льготной ставке",
    image: "/images/offer/offer-girl.png",
  },
  {
    id: 3,
    title: "Первый автомобиль",
    subtitle: "1,9% по льготной ставке",
    image: "/images/offer/offer-girl.png",
  },
];

function Offer() {
  const trackRef = useDragScroll<HTMLDivElement>();

  return (
    <section className={styles.section} aria-label="Специальные предложения">
      <div className={styles.card}>
        <img
          className={styles.hand}
          src="/images/offer/offer-hand.png"
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
        <h2 className={styles.specialsHeading}>Спецпредложения</h2>

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
