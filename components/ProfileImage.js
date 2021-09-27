import Image from "next/image";
import { UserContext } from "../context/UserContext";
export default function ProfileImage() {
  return (
    <div className="profile-img">
      <UserContext.Consumer>
        {(value) =>
          value.photo ? <Image src={value.photo} height="220" width="220" /> : <></>
        }
      </UserContext.Consumer>
    </div>
  );
}
