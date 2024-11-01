import styles from "./styles.module.scss";
import { useState } from "react";
import { TimeLineCard, PersonalCard } from "../index";
import { useCallback } from "react";
export default function SinglePerson({ data }) {
  const [filterTerm, setFilterTerm] = useState("daily");
  const filterSetter = useCallback((filterType) => {
    if (
      filterType !== "daily" ||
      filterType !== "weekly" ||
      filterType !== "monthly"
    )
      return;
    setFilterTerm(filterType);
  }, []);

  return (
    <div className="">
      <PersonalCard
        data={{
          name: data.name,
          img: data.img,
        }}
        filterSetter={filterSetter}
      />
      <TimeLineCard
        data={{
          timeLine: data.timeLine,
        }}
        type="work"
      />
    </div>
  );
}
