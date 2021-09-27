import { UserContext } from "../context/UserContext";

export default function Header() {
  return (
    <UserContext.Consumer>
      {(value) => (
        <div className="cv-header">
          <h1 className="cv-header__name">
            {value.name}
          </h1>
          <h3 className="cv-header__job">{value.speciality}</h3>
        </div>
      )}
    </UserContext.Consumer>
  );
}
