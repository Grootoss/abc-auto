import { useMemo, useState } from "react";
import styles from "./Order.module.css";

const loanMarks = [
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

const termMarks = [6, 12, 24, 36, 48, 60, 72, 84];

function formatLoan(value: number) {
  if (value >= 1000) {
    return `${String(value / 1000).replace(".", ",")}м`;
  }
  if (value === 0) return "0";
  return `${value}т`;
}

function Order() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [trim, setTrim] = useState("");
  const [loanAmount, setLoanAmount] = useState(0);
  const [term, setTerm] = useState(6);
  const [downPayment, setDownPayment] = useState("0");

  const loanStyle = useMemo(() => {
    const pct = (loanAmount / 3000) * 100;
    return {
      background: `linear-gradient(to right, #ca0100 0%, #ca0100 ${pct}%, #c2c2c4 ${pct}%, #c2c2c4 100%)`,
    };
  }, [loanAmount]);

  const termStyle = useMemo(() => {
    const min = 6;
    const max = 84;
    const pct = ((term - min) / (max - min)) * 100;
    return {
      background: `linear-gradient(to right, #ca0100 0%, #ca0100 ${pct}%, #c2c2c4 ${pct}%, #c2c2c4 100%)`,
    };
  }, [term]);

  return (
    <section className={styles.section} aria-label="Заявка на автокредит">
      <div className={styles.card}>
        <h2 className={styles.heading}>Заявка на автокредит</h2>

        <div className={styles.selects}>
          <label className={styles.selectWrap}>
            <span className={styles.visuallyHidden}>Марка</span>
            <select
              className={styles.select}
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            >
              <option value="">Марка</option>
              <option value="skoda">Skoda</option>
              <option value="kia">Kia</option>
              <option value="toyota">Toyota</option>
            </select>
          </label>

          <label className={styles.selectWrap}>
            <span className={styles.visuallyHidden}>Модель</span>
            <select
              className={styles.select}
              value={model}
              onChange={(e) => setModel(e.target.value)}
            >
              <option value="">Модель</option>
              <option value="octavia">Octavia</option>
              <option value="rapid">Rapid</option>
            </select>
          </label>

          <label className={styles.selectWrap}>
            <span className={styles.visuallyHidden}>Комплектация</span>
            <select
              className={styles.select}
              value={trim}
              onChange={(e) => setTrim(e.target.value)}
            >
              <option value="">Комплектация</option>
              <option value="active">Active</option>
              <option value="ambition">Ambition</option>
            </select>
          </label>
        </div>

        <div className={styles.calc}>
          <div className={styles.priceBlock}>
            <div className={styles.priceRow}>
              <div className={styles.prices}>
                <p className={styles.price}>1 615 000 ₽</p>
                <p className={styles.oldPrice}>1 915 000 ₽</p>
              </div>
              <span className={styles.benefit}>Выгода 300 000 ₽</span>
            </div>

            <picture>
              <source media="(min-width: 1920px)" srcSet="/images/car-hide.png" />
              <img
                className={styles.car}
                src="/images/order/order-car-mobile.png"
                alt="Автомобиль"
                width={250}
                height={139}
              />
            </picture>

            <div className={styles.split}>
              <div className={styles.splitBar} aria-hidden="true">
                <span className={styles.splitBarRed} />
                <span className={styles.splitBarGray} />
              </div>
              <div className={styles.splitCols}>
                <div className={styles.splitCol}>
                  <span className={styles.pillRed}>0</span>
                  <span className={styles.splitLabel}>Первоначальный взнос</span>
                </div>
                <div className={styles.splitCol}>
                  <span className={styles.pillGray}>0</span>
                  <span className={styles.splitLabel}>Остаток по кредиту</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.params}>
            <div className={styles.sliderBlock}>
              <div className={styles.sliderHead}>
                <span>Сумма кредита, руб</span>
                <strong>{formatLoan(loanAmount)}</strong>
              </div>
              <div className={styles.sliderWrap}>
                <div className={styles.sliderTrack} style={loanStyle} />
                <input
                  className={styles.range}
                  type="range"
                  min={0}
                  max={3000}
                  step={50}
                  value={loanAmount}
                  aria-label="Сумма кредита"
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                />
              </div>
              <div className={styles.marks} aria-hidden="true">
                {loanMarks.map((mark) => (
                  <span key={mark.value} className={styles.mark}>
                    <i />
                    {mark.label}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.sliderBlock}>
              <div className={styles.sliderHead}>
                <span>Срок кредита, мес.</span>
                <strong>{term} мес.</strong>
              </div>
              <div className={styles.sliderWrap}>
                <div className={styles.sliderTrack} style={termStyle} />
                <input
                  className={styles.range}
                  type="range"
                  min={6}
                  max={84}
                  step={6}
                  value={term}
                  aria-label="Срок кредита"
                  onChange={(e) => setTerm(Number(e.target.value))}
                />
              </div>
              <div className={styles.marks} aria-hidden="true">
                {termMarks.map((mark) => (
                  <span key={mark} className={styles.mark}>
                    <i />
                    {mark}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.downRow}>
              <span className={styles.downLabel}>Первоначальный взнос, руб</span>
              <input
                className={styles.downInput}
                type="text"
                inputMode="numeric"
                value={downPayment}
                onChange={(e) => setDownPayment(e.target.value)}
                aria-label="Первоначальный взнос"
              />
            </div>
          </div>

          <hr className={styles.divider} />

          <div className={styles.lead}>
            <h3 className={styles.leadTitle}>
              Получить выгоду <span>300 000 ₽</span>
            </h3>

            <form
              className={styles.form}
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="Ваше имя"
                autoComplete="name"
              />
              <input
                className={styles.input}
                type="tel"
                name="phone"
                placeholder="Ваш телефон"
                autoComplete="tel"
              />
              <button className={styles.submit} type="submit">
                ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ
              </button>
            </form>

            <p className={styles.legal}>
              Нажимая кнопку &quot;Получить скидку&quot; Вы даете согласие на обработку
              своих персональных данных
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Order;
