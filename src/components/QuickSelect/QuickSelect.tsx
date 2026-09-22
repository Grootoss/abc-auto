import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./QuickSelect.module.css";
import { asset } from "../../utils/asset";

const brands = [
  { name: "Kia", logo: "kia-logo.svg" },
  { name: "Hyundai", logo: "hyundai-logo.svg" },
  { name: "Skoda", logo: "skoda-logo.svg" },
  { name: "Volkswagen", logo: "volkswagen-logo.svg" },
  { name: "Toyota", logo: "toyota-logo.svg" },
  { name: "Brilliance", logo: "brilliance-logo.svg" },
  { name: "Changan", logo: "changan-logo.svg" },
  { name: "Chery", logo: "chery-logo.svg" },
  { name: "CheryExeed", logo: "cheryexeed-logo.svg" },
  { name: "Chevrolet", logo: "chevrolet-logo.svg" },
  { name: "Citroen", logo: "citroen-logo.svg" },
  { name: "Datsun", logo: "datsun-logo.svg" },
  { name: "Dongfeng", logo: "dongfeng-logo.svg" },
  { name: "DW Hower", logo: "dwhower-logo.svg" },
  { name: "FAW", logo: "faw-logo.svg" },
  { name: "Ford", logo: "ford-logo.svg" },
  { name: "Foton", logo: "foton-logo.svg" },
  { name: "GAC", logo: "gac-logo.svg" },
  { name: "Geely", logo: "geely-logo.svg" },
  { name: "Great Wall", logo: "greatwall-logo.svg" },
  { name: "Haima", logo: "haima-logo.svg" },
  { name: "Haval", logo: "haval-logo.svg" },
  { name: "Honda", logo: "honda-logo.svg" },
  { name: "JAC", logo: "jac-logo.svg" },
  { name: "Lada", logo: "lada-logo.svg" },
  { name: "Lifan", logo: "lifan-logo.svg" },
  { name: "Mazda", logo: "mazda-logo.svg" },
  { name: "Mitsubishi", logo: "mitsubishi-logo.svg" },
  { name: "Nissan", logo: "nissan-logo.svg" },
  { name: "Opel", logo: "opel-logo.svg" },
  { name: "Peugeot", logo: "peugeot-logo.svg" },
  { name: "Ravon", logo: "ravon-logo.svg" },
  { name: "Renault", logo: "renault-logo.svg" },
  { name: "SsangYong", logo: "ssangyong-logo.svg" },
  { name: "Suzuki", logo: "suzuki-logo.svg" },
  { name: "UAZ", logo: "uaz-logo.svg" },
  { name: "Zotye", logo: "zotye-logo.svg" },
];

const priceMarks = [
  { value: 0, label: "0" },
  { value: 500, label: "500т" },
  { value: 800, label: "800т" },
  { value: 1100, label: "1,1м" },
  { value: 1400, label: "1,4м" },
  { value: 1700, label: "1,7м" },
  { value: 2000, label: "2м" },
  { value: 2300, label: "2,3м" },
  { value: 2700, label: "2,7м" },
  { value: 3000, label: "3м" },
];

const PRICE_MIN = 0;
const PRICE_MAX = 3000;

function formatPrice(value: number) {
  if (value >= 1000) {
    const millions = value / 1000;
    return `${String(millions).replace(".", ",")}м`;
  }
  if (value === 0) return "0";
  return `${value}т`;
}

function QuickSelect() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);
  const [bodyType, setBodyType] = useState("");
  const [gearbox, setGearbox] = useState("");

  const rangeStyle = useMemo(() => {
    const left = ((minPrice - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100;
    const right = ((maxPrice - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100;
    return {
      background: `linear-gradient(to right, #c2c2c4 0%, #c2c2c4 ${left}%, #ca0100 ${left}%, #ca0100 ${right}%, #c2c2c4 ${right}%, #c2c2c4 100%)`,
    };
  }, [minPrice, maxPrice]);

  function onMinChange(value: number) {
    setMinPrice(Math.min(value, maxPrice));
  }

  function onMaxChange(value: number) {
    setMaxPrice(Math.max(value, minPrice));
  }

  return (
    <section className={styles.section} aria-label="Подбор авто">
      <div className={styles.panel}>
        <ul className={styles.brands}>
          {brands.map((brand) => (
            <li key={brand.name}>
              <Link
                className={styles.brandLink}
                to={`/?brand=${encodeURIComponent(brand.name)}`}
              >
                <img
                  className={styles.brandLogo}
                  src={asset(`/images/quick-select/cars-logo/${brand.logo}`)}
                  alt=""
                  width={28}
                  height={28}
                />
                <span>{brand.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.card}>
          <h2 className={styles.title}>Быстрый подбор авто</h2>

          <div className={styles.priceBlock}>
            <div className={styles.priceHead}>
              <span className={styles.priceLabel}>Цена</span>
              <span className={styles.priceValue}>
                {formatPrice(minPrice)} - {formatPrice(maxPrice)}
              </span>
            </div>

            <div className={styles.sliderWrap}>
              <div className={styles.sliderTrack} style={rangeStyle} />
              <input
                className={styles.range}
                type="range"
                min={PRICE_MIN}
                max={PRICE_MAX}
                step={50}
                value={minPrice}
                aria-label="Минимальная цена"
                onChange={(e) => onMinChange(Number(e.target.value))}
              />
              <input
                className={styles.range}
                type="range"
                min={PRICE_MIN}
                max={PRICE_MAX}
                step={50}
                value={maxPrice}
                aria-label="Максимальная цена"
                onChange={(e) => onMaxChange(Number(e.target.value))}
              />
            </div>

            <div className={styles.marks} aria-hidden="true">
              {priceMarks.map((mark) => (
                <span key={mark.value} className={styles.mark}>
                  <i />
                  {mark.label}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.filters}>
            <label className={styles.selectWrap}>
              <span className={styles.visuallyHidden}>Тип кузова</span>
              <select
                className={styles.select}
                value={bodyType}
                onChange={(e) => setBodyType(e.target.value)}
              >
                <option value="">Тип кузова</option>
                <option value="sedan">Седан</option>
                <option value="suv">Кроссовер</option>
                <option value="hatchback">Хэтчбек</option>
                <option value="wagon">Универсал</option>
              </select>
            </label>

            <label className={styles.selectWrap}>
              <span className={styles.visuallyHidden}>Коробка</span>
              <select
                className={styles.select}
                value={gearbox}
                onChange={(e) => setGearbox(e.target.value)}
              >
                <option value="">Коробка</option>
                <option value="at">Автомат</option>
                <option value="mt">Механика</option>
                <option value="cvt">Вариатор</option>
                <option value="robot">Робот</option>
              </select>
            </label>

            <button type="button" className={styles.submit}>
              ПОКАЗАТЬ 73
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuickSelect;
