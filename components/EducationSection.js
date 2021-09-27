import { UserContext } from "../context/UserContext";
import EducationItem from "./EducationItem";
export default function ExperienceSection() {
  return (
    <UserContext.Consumer>
      {
        (value) => value.education && value.education.map((item, key) => <EducationItem data={item} key={key} />)
      }
    </UserContext.Consumer>
  );
}
