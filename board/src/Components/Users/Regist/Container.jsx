import RegistComponent from "./Component";
import axios from "axios";

const RegistContainer = () => {
  const onClick = (userId, userPw, userName) => {
    axios.post("http://localhost:8080/api/users/regist", {
      userId,
      userPw,
      userName,
    });
  };

  return <RegistComponent onClick={onClick} />;
};

export default RegistContainer;
