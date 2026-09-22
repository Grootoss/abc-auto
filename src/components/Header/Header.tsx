import { Link } from "react-router-dom";
import styles from "./Header.module.css";

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

function LocationIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M8 1.5A4.5 4.5 0 0 0 3.5 6c0 3.4 4.5 8 4.5 8s4.5-4.6 4.5-8A4.5 4.5 0 0 0 8 1.5zm0 6.1A1.6 1.6 0 1 1 9.6 6 1.6 1.6 0 0 1 8 7.6z"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.51 6.51 0 0 0 8 1.5zm0 11.6A5.1 5.1 0 1 1 13.1 8 5.11 5.11 0 0 1 8 13.1zm.7-8.2H7.3v4.1l3.5 2.1.7-1.2-2.8-1.6z"
      />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M8.02 1.5A6.5 6.5 0 0 0 1.9 11.2L1.5 14.5l3.4-.9A6.5 6.5 0 1 0 8.02 1.5zm3.78 9.2c-.16.45-.93.83-1.3.88-.33.05-.75.07-1.21-.08-.28-.09-.64-.2-1.1-.4-1.94-.84-3.2-2.8-3.3-2.93-.1-.13-.8-1.06-.8-2.02s.5-1.43.68-1.63c.17-.2.37-.25.5-.25h.36c.11 0 .27-.04.42.32.16.37.54 1.32.59 1.41.05.1.08.2.02.33-.07.13-.1.21-.2.32-.1.11-.21.24-.3.33-.1.1-.2.2-.09.39.11.2.5.82 1.07 1.33.74.66 1.36.86 1.55.96.2.1.31.08.42-.05.12-.13.5-.58.63-.78.13-.2.27-.16.45-.1.18.07 1.15.54 1.35.64.2.1.33.15.38.23.05.08.05.47-.11.92z"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 10 6" aria-hidden="true" focusable="false">
      <path
        d="M1 1.2 5 5l4-3.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const secondaryLinks = [
  { label: "Подбор авто", href: "#selection", accent: true },
  { label: "О компании", href: "#about" },
  { label: "Техцентр", href: "#service" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

const primaryLinks = [
  { label: "Каталог авто", href: "#catalog", hasMenu: true },
  { label: "Авто с пробегом", href: "#used", hasMenu: true },
  { label: "Кредит и рассрочка", href: "#credit", hasMenu: true },
  { label: "Спецпредложения", href: "#offers", hasMenu: true },
  { label: "Такси в кредит", href: "#taxi", hasMenu: false },
];

function HeaderActions({ className }: { className?: string }) {
  return (
    <div className={className ?? styles.actions}>
      <button type="button" className={styles.iconBtn} aria-label="Избранное">
        <img src="/images/heart.svg" alt="" width={17} height={16} />
        <span className={styles.badge}>10</span>
      </button>
      <button type="button" className={styles.iconBtn} aria-label="Сравнение">
        <img src="/images/rating.svg" alt="" width={13} height={16} />
        <span className={styles.badge}>12</span>
      </button>
      <button type="button" className={styles.iconBtn} aria-label="Поиск">
        <img src="/images/search.svg" alt="" width={16} height={16} />
      </button>
    </div>
  );
}

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <a className={styles.phone} href="tel:+78005519431">
          +7 (800) 551-94-31
        </a>
        <a className={styles.callback} href="#callback">
          <img src="/images/red-phone.svg" alt="" width={12} height={12} />
          Обратный звонок
        </a>
      </div>

      <div className={styles.desktopTop}>
        <div className={styles.desktopInner}>
          <span className={styles.metaItem}>
            <LocationIcon />
            Россия, Москва, 38КМ МКАД, 6Бс1
          </span>
          <span className={styles.metaItem}>
            <ClockIcon />
            Время работы: с 08:00 до 21:00
          </span>
          <a
            className={styles.whatsapp}
            href="https://wa.me/78005519431"
            target="_blank"
            rel="noreferrer"
          >
            <WhatsappIcon />
            Whatsapp
          </a>
        </div>
      </div>

      <div className={styles.mainBar}>
        <div className={styles.desktopInner}>
          <button type="button" className={styles.burger} aria-label="Открыть меню">
            <span />
            <span />
            <span />
          </button>

          <Link to="/" className={styles.logo} aria-label="ABC AUTO — на главную">
            <img
              src="/images/logo-mobile.svg"
              alt="ABC AUTO — Официальный дилер"
              width={127}
              height={37}
            />
          </Link>

          <div className={styles.slogan}>
            <span className={styles.sloganBadge}>10 лет</span>
            <span className={styles.sloganText}>превосходим ваши ожидания</span>
          </div>

          <nav className={styles.secondaryNav} aria-label="Дополнительное меню">
            {secondaryLinks.map((link) => (
              <a
                key={link.href}
                className={link.accent ? styles.secondaryAccent : undefined}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a className={styles.phoneTablet} href="tel:+78005519431">
            <span className={styles.phoneIcon}>
              <PhoneIcon />
            </span>
            +7 (800) 551-94-31
          </a>

          <div className={styles.contactsDesktop}>
            <span className={styles.phoneIcon}>
              <PhoneIcon />
            </span>
            <div className={styles.phones}>
              <a href="tel:+78005519431">+7 (800) 551-94-31</a>
              <a href="tel:+74952921867">+7 (495) 292-18-67</a>
            </div>
            <a className={styles.callbackBtn} href="#callback">
              ОБРАТНЫЙ ЗВОНОК
            </a>
          </div>

          <HeaderActions />
        </div>
      </div>

      <nav className={styles.desktopNav} aria-label="Основное меню">
        <div className={styles.desktopInner}>
          <ul className={styles.primaryNav}>
            {primaryLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>
                  {link.label}
                  {link.hasMenu ? <ChevronIcon /> : null}
                </a>
              </li>
            ))}
          </ul>
          <HeaderActions className={styles.actionsDesktop} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
