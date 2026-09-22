import { useDragScroll } from "../../hooks/useDragScroll";
import styles from "./CarCard.module.css";
import { asset } from "../../utils/asset";

type Car = {
  id: number;
  name: string;
  trim: string;
  benefit: string;
  price: string;
  credit: string;
  power: string;
  fuel: string;
  speed: string;
  accel: string;
  image: string;
  imageDesktop: string;
};

const cars: Car[] = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  name: "Skoda Octavia",
  trim: "1.6 MPI MT Active",
  benefit: "Выгода до 300 000 ₽",
  price: "от 1 615 000 ₽",
  credit: "от 115 000 ₽/мес.",
  power: "115 л.с.",
  fuel: "5.3 л/км",
  speed: "189 км/ч",
  accel: "10,3 с.",
  image: asset("/images/car-card/car.jpg"),
  imageDesktop: asset("/images/car-card/car-desktop.png"),
}));

function GiftIcon() {
  return (
    <span className={styles.giftIcon} aria-hidden="true">
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
        <path
          d="M6 2.5V11M2.5 5h7M2.5 5v5.5A.5.5 0 0 0 3 11h6a.5.5 0 0 0 .5-.5V5M4.2 2.8c-.7-.7-.7-1.6 0-1.8.6-.2 1.2.3 1.8 1.2.6-.9 1.2-1.4 1.8-1.2.7.2.7 1.1 0 1.8L6 5 4.2 2.8Z"
          stroke="#fff"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function CarCardItem({ car }: { car: Car }) {
  return (
    <article
      className={styles.card}
      style={{ ["--desktop-bg" as string]: `url(${car.imageDesktop})` }}
    >
      <div className={styles.cardTop}>
        <h3 className={styles.name}>
          {car.name}
          <span className={styles.trim}>{car.trim}</span>
        </h3>
        <div className={styles.actions}>
          <button type="button" className={styles.iconBtn} aria-label="В избранное">
            <img src={asset("/images/heart.svg")} alt="" width={17} height={16} />
          </button>
          <button type="button" className={styles.iconBtn} aria-label="Сравнить">
            <img src={asset("/images/rating.svg")} alt="" width={13} height={16} />
          </button>
        </div>
      </div>

      <div className={styles.offerRow}>
        <span className={styles.badge}>Предложение дня</span>
        <span className={styles.benefit}>{car.benefit}</span>
      </div>

      <div className={styles.visual}>
        <ul className={styles.gifts}>
          <li>
            <GiftIcon />
            <span>
              Оборудование
              <em>в подарок</em>
            </span>
          </li>
          <li>
            <GiftIcon />
            <span>
              КАСКО
              <em>в подарок</em>
            </span>
          </li>
          <li>
            <GiftIcon />
            <span>
              Комплект резины
              <em>в подарок</em>
            </span>
          </li>
        </ul>

        <img
          className={styles.carImage}
          src={car.image}
          alt={`${car.name} ${car.trim}`}
          width={290}
          height={171}
          draggable={false}
        />
      </div>

      <div className={styles.priceRow}>
        <p className={styles.price}>{car.price}</p>
        <p className={styles.credit}>
          Кредит <strong>{car.credit}</strong>
        </p>
      </div>

      <ul className={styles.specs}>
        <li>
          <svg className={styles.specIcon} width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
            <path
              d="M7 1.5v3M4 4.5h6M3.5 7h7v4.5H3.5V7Zm1.5 0V5.5h4V7"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
          {car.power}
        </li>
        <li>
          <svg className={styles.specIcon} width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
            <path
              d="M4 2.5h4.5v9H4V2.5Zm4.5 2H11v5.5H8.5M6 11.5V13"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {car.fuel}
        </li>
        <li>
          <svg className={styles.specIcon} width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
            <circle cx="7" cy="7" r="5" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <path d="M7 7V3.5M7 7l2.5 2" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          {car.speed}
        </li>
        <li>
          <svg className={styles.specIcon} width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
            <circle cx="7" cy="7" r="5" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <path d="M7 4v3.2l2 1.3" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          {car.accel}
        </li>
      </ul>

      <div className={styles.buttons}>
        <button type="button" className={styles.reserve}>
          Резерв онлайн
        </button>
        <div className={styles.bottomBtns}>
          <button type="button" className={styles.buy}>
            Купить
          </button>
          <button type="button" className={styles.more}>
            Подробнее
          </button>
        </div>
      </div>
    </article>
  );
}

function CarCard() {
  const trackRef = useDragScroll<HTMLDivElement>();

  return (
    <section className={styles.section} aria-label="Автомобили в наличии">
      <h2 className={styles.heading}>Автомобили в наличии с ПТС</h2>

      <div className={styles.track} role="list" ref={trackRef}>
        {cars.map((car) => (
          <div key={car.id} className={styles.slide} role="listitem">
            <CarCardItem car={car} />
          </div>
        ))}
      </div>

      <button type="button" className={styles.showMore}>
        ПОКАЗАТЬ ЕЩЕ
      </button>
    </section>
  );
}

export default CarCard;
