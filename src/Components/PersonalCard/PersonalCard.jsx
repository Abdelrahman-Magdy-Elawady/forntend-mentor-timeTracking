import styles from "./styles.module.scss";
import { Button } from "../index";
import { useState } from "react";
export default function PersonalCard({ data, filterSetter }) {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(data);
  return (
    <div className={styles.personalCard}>
      <div className={styles.upperSection}>
        <div className={styles.imgWrapper}>
          <img
            src={data.img}
            alt={data.name + "image"}
            loading="lazy"
            decoding="async"
            className={styles.img}
          />
        </div>
        <div>
          <span className={styles.reportFor}>Report for</span>
          <div className={styles.name}>{data.name}</div>
        </div>
      </div>
      <div className={styles.downSection}>
        {["daily", "weekly", "monthly"].map((button, index) => (
          <Button
            key={index}
            onClick={() => {
              filterSetter(button);
              setActiveIndex(index);
            }}
            style={{
              color: activeIndex === index && "white",
            }}
          >
            {button}
          </Button>
        ))}
      </div>
    </div>
  );
}
