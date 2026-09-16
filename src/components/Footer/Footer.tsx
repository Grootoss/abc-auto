import styles from "./Footer.module.css";

const navLinks = [
  "Каталог авто",
  "Авто с пробегом",
  "Кредит и рассрочка",
  "Спецпредложения",
  "Такси в кредит",
];

const brandsLeft = [
  "Kia",
  "Hyundai",
  "Skoda",
  "Volkswagen",
  "Toyota",
  "Brilliance",
  "Dongfeng",
  "DW Hower",
  "FAW",
  "Ford",
  "Foton",
  "Geely",
  "Lifan",
  "Mazda",
  "Mitsubishi",
  "Nissan",
  "Opel",
  "Peugeot",
];

const brandsRight = [
  "Changan",
  "Chery",
  "CheryExeed",
  "Chevrolet",
  "Citroen",
  "Datsun",
  "Great Wall",
  "Haima",
  "Haval",
  "Honda",
  "JAC",
  "Lada",
  "Ravon",
  "Renault",
  "SsangYong",
  "Suzuki",
  "UAZ",
  "Zotye",
];

const creditLinks = [
  "Экспресс-кредит",
  "Семейный автомобиль",
  "Первый автомобиль",
  "Работникам медицины",
  "Рассрочка",
  "Trade-in",
];

const modelBlocks = [
  {
    title: "KIA",
    accent: false,
    models:
      "Picanto (2020), Sorento 2019, Sorento Prime, Sportage New, Rio 2019, Pro Ceed, Mohave 2019, Rio X-Line, Stringer (2020), Optima NEW, Ceed 2020, Cerato 2020, K900, Ceed SW 2020, Soul, Seltos, XCeed, K5, Rio, Sorento, Mohave, Rio X, Carnival, Picanto, Stinger, Cerato, Ceed, Ceed SW",
  },
  {
    title: "HYUNDAI",
    accent: false,
    models:
      "i30, Solaris 2019, Santa Fe 2020, Tucson 2020, H1, Elantra 2019, Sonata, Solaris, Creta 2020, Tucson N Line, Elantra, Palisade, Santa Fe, Tucson, Creta",
  },
  {
    title: "SKODA",
    accent: false,
    models:
      "Octavia Combi, Octavia 2019, Kodiaq 2020, Rapid 2019, Kodiaq Scout, Kodiaq Sportline, Superb New, Superb Combi New, Superb Sportline, Karoq, Rapid, Octavia A8, Kodiaq",
  },
  {
    title: "VOLKSWAGEN",
    accent: false,
    models:
      "Golf (2020), Polo 2019, Passat 2019, Tiguan 2019, Jetta 2019, Touareg, Teramont (2020), Amarok, Passat, Jetta, Polo, Arteon",
  },
  {
    title: "АВТО ПОД ТАКСИ",
    accent: true,
    models:
      "Hyundai Solaris, Skoda Octavia, Volkswagen Polo, Hyundai Solaris, Skoda Octavia, Volkswagen Polo, Hyundai Solaris, Skoda Octavia, Volkswagen Polo, Hyundai Solaris, Skoda Octavia, Volkswagen Polo",
  },
];

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

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <nav className={styles.nav} aria-label="Разделы сайта">
          {navLinks.map((label) => (
            <a key={label} className={styles.navLink} href="#">
              {label}
            </a>
          ))}
        </nav>

        <section className={styles.block}>
          <div className={styles.blockHead}>
            <h2 className={styles.heading}>
              Каталог авто
              <span className={styles.accent} aria-hidden="true" />
            </h2>
            <a className={styles.more} href="#">
              Подробнее
            </a>
          </div>
          <div className={styles.brands}>
            <ul className={styles.brandCol}>
              {brandsLeft.map((brand) => (
                <li key={brand}>
                  <a href="#">{brand}</a>
                </li>
              ))}
            </ul>
            <ul className={styles.brandCol}>
              {brandsRight.map((brand) => (
                <li key={brand}>
                  <a href="#">{brand}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.block}>
          <h2 className={styles.heading}>
            Кредит и рассрочка
            <span className={styles.accent} aria-hidden="true" />
          </h2>
          <ul className={styles.linkList}>
            {creditLinks.map((label) => (
              <li key={label}>
                <a href="#">{label}</a>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.block}>
          <h2 className={styles.heading}>
            Контакты
            <span className={styles.accent} aria-hidden="true" />
          </h2>

          <ul className={styles.contacts}>
            <li className={styles.contactItem}>
              <span className={styles.icon}>
                <PhoneIcon />
              </span>
              <div className={styles.phones}>
                <a href="tel:+78005519431">+7 (800) 551-94-31</a>
                <a href="tel:+74952921867">+7 (495) 292-18-67</a>
              </div>
            </li>
            <li className={styles.contactItem}>
              <span className={styles.icon}>
                <ClockIcon />
              </span>
              <span>с 08:00 до 21:00</span>
            </li>
            <li className={styles.contactItem}>
              <span className={styles.icon}>
                <PinIcon />
              </span>
              <div>
                <p className={styles.address}>Россия, Москва, 38КМ МКАД, 6Бс1</p>
                <div className={styles.addressLinks}>
                  <a className={styles.route} href="#directions">
                    Схема проезда
                  </a>
                  <a className={styles.sitemap} href="#sitemap">
                    Карта сайта
                  </a>
                </div>
              </div>
            </li>
          </ul>

          <button type="button" className={styles.city}>
            Москва
            <span className={styles.chevron} aria-hidden="true" />
          </button>
        </section>

        <section className={styles.bottom}>
          <div className={styles.rating} aria-label="Рейтинг в Яндексе 5,0 из 5">
            <div className={styles.ratingMain}>
              <span className={styles.yandex}>Я</span>
              <span className={styles.star} aria-hidden="true">
                ★
              </span>
              <span className={styles.score}>
                5,0<span className={styles.scoreMax}> /5</span>
              </span>
              <span className={styles.your}>
                <span className={styles.starOutline} aria-hidden="true">
                  ★
                </span>
                Ваша оценка
              </span>
            </div>
            <p className={styles.ratingCaption}>Рейтинг организации в Яндексе</p>
          </div>

          <p className={styles.copy}>
            © 2021 Автосалон &quot;ABC AUTO&quot;. Официальный дилер
          </p>
          <a className={styles.legal} href="#">
            Политика конфиденциальности
          </a>
          <a className={styles.legal} href="#">
            Пользовательское соглашение
          </a>
          <p className={styles.disclaimer}>
            Обращаем Ваше внимание на то, что данный интернет-сайт носит
            исключительно информационный характер и ни при каких условиях не
            является публичной офертой, определяемой положениями Статьи 437
            Гражданского кодекса Российской Федерации.
          </p>
        </section>

        <section className={styles.models} aria-label="Модели автомобилей">
          {modelBlocks.map((block) => (
            <div key={block.title} className={styles.modelBlock}>
              <h3
                className={
                  block.accent ? styles.modelTitleAccent : styles.modelTitle
                }
              >
                {block.title}
              </h3>
              <p className={styles.modelText}>{block.models}</p>
            </div>
          ))}
        </section>
      </div>
    </footer>
  );
}

export default Footer;
