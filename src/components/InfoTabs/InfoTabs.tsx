import { useState } from "react";
import styles from "./InfoTabs.module.css";

const tabs = [
  {
    id: "salon",
    label: "Автосалон",
    title: "Об автосалоне ABC",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: "tradein",
    label: "Трейд-ин",
    title: "Трейд-ин в ABC",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: "buy",
    label: "Покупка",
    title: "Покупка автомобиля в ABC",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
] as const;

function InfoTabs() {
  const [activeId, setActiveId] = useState<(typeof tabs)[number]["id"]>("salon");
  const active = tabs.find((tab) => tab.id === activeId) ?? tabs[0];

  return (
    <section className={styles.section} aria-label="Информация">
      <div className={styles.tabs} role="tablist" aria-label="Разделы">
        {tabs.map((tab) => {
          const isActive = tab.id === activeId;

          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              className={isActive ? styles.tabActive : styles.tab}
              onClick={() => setActiveId(tab.id)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div
        className={styles.panel}
        role="tabpanel"
        id={`panel-${active.id}`}
        aria-labelledby={`tab-${active.id}`}
      >
        <h2 className={styles.title}>{active.title}</h2>
        <p className={styles.text}>{active.text}</p>
      </div>
    </section>
  );
}

export default InfoTabs;
