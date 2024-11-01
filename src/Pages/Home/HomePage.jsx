import styles from "./styles.module.scss";
import { persons } from "./constants";
import { SinglePerson } from "../../Components";

export default function HomePage() {
  return (
    <div className={styles.parent}>
      {persons.map((person, index) => (
        <SinglePerson key={index} data={person} />
      ))}
    </div>
  );
}
