import { UserContext } from "../context/UserContext";
import ExperienceItem from "./ExperienceItem";
export default function ExperienceSection() {
  return (
    <UserContext.Consumer>
      {
        (value) => value.experience && value.experience.map((item, key) => <ExperienceItem data={item} key={key} />)
      }
    </UserContext.Consumer>
  );
}
