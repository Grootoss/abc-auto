import styles from "./Contacts.module.css";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 12 12" aria-hidden="true" focusable="false">
      <path
        fill="#fff"
        d="M11.1657 9.02776L9.90331 8.1886L8.78109 7.44281C8.56451 7.29914 8.27346 7.34624 8.11357 7.55087L7.41916 8.44092C7.27 8.63406 7.00167 8.68956 6.78777 8.57148C6.31659 8.31016 5.7594 8.06411 4.53001 6.83679C3.30061 5.60946 3.05226 5.0555 2.79016 4.58572C2.67173 4.37244 2.72739 4.10491 2.92111 3.95621L3.81381 3.26386C4.01902 3.10447 4.06628 2.81428 3.92218 2.59832L3.19715 1.51389L2.33252 0.220768C2.18536 0.000665689 1.89076 -0.0654138 1.66324 0.0706256L0.666083 0.66707C0.396599 0.825373 0.198505 1.081 0.112836 1.38095C-0.159851 2.37221 -0.214829 4.55889 3.30001 8.06331C6.81485 11.5677 9.00783 11.5128 10.002 11.2408C10.3029 11.1555 10.5593 10.9579 10.718 10.6892L11.3162 9.69506C11.4527 9.46819 11.3864 9.17449 11.1657 9.02776Z"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path
        fill="#fff"
        d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.51 6.51 0 0 0 8 1.5zm0 11.6A5.1 5.1 0 1 1 13.1 8 5.11 5.11 0 0 1 8 13.1zm.7-8.2H7.3v4.1l3.5 2.1.7-1.2-2.8-1.6z"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path
        fill="#fff"
        d="M8 1.5A4.5 4.5 0 0 0 3.5 6c0 3.4 4.5 8 4.5 8s4.5-4.6 4.5-8A4.5 4.5 0 0 0 8 1.5zm0 6.1A1.6 1.6 0 1 1 9.6 6 1.6 1.6 0 0 1 8 7.6z"
      />
    </svg>
  );
}

function Contacts() {
  return (
    <section className={styles.section} aria-label="Контакты">
      <div className={styles.mapBlock}>
        <div className={styles.mapWrap}>
          <picture>
            <source
              media="(min-width: 1920px)"
              srcSet="/images/map-desktop.jpg"
            />
            <source media="(min-width: 768px)" srcSet="/images/map-tablet.jpg" />
            <img
              className={styles.map}
              src="/images/map.jpg"
              alt="Карта проезда к автосалону"
              width={728}
              height={400}
            />
          </picture>
          <img
            className={styles.pin}
            src="/images/pin.svg"
            alt=""
            width={35}
            height={49}
            aria-hidden="true"
          />
        </div>

        <div className={styles.card}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <span className={styles.icon}>
                <PhoneIcon />
              </span>
              <div className={styles.phones}>
                <a href="tel:+78005519431">+7 (800) 551-94-31</a>
                <a href="tel:+74952921867">+7 (495) 292-18-67</a>
              </div>
            </li>
            <li className={styles.item}>
              <span className={styles.icon}>
                <ClockIcon />
              </span>
              <span className={styles.hours}>
                <span className={styles.hoursShort}>с 08:00 до 21:00</span>
                <span className={styles.hoursFull}>Ежедневно с 08:00 до 21:00</span>
              </span>
            </li>
            <li className={styles.item}>
              <span className={styles.icon}>
                <PinIcon />
              </span>
              <span>
                Россия, Москва,
                <br />
                38КМ МКАД, 6Бс1
              </span>
            </li>
          </ul>

          <a className={styles.button} href="#directions">
            КАК ДО НАС ДОБРАТЬСЯ
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
