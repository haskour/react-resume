import { UserContext } from "../context/UserContext";

export default function AboutDescription() {
  return (
    <UserContext.Consumer>
      {(value) =>
        value.about ? (
          <div className="about-description">
            <p>{value.about}</p>
          </div>
        ) : (
          <></>
        )
      }
    </UserContext.Consumer>
  );
}
