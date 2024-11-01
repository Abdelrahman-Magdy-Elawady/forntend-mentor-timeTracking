import styles from "./styles.module.scss";
import {
  workIcon,
  studyIcon,
  socialIcon,
  selfCareIcon,
  playIcon,
  exerciseIcon,
  ellipsis,
} from "../../assets";
import { TimeLineCard, PersonalCard } from "../index";
export default function SinglePerson({ data }) {
  console.log(data);
  return (
    <div className="">
      <PersonalCard
        data={{
          name: data.name,
          img: data.img,
        }}
      />
      <TimeLineCard
        data={{
          timeLine: data.timeLine,
        }}
      />
    </div>
  );
}
