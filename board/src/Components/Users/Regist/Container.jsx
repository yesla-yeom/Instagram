import RegistComponent from "./Component";
import axios from "axios";

const RegistContainer = ({ theme }) => {
  const onClick = (userId, userPw, userName) => {
    axios.post("http://192.168.0.242:8080/api/users/regist", {
      userId,
      userPw,
      userName,
    });
  };

  return <RegistComponent onClick={onClick} theme={theme} />;
};

export default RegistContainer;
